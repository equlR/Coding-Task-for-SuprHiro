import { StyleSheet } from 'react-native';

import { BorderRadius, Shadows, Spacing, ThemeColors } from '@/constants/theme';

export function createSkeletonCardStyles(theme: ThemeColors) {
  return StyleSheet.create({
    card: {
      backgroundColor: theme.card,
      borderRadius: BorderRadius.xl,
      borderWidth: 1,
      borderColor: theme.border,
      overflow: 'hidden',
      marginBottom: Spacing.four,
      ...Shadows.card,
    },
    imagePlaceholder: {
      width: '100%',
      height: 180,
      backgroundColor: theme.backgroundElement,
    },
    content: {
      padding: Spacing.four,
      gap: Spacing.two,
    },
    badgePlaceholder: {
      width: 70,
      height: 18,
      borderRadius: BorderRadius.full,
      backgroundColor: theme.backgroundElement,
    },
    titlePlaceholder: {
      width: '85%',
      height: 18,
      borderRadius: BorderRadius.sm,
      backgroundColor: theme.backgroundElement,
      marginTop: Spacing.one,
    },
    subtitlePlaceholder: {
      width: '50%',
      height: 14,
      borderRadius: BorderRadius.sm,
      backgroundColor: theme.backgroundElement,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: Spacing.two,
    },
    pricePlaceholder: {
      width: 60,
      height: 22,
      borderRadius: BorderRadius.sm,
      backgroundColor: theme.backgroundElement,
    },
    ratingPlaceholder: {
      width: 45,
      height: 18,
      borderRadius: BorderRadius.sm,
      backgroundColor: theme.backgroundElement,
    },
  });
}
