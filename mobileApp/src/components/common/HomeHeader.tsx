import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/styles';
import { Heart, Search, ShoppingCart } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeHeader = () => {
  const navigation = useNavigation<any>();

  const handleNavigateToSearch = () => {
    navigation.navigate('HomeTab', {
      screen: 'Search',
    });
  };

  const handleNavigateToFavorite = () => {
    navigation.navigate('HomeTab', {
      screen: 'Favorite',
    });
  };

  const handleNavigateToCart = () => {
    navigation.navigate('HomeTab', {
      screen: 'Favorite',
    });
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <View style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../images/logo-beltran.webp')}
            resizeMode="contain"
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>Bienvenido Usuario</Text>
        </View>
        {/* Icons */}
        <View style={styles.rightSection}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleNavigateToSearch}
          >
            <Search color={colors.textPrimary} size={22} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleNavigateToFavorite}
          >
            <Heart color={colors.textPrimary} size={22} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>0</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleNavigateToCart}
          >
            <ShoppingCart color={colors.textPrimary} size={22} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>0</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.screenHorizontal,
    paddingVertical: 5,
    backgroundColor: colors.background,
  },
  logoContainer: {
    alignItems: 'flex-start',
  },
  logo: {
    width: 120,
    height: 28,
  },
  welcomeText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  goContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconButton: {
    padding: 4,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: -2,
    backgroundColor: colors.error,
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    borderWidth: 2,
    borderColor: colors.background,
  },
  badgeText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 12,
  },
});

export default HomeHeader;
