import { StyleSheet } from 'react-native';

import { BorderRadius, MaxContentWidth, Shadows, Spacing, ThemeColors, Typography } from '@/constants/theme';

export function createProductDetailScreenStyles(theme: ThemeColors) {
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.background,
    },
    container: {
      flex: 1,
      alignSelf: 'center',
      width: '100%',
      maxWidth: MaxContentWidth,
    },
    navBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: Spacing.four,
      paddingVertical: Spacing.three,
      backgroundColor: theme.surface,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },
    navButton: {
      width: 40,
      height: 40,
      borderRadius: BorderRadius.full,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.backgroundElement,
    },
    navButtonPressed: {
      opacity: 0.7,
    },
    navTitle: {
      fontSize: Typography.sizes.md,
      fontWeight: Typography.weights.bold,
      color: theme.text,
      maxWidth: '65%',
      textAlign: 'center',
    },
    scrollContent: {
      paddingBottom: 110,
    },
    bottomBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.surface,
      borderTopWidth: 1,
      borderTopColor: theme.border,
      paddingHorizontal: Spacing.four,
      paddingVertical: Spacing.three,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      ...Shadows.cardHover,
    },
    bottomPriceGroup: {
      flexDirection: 'column',
    },
    bottomPriceLabel: {
      fontSize: Typography.sizes.xs,
      color: theme.textSecondary,
    },
    bottomPrice: {
      fontSize: Typography.sizes.xl,
      fontWeight: Typography.weights.extrabold,
      color: theme.text,
    },
    addToCartButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.primary,
      paddingHorizontal: Spacing.six,
      paddingVertical: Spacing.three + 2,
      borderRadius: BorderRadius.lg,
      gap: Spacing.two,
      ...Shadows.button,
    },
    addToCartButtonPressed: {
      opacity: 0.85,
      transform: [{ scale: 0.98 }],
    },
    addToCartButtonText: {
      color: '#FFFFFF',
      fontSize: Typography.sizes.base,
      fontWeight: Typography.weights.bold,
    },
  });
}
