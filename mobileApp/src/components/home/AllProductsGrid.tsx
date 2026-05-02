import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors'
import { spacing } from '../../constants/styles'

const AllProductsGrid = () => {
  return (
    <View>
      <Text>AllProductsGrid</Text>
    </View>
  )
}

export default AllProductsGrid

const styles = StyleSheet.create({
    allProductsHeader: {
        backgroundColor: colors.white,
        paddingHorizontal: spacing.screenHorizontal,
        paddingVertical: spacing.lg
    },
    allProductsTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: colors.textPrimary,
        marginBottom: 2,
    },
    allProductsSubtitle: {
        fontSize: 13,
        color: colors.textSecondary
    },
    productWrapper: {
        flex: 1,
        maxWidth: '50%'
    },
    loadingFooter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: spacing.sm,
        paddingVertical: spacing.lg,
        backgroundColor: colors.white
    },
    loadingFooterText: {
        fontSize: 13,
        color: colors.textSecondary
    },
    bottomSpacing: {
        height: spacing.xl,
        backgroundColor: colors.white
    }
})