import { Image } from 'expo-image';
import React from 'react';
import {
  Pressable,
  ScrollView,
  View,
} from 'react-native';

import { createProductImageCarouselStyles } from '@/components/products/ProductImageCarousel/ProductImageCarousel.styles';
import { useTheme } from '@/hooks/use-theme';

export interface ProductImageCarouselProps {
  images: string[];
  selectedIndex: number;
  onSelectIndex: (index: number) => void;
}

export function ProductImageCarousel({
  images,
  selectedIndex,
  onSelectIndex,
}: ProductImageCarouselProps) {
  const theme = useTheme();
  const styles = createProductImageCarouselStyles(theme);

  const displayImages = images?.length > 0 ? images : [];
  const currentImage = displayImages[selectedIndex] || displayImages[0];

  return (
    <View style={styles.container}>
      {/* Featured Big Image */}
      <View style={styles.mainImageContainer}>
        {currentImage && (
          <Image
            source={{ uri: currentImage }}
            style={styles.mainImage}
            contentFit="contain"
            transition={300}
            cachePolicy="memory-disk"
          />
        )}
      </View>

      {/* Pagination Dots */}
      {displayImages.length > 1 && (
        <View style={styles.dotsContainer}>
          {displayImages.map((_, index) => (
            <View
              key={`dot-${index}`}
              style={[
                styles.dot,
                selectedIndex === index && styles.dotActive,
              ]}
            />
          ))}
        </View>
      )}

      {/* Thumbnail Selector Strip (if multiple images) */}
      {displayImages.length > 1 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.thumbnailRow}>
          {displayImages.map((imgUri, index) => {
            const isSelected = selectedIndex === index;
            return (
              <Pressable
                key={`thumb-${index}`}
                style={[
                  styles.thumbnailWrapper,
                  isSelected && styles.thumbnailWrapperActive,
                ]}
                onPress={() => onSelectIndex(index)}
                accessibilityRole="button"
                accessibilityLabel={`Select image ${index + 1}`}>
                <Image
                  source={{ uri: imgUri }}
                  style={styles.thumbnail}
                  contentFit="cover"
                  cachePolicy="memory-disk"
                />
              </Pressable>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}
