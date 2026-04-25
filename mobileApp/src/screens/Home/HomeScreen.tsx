import { useState } from 'react';
import { View, Text } from 'react-native';

const HomeScreen = () => {
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

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
