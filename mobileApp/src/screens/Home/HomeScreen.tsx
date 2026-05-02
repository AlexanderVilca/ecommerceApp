import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { sanityClient } from '../../lib/sanity/client';
import {
  ACTIVE_COUPONS_QUERY,
  BANNERS_QUERY,
  BRANDS_QUERY,
  CATEGORIES_QUERY,
  COUNT_ALL_PRODUCTS_QUERY,
  FEATURED_PRODUCTS_QUERY,
  PRODUCTS_BY_CATEGORY_QUERY,
} from '../../lib/sanity/queries';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/styles';
import { useNavigation } from '@react-navigation/native';
import { RefreshControl } from 'react-native/types_generated/index';
import HomeBanner from '../../components/home/HomeBanner';
import CategoriesSection from '../../components/home/CategoriesSection';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [banners, setBanners] = useState<any[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [brands, setBrands] = useState<any[]>([]);
  const [coupons, setCoupons] = useState<any[]>([]);
  const [categoryProducts, setCategoryProducts] = useState<
    CategoryWithProducts[]
  >([]);
  const [allProducts, setAllProducts] = useState<any[]>([]);

  const [page, setPage] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);
  const [laoding, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  //Fetch initial data
  const fetchInitialData = async () => {
    try {
      const [bannersList, featured, cats, brandsList, couponsList, totalCount] =
        await Promise.all([
          sanityClient.fetch(BANNERS_QUERY),
          sanityClient.fetch(FEATURED_PRODUCTS_QUERY),
          sanityClient.fetch(CATEGORIES_QUERY),
          sanityClient.fetch(BRANDS_QUERY),
          sanityClient.fetch(ACTIVE_COUPONS_QUERY),
          sanityClient.fetch(COUNT_ALL_PRODUCTS_QUERY),
        ]);

      setBanners(bannersList || []);
      setFeaturedProducts(featured || []);
      setCategories(cats || []);
      setBrands(brands || []);
      setCoupons(coupons || []);
      setTotalProducts(totalCount || 0);

      if (cats && cats?.length > 0) {
        const categoryProductsData = await Promise.all(
          cats?.map(async (category: any) => {
            const products = await sanityClient.fetch(
              PRODUCTS_BY_CATEGORY_QUERY,
              { categoryId: category._id },
            );
            return {
              _id: category._id,
              title: category.title,
              slug: category.slug,
              products: products || [],
            };
          }),
        );
        setCategoryProducts(categoryProductsData || []);
      }
    } catch (error) {
      console.error('Error fetching initial data:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  // Fetch Paginated Products
  // const fetchProducts = async () => {};

  const handleProductPress = (slug: string) => {
    navigation.navigate('ProductDetails', { slug });
  };

  const handleCategoryPress = (slug: string, categoryName: string) => {
    navigation.navigate('CategoryDetails', { slug, categoryName });
  };

  const handleBrandPress = (slug: string, brandName: string) => {
    navigation.navigate('BrandDetails', { slug, brandName });
  };

  // Render header with all sections
  const renderHeader = () => (
    <>
      {/* Banners */}
      {banners?.length > 0 && <HomeBanner banners={banners} />}
      {/* Categories */}
      <CategoriesSection
        categories={categories}
        onCategoryPress={handleCategoryPress}
      />
      {/* Brands */}
      {/* Category-wise product */}
      {/* Coupon */}
      {/* AllProducts */}
    </>
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={allProducts}
        renderItem={({ item, index }) => (
          <AllProductItem
            item={item}
            index={index}
            onPress={handleProductPress}
          />
        )}
        keyExtractor={(item, index) => `${item?._id}-${index}`}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={
          <View>
            <Text>Footer</Text>
          </View>
        }
        numColumns={2}
        showsVerticalScrollIndicator={false}
        // onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={refreshing}
        //     // onRefresh={handleReflesh}
        //     tintColor={colors.primary}
        //   />
        // }
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
  },
  list: {
    flex: 1,
  },
  loadingText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  divider: {
    height: 8,
    backgroundColor: colors.backgroundGray,
  },
  columnWrapper: {
    paddingHorizontal: spacing.screenHorizontal,
    gap: spacing.md,
    backgroundColor: colors.white,
  },
  skeletonHeader: {
    backgroundColor: colors.white,
    padding: spacing.md,
    gap: spacing.sm,
  },
  skeletonHeaderTitle: {
    height: 24,
    backgroundColor: '#E5E7EB',
    borderRadius: 6,
    width: '60%',
    overflow: 'hidden',
  },
  skeletonHeaderSubtitle: {
    height: 16,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    width: '40%',
    overflow: 'hidden',
  },
  skeletonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: spacing.screenHorizontal,
    gap: spacing.md,
    paddingTop: spacing.md,
    backgroundColor: colors.white,
  },
  skeletonCard: {
    width: '47%',
    backgroundColor: colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  skeletonImage: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#E5E7EB',
    overflow: 'hidden',
  },
  skeletonContent: {
    padding: spacing.md,
    gap: spacing.sm,
  },
  skeletonTitle: {
    height: 14,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    width: '80%',
    overflow: 'hidden',
  },
  skeletonPrice: {
    height: 16,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    width: '50%',
    overflow: 'hidden',
  },
  skeletonButton: {
    height: 36,
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
    marginTop: spacing.xs,
    overflow: 'hidden',
  },
  shimmer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
});

export default HomeScreen;
