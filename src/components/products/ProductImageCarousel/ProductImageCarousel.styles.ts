import { Dimensions, StyleSheet } from 'react-native';

import { BorderRadius, Spacing, ThemeColors } from '@/constants/theme';

const { width } = Dimensions.get('window');
export const CAROUSEL_IMAGE_HEIGHT = 340;

export function createProductImageCarouselStyles(theme: ThemeColors) {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.surface,
      alignItems: 'center',
    },
    mainImageContainer: {
      width: width,
      height: CAROUSEL_IMAGE_HEIGHT,
      backgroundColor: theme.backgroundElement,
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainImage: {
      width: '100%',
      height: '100%',
    },
    thumbnailRow: {
      flexDirection: 'row',
      paddingVertical: Spacing.three,
      paddingHorizontal: Spacing.four,
      gap: Spacing.two,
    },
    thumbnailWrapper: {
      width: 58,
      height: 58,
      borderRadius: BorderRadius.md,
      borderWidth: 2,
      borderColor: 'transparent',
      overflow: 'hidden',
      backgroundColor: theme.backgroundElement,
    },
    thumbnailWrapperActive: {
      borderColor: theme.primary,
    },
    thumbnail: {
      width: '100%',
      height: '100%',
    },
    dotsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: Spacing.two,
      gap: Spacing.one + 2,
    },
    dot: {
      width: 6,
      height: 6,
      borderRadius: BorderRadius.full,
      backgroundColor: theme.border,
    },
    dotActive: {
      width: 18,
      backgroundColor: theme.primary,
    },
  });
}
