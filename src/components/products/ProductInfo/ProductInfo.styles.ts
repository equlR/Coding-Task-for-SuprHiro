import { StyleSheet } from 'react-native';

import { Spacing, ThemeColors, Typography } from '@/constants/theme';

export function createProductInfoStyles(theme: ThemeColors) {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.surface,
      padding: Spacing.four,
      gap: Spacing.three,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },
    tagRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    brandBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.two,
    },
    title: {
      fontSize: Typography.sizes.xl,
      fontWeight: Typography.weights.bold,
      color: theme.text,
      lineHeight: 28,
    },
    ratingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.two,
    },
    priceSection: {
      flexDirection: 'row',
      alignItems: 'baseline',
      gap: Spacing.two,
      marginVertical: Spacing.one,
    },
    price: {
      fontSize: Typography.sizes.xxl,
      fontWeight: Typography.weights.extrabold,
      color: theme.text,
    },
    originalPrice: {
      fontSize: Typography.sizes.base,
      color: theme.textMuted,
      textDecorationLine: 'line-through',
    },
    savingsText: {
      fontSize: Typography.sizes.xs,
      fontWeight: Typography.weights.semibold,
      color: theme.success,
    },
    sectionTitle: {
      fontSize: Typography.sizes.md,
      fontWeight: Typography.weights.bold,
      color: theme.text,
      marginTop: Spacing.two,
    },
    description: {
      fontSize: Typography.sizes.base,
      color: theme.textSecondary,
      lineHeight: 22,
    },
  });
}
