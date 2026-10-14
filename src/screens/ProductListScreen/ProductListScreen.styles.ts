import { StyleSheet } from 'react-native';

import { MaxContentWidth, Spacing, ThemeColors, Typography } from '@/constants/theme';

export function createProductListScreenStyles(theme: ThemeColors) {
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
    header: {
      paddingHorizontal: Spacing.four,
      paddingTop: Spacing.three,
      paddingBottom: Spacing.two,
      backgroundColor: theme.surface,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
      gap: Spacing.three,
    },
    headerTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
    },
    appTitle: {
      fontSize: Typography.sizes.hero,
      fontWeight: Typography.weights.extrabold,
      color: theme.text,
      letterSpacing: -0.5,
    },
    itemCountText: {
      fontSize: Typography.sizes.xs,
      fontWeight: Typography.weights.medium,
      color: theme.textSecondary,
    },
    listContent: {
      paddingHorizontal: Spacing.four,
      paddingTop: Spacing.four,
      paddingBottom: Spacing.eight,
    },
  });
}
