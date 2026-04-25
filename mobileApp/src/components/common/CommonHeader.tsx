import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/styles';
import { ChevronLeft, Heart, Search, ShoppingBag } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface CommonHeaderProps {
  title: string;
  showBackButton?: boolean;
  showSearchIcon?: boolean;
  showCartIcon?: boolean;
  showWhishlistIcon?: boolean;
  onBackPress?: () => void;
}

const CommonHeader: React.FC<CommonHeaderProps> = ({
  title,
  showBackButton = true,
  showSearchIcon = true,
  showWhishlistIcon = true,
  onBackPress,
}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  const handleSearchPress = () => {
    navigation.navigate('HomeTab' as never, { screen: 'Search' } as never);
  };

  const handleCartPress = () => {
    navigation.navigate('HomeTab' as never, { screen: 'Cart' } as never);
  };

  const handleFavoritePress = () => {
    navigation.navigate('HomeTab' as never, { screen: 'Favorite' } as never);
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.leftSection}>
          {/* Left */}
          {showBackButton && (
            <TouchableOpacity
              style={styles.backButton}
              onPress={handleBackPress}
            >
              <ChevronLeft color={colors.textPrimary} size={24} />
            </TouchableOpacity>
          )}
          <Text>{title}</Text>
        </View>
        <View style={styles.rightSection}>
          {/* Right */}
          {showSearchIcon && (
            <TouchableOpacity
              onPress={handleSearchPress}
              style={styles.iconButton}
            >
              <Search color={colors.textPrimary} size={20} />
            </TouchableOpacity>
          )}
          {showWhishlistIcon && (
            <TouchableOpacity
              onPress={handleFavoritePress}
              style={styles.iconButton}
            >
              <Heart color={colors.textPrimary} size={20} />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>0</Text>
              </View>
            </TouchableOpacity>
          )}
          {showWhishlistIcon && (
            <TouchableOpacity
              onPress={handleCartPress}
              style={styles.iconButton}
            >
              <ShoppingBag color={colors.textPrimary} size={20} />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>0</Text>
              </View>
            </TouchableOpacity>
          )}
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
    // borderBottomWidth: 1,
    // borderBottomColor: colors.border,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  backButton: {
    marginRight: 12,
    padding: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
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
    gap: 12,
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

export default CommonHeader;
