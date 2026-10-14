import { StyleSheet } from 'react-native';

import { BorderRadius, Spacing, ThemeColors, Typography } from '@/constants/theme';

export function createProductReviewsListStyles(theme: ThemeColors) {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.surface,
      padding: Spacing.four,
      gap: Spacing.three,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: Typography.sizes.md,
      fontWeight: Typography.weights.bold,
      color: theme.text,
    },
    reviewCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: BorderRadius.lg,
      padding: Spacing.three,
      gap: Spacing.two,
    },
    reviewHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    reviewerInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.two,
    },
    avatar: {
      width: 32,
      height: 32,
      borderRadius: BorderRadius.full,
      backgroundColor: theme.primaryLight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarText: {
      fontSize: Typography.sizes.xs,
      fontWeight: Typography.weights.bold,
      color: theme.primary,
    },
    reviewerName: {
      fontSize: Typography.sizes.sm,
      fontWeight: Typography.weights.semibold,
      color: theme.text,
    },
    reviewDate: {
      fontSize: Typography.sizes.xs,
      color: theme.textMuted,
    },
    comment: {
      fontSize: Typography.sizes.sm,
      color: theme.textSecondary,
      lineHeight: 18,
    },
    noReviewsText: {
      fontSize: Typography.sizes.sm,
      color: theme.textMuted,
      fontStyle: 'italic',
    },
  });
}
