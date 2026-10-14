import { StyleSheet } from 'react-native';

import { BorderRadius, Spacing, ThemeColors, Typography } from '@/constants/theme';

export function createSearchBarStyles(theme: ThemeColors) {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.surface,
      borderRadius: BorderRadius.lg,
      borderWidth: 1,
      borderColor: theme.border,
      paddingHorizontal: Spacing.four,
      height: 48,
    },
    containerFocused: {
      borderColor: theme.primary,
    },
    icon: {
      marginRight: Spacing.two + 2,
    },
    input: {
      flex: 1,
      fontSize: Typography.sizes.base,
      color: theme.text,
      height: '100%',
      padding: 0,
    },
    clearButton: {
      padding: Spacing.one,
      marginLeft: Spacing.one,
    },
  });
}
