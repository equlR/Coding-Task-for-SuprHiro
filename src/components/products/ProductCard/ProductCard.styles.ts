import { StyleSheet } from 'react-native';

import { BorderRadius, Shadows, Spacing, ThemeColors, Typography } from '@/constants/theme';

export function createProductCardStyles(theme: ThemeColors) {
  return StyleSheet.create({
    cardWrapper: {
      marginBottom: Spacing.four,
    },
    card: {
      backgroundColor: theme.card,
      borderRadius: BorderRadius.xl,
      borderWidth: 1,
      borderColor: theme.border,
      overflow: 'hidden',
      ...Shadows.card,
    },
    cardPressed: {
      opacity: 0.92,
      transform: [{ scale: 0.99 }],
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      height: 190,
      backgroundColor: theme.backgroundElement,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    discountBadge: {
      position: 'absolute',
      top: Spacing.two + 2,
      left: Spacing.two + 2,
      backgroundColor: theme.danger,
      paddingHorizontal: Spacing.two + 2,
      paddingVertical: Spacing.half,
      borderRadius: BorderRadius.full,
    },
    discountBadgeText: {
      color: '#FFFFFF',
      fontSize: Typography.sizes.xs,
      fontWeight: Typography.weights.bold,
    },
    content: {
      padding: Spacing.four,
      gap: Spacing.two,
    },
    metaRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    brandText: {
      fontSize: Typography.sizes.xs,
      fontWeight: Typography.weights.semibold,
      color: theme.primary,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    title: {
      fontSize: Typography.sizes.base,
      fontWeight: Typography.weights.bold,
      color: theme.text,
      lineHeight: 20,
    },
    description: {
      fontSize: Typography.sizes.sm,
      color: theme.textSecondary,
      lineHeight: 18,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginTop: Spacing.one,
      paddingTop: Spacing.two,
      borderTopWidth: 1,
      borderTopColor: theme.borderLight,
    },
    priceGroup: {
      flexDirection: 'column',
    },
    originalPrice: {
      fontSize: Typography.sizes.xs,
      color: theme.textMuted,
      textDecorationLine: 'line-through',
    },
    price: {
      fontSize: Typography.sizes.md,
      fontWeight: Typography.weights.extrabold,
      color: theme.text,
    },
    stockText: {
      fontSize: Typography.sizes.xs,
      fontWeight: Typography.weights.medium,
    },
  });
}
