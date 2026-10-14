import React from 'react';
import {
  Pressable,
  ScrollView,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import { createCategoryFilterBarStyles } from '@/components/products/CategoryFilterBar/CategoryFilterBar.styles';
import { useTheme } from '@/hooks/use-theme';
import { ProductCategory } from '@/types/product';

export interface CategoryFilterBarProps {
  categories: ProductCategory[];
  selectedCategory: string;
  onSelectCategory: (categorySlug: string) => void;
  style?: StyleProp<ViewStyle>;
}

export function CategoryFilterBar({
  categories,
  selectedCategory,
  onSelectCategory,
  style,
}: CategoryFilterBarProps) {
  const theme = useTheme();
  const styles = createCategoryFilterBarStyles(theme);

  const allCategoryList = [{ slug: 'all', name: 'All' }, ...categories];

  return (
    <View style={[styles.container, style]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {allCategoryList.map((item) => {
          const isSelected = selectedCategory === item.slug;
          return (
            <Pressable
              key={item.slug}
              style={({ pressed }) => [
                styles.chip,
                isSelected && styles.chipActive,
                pressed && styles.chipPressed,
              ]}
              onPress={() => onSelectCategory(item.slug)}
              accessibilityRole="button"
              accessibilityState={{ selected: isSelected }}>
              <Text
                style={[
                  styles.chipText,
                  isSelected && styles.chipTextActive,
                ]}>
                {item.name}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}
