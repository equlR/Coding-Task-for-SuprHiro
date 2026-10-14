import { StyleSheet } from 'react-native';

import { BorderRadius, Spacing, ThemeColors } from '@/constants/theme';

export function createSkeletonDetailStyles(theme: ThemeColors) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    heroPlaceholder: {
      width: '100%',
      height: 320,
      backgroundColor: theme.backgroundElement,
    },
    body: {
      padding: Spacing.four,
      gap: Spacing.three,
    },
    badgeRow: {
      flexDirection: 'row',
      gap: Spacing.two,
    },
    badgePlaceholder: {
      width: 80,
      height: 24,
      borderRadius: BorderRadius.full,
      backgroundColor: theme.backgroundElement,
    },
    titlePlaceholder: {
      width: '90%',
      height: 26,
      borderRadius: BorderRadius.sm,
      backgroundColor: theme.backgroundElement,
    },
    pricePlaceholder: {
      width: 120,
      height: 30,
      borderRadius: BorderRadius.sm,
      backgroundColor: theme.backgroundElement,
    },
    paragraphLine1: {
      width: '100%',
      height: 16,
      borderRadius: BorderRadius.sm,
      backgroundColor: theme.backgroundElement,
      marginTop: Spacing.two,
    },
    paragraphLine2: {
      width: '95%',
      height: 16,
      borderRadius: BorderRadius.sm,
      backgroundColor: theme.backgroundElement,
    },
    paragraphLine3: {
      width: '75%',
      height: 16,
      borderRadius: BorderRadius.sm,
      backgroundColor: theme.backgroundElement,
    },
    specsGrid: {
      marginTop: Spacing.four,
      gap: Spacing.two,
    },
    specsPlaceholder: {
      width: '100%',
      height: 100,
      borderRadius: BorderRadius.lg,
      backgroundColor: theme.backgroundElement,
    },
  });
}
