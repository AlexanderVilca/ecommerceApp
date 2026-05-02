import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { spacing } from '../../constants/styles';
import { colors } from '../../constants/colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { urlFor } from '../../lib/sanity/client';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface Banner {
  _id: string;
  image: any;
  title: string;
  buttonTitle: string;
  buttonHref: string;
}

interface HomeBannerProps {
  banner: Banner[];
}

const HomeBanner = ({ banners }: HomeBannerProps) => {
  const navigation = useNavigation<any>();

  if (!banners || banners.length === 0) return null;

  const handleButtonPress = () => {
    navigation.navigate('ShopTab', {
      screen: 'Shop',
    });
  };

  const renderBanner = (banner: Banner) => {
    const imageUrl = banner?.image ? urlFor(banner?.image) : '';

    return (
      <View key={banner?._id} style={styles.bannerContainer}>
        {imageUrl && (
          <Image
            source={{ uri: imageUrl }}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        )}

        {/* Content */}

        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.bannerTitle}>{banner.title}</Text>
          </View>
          {/* Button */}
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText}>{banner.buttonTitle}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {banners.map(banner => renderBanner(banner))}
    </View>
  );
};

export default HomeBanner;

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  bannerContainer: {
    width: SCREEN_WIDTH,
    height: 200,
    backgroundColor: colors.backgroundGray,
    position: 'relative',
    marginBottom: spacing.sm,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  content: {
    position: 'absolute',
    bottom: spacing.xxl,
    left: spacing.lg,
    right: spacing.lg,
  },
  textContainer: {
    marginBottom: spacing.md,
  },
  bannerTitle: {
    fontSize: 25,
    fontWeight: '700',
    color: colors.black,
    lineHeight: 34,
    width: '70%',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 25,
    alignSelf: 'flex-start',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
