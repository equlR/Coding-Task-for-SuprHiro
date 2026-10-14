import { StyleSheet } from 'react-native';

import { BorderRadius, Spacing, ThemeColors, Typography } from '@/constants/theme';

export function createCategoryFilterBarStyles(theme: ThemeColors) {
  return StyleSheet.create({
    container: {
      paddingVertical: Spacing.two,
    },
    scrollContent: {
      gap: Spacing.two,
      paddingHorizontal: Spacing.four,
    },
    chip: {
      paddingHorizontal: Spacing.four,
      paddingVertical: Spacing.two,
      borderRadius: BorderRadius.full,
      backgroundColor: theme.surface,
      borderWidth: 1,
      borderColor: theme.border,
    },
    chipActive: {
      backgroundColor: theme.primary,
      borderColor: theme.primary,
    },
    chipPressed: {
      opacity: 0.8,
    },
    chipText: {
      fontSize: Typography.sizes.sm,
      fontWeight: Typography.weights.medium,
      color: theme.textSecondary,
      textTransform: 'capitalize',
    },
    chipTextActive: {
      color: '#FFFFFF',
      fontWeight: Typography.weights.bold,
    },
  });
}
