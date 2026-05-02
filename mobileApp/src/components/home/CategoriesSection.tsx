import { StyleSheet, View } from 'react-native';
import React from 'react';
import { colors } from '../../constants/colors';
import CategoryList from './CategoryList';

interface Props {
  categories: any[];
  onCategoryPress: (slug: string, categoryName: string) => void;
}

const CategoriesSection = ({ categories, onCategoryPress }: Props) => {
  return (
    <View style={styles.section}>
      <CategoryList categories={categories} onCategoryPress={onCategoryPress} />
    </View>
  );
};

export default CategoriesSection;

const styles = StyleSheet.create({
  section: {
    backgroundColor: colors.background,
  },
});
