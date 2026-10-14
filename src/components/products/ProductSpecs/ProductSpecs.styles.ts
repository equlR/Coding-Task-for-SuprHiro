import { StyleSheet } from 'react-native';

import { BorderRadius, Spacing, ThemeColors, Typography } from '@/constants/theme';

export function createProductSpecsStyles(theme: ThemeColors) {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.surface,
      padding: Spacing.four,
      gap: Spacing.three,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },
    title: {
      fontSize: Typography.sizes.md,
      fontWeight: Typography.weights.bold,
      color: theme.text,
    },
    grid: {
      backgroundColor: theme.backgroundElement,
      borderRadius: BorderRadius.lg,
      padding: Spacing.three,
      gap: Spacing.three,
    },
    specRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    specLabel: {
      fontSize: Typography.sizes.sm,
      color: theme.textSecondary,
    },
    specValue: {
      fontSize: Typography.sizes.sm,
      fontWeight: Typography.weights.semibold,
      color: theme.text,
    },
  });
}
