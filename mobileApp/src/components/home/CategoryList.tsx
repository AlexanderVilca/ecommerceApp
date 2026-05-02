import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../constants/colors';
import { spacing, textStyles } from '../../constants/styles';

interface CategoryItemProps {
  category: {
    _id: string;
    name: string;
    slug?: {
      current: string;
    };
    image?: any;
  };
  onPress: () => void;
}

interface CategoryListProps {
    categories: any[]
}

const CategoryList = ({ category, onPress }: CategoryItemProps) => {
  return (
    <View>
      <Text>CategoryList</Text>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingVertical: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  header: {
    paddingHorizontal: spacing.screenHorizontal,
    marginBottom: spacing.md,
  },
  title: {
    ...textStyles.heading4,
    marginBottom: 2,
  },
  subtitle: {
    ...textStyles.caption,
    color: colors.textSecondary,
  },
  scrollContent: {
    paddingHorizontal: spacing.screenHorizontal,
    gap: spacing.md,
  },
  categoryItem: {
    alignItems: 'center',
    width: 70,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: spacing.xs,
    backgroundColor: colors.backgroundGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.white,
  },
  categoryName: {
    ...textStyles.caption,
    textAlign: 'center',
    color: colors.textPrimary,
    fontWeight: '500',
    fontSize: 11,
  },
});
