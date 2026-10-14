import { StyleSheet } from 'react-native';

import { BorderRadius, Spacing, ThemeColors, Typography } from '@/constants/theme';

export function createRatingBadgeStyles(theme: ThemeColors) {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.warningLight,
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.half,
      borderRadius: BorderRadius.sm,
      gap: Spacing.one,
    },
    starIcon: {
      marginRight: 1,
    },
    ratingText: {
      fontSize: Typography.sizes.xs,
      fontWeight: Typography.weights.bold,
      color: theme.warning,
    },
    countText: {
      fontSize: Typography.sizes.xs,
      color: theme.textSecondary,
      marginLeft: 1,
    },
  });
}
