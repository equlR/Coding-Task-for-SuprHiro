import { StyleSheet } from 'react-native';

import { BorderRadius, Spacing, ThemeColors, Typography } from '@/constants/theme';

export function createEmptyViewStyles(theme: ThemeColors) {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: Spacing.six,
      paddingVertical: Spacing.eight,
    },
    iconContainer: {
      width: 68,
      height: 68,
      borderRadius: BorderRadius.full,
      backgroundColor: theme.backgroundElement,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: Spacing.four,
    },
    title: {
      fontSize: Typography.sizes.lg,
      fontWeight: Typography.weights.bold,
      color: theme.text,
      textAlign: 'center',
      marginBottom: Spacing.two,
    },
    message: {
      fontSize: Typography.sizes.base,
      color: theme.textSecondary,
      textAlign: 'center',
      lineHeight: 22,
      marginBottom: Spacing.five,
      maxWidth: 300,
    },
    actionButton: {
      paddingHorizontal: Spacing.five,
      paddingVertical: Spacing.three,
      borderRadius: BorderRadius.lg,
      backgroundColor: theme.backgroundElement,
      borderWidth: 1,
      borderColor: theme.border,
    },
    actionButtonPressed: {
      backgroundColor: theme.backgroundSelected,
    },
    actionButtonText: {
      fontSize: Typography.sizes.sm,
      fontWeight: Typography.weights.semibold,
      color: theme.primary,
    },
  });
}
