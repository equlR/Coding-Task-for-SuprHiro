import { Image } from 'expo-image';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { Badge } from '@/components/common/Badge/Badge';
import { RatingBadge } from '@/components/common/RatingBadge/RatingBadge';
import { createProductCardStyles } from '@/components/products/ProductCard/ProductCard.styles';
import { useTheme } from '@/hooks/use-theme';
import { Product } from '@/types/product';
import {
  calculateDiscount,
  formatCurrency,
  formatStockStatus,
} from '@/utils/formatters';

export interface ProductCardProps {
  product: Product;
  onPress: (product: Product) => void;
}

export function ProductCard({ product, onPress }: ProductCardProps) {
  const theme = useTheme();
  const styles = createProductCardStyles(theme);

  const discount = calculateDiscount(
    product.price,
    product.discountPercentage
  );
  const stock = formatStockStatus(product.availabilityStatus, product.stock);

  return (
    <View style={styles.cardWrapper}>
      <Pressable
        style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
        onPress={() => onPress(product)}
        accessibilityRole="button"
        accessibilityLabel={`View details for ${product.title}`}>
        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.thumbnail }}
            style={styles.image}
            contentFit="cover"
            transition={300}
            cachePolicy="memory-disk"
          />
          {discount.hasDiscount && (
            <View style={styles.discountBadge}>
              <Text style={styles.discountBadgeText}>
                {discount.discountPercentageFormatted}
              </Text>
            </View>
          )}
        </View>

        {/* Card Content */}
        <View style={styles.content}>
          <View style={styles.metaRow}>
            {product.brand ? (
              <Text style={styles.brandText} numberOfLines={1}>
                {product.brand}
              </Text>
            ) : (
              <Badge label={product.category} variant="neutral" />
            )}
            <RatingBadge rating={product.rating} />
          </View>

          <Text style={styles.title} numberOfLines={1}>
            {product.title}
          </Text>

          <Text style={styles.description} numberOfLines={2}>
            {product.description}
          </Text>

          {/* Footer: Price & Stock Status */}
          <View style={styles.footer}>
            <View style={styles.priceGroup}>
              {discount.hasDiscount && (
                <Text style={styles.originalPrice}>
                  {discount.originalPriceFormatted}
                </Text>
              )}
              <Text style={styles.price}>{formatCurrency(product.price)}</Text>
            </View>

            <Badge
              label={stock.label}
              variant={stock.variant}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
}
