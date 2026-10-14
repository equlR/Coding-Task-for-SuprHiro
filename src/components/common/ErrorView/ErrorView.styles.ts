import { StyleSheet } from 'react-native';

import { BorderRadius, Shadows, Spacing, ThemeColors, Typography } from '@/constants/theme';

export function createErrorViewStyles(theme: ThemeColors) {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: Spacing.six,
      paddingVertical: Spacing.eight,
    },
    iconContainer: {
      width: 72,
      height: 72,
      borderRadius: BorderRadius.full,
      backgroundColor: theme.dangerLight,
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
      marginBottom: Spacing.six,
      maxWidth: 320,
    },
    retryButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.primary,
      paddingHorizontal: Spacing.six,
      paddingVertical: Spacing.three + 2,
      borderRadius: BorderRadius.lg,
      gap: Spacing.two,
      ...Shadows.button,
    },
    retryButtonPressed: {
      opacity: 0.85,
      transform: [{ scale: 0.98 }],
    },
    retryButtonText: {
      fontSize: Typography.sizes.base,
      fontWeight: Typography.weights.semibold,
      color: '#FFFFFF',
    },
  });
}
