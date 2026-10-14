import { StyleSheet } from 'react-native';

import { BorderRadius, Spacing, ThemeColors, Typography } from '@/constants/theme';

export type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'neutral';

export function createBadgeStyles(theme: ThemeColors, variant: BadgeVariant = 'neutral') {
  const variantStyles = {
    primary: {
      bg: theme.primaryLight,
      text: theme.primary,
      border: 'transparent',
    },
    success: {
      bg: theme.successLight,
      text: theme.success,
      border: 'transparent',
    },
    warning: {
      bg: theme.warningLight,
      text: theme.warning,
      border: 'transparent',
    },
    danger: {
      bg: theme.dangerLight,
      text: theme.danger,
      border: 'transparent',
    },
    neutral: {
      bg: theme.backgroundElement,
      text: theme.textSecondary,
      border: theme.border,
    },
  }[variant];

  return StyleSheet.create({
    badge: {
      paddingHorizontal: Spacing.two + 2,
      paddingVertical: Spacing.half + 1,
      borderRadius: BorderRadius.full,
      backgroundColor: variantStyles.bg,
      borderWidth: 1,
      borderColor: variantStyles.border,
      alignSelf: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.one,
    },
    text: {
      fontSize: Typography.sizes.xs,
      fontWeight: Typography.weights.semibold,
      color: variantStyles.text,
      textTransform: 'capitalize',
    },
  });
}
