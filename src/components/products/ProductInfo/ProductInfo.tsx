import React from 'react';
import { Text, View } from 'react-native';

import { Badge } from '@/components/common/Badge/Badge';
import { RatingBadge } from '@/components/common/RatingBadge/RatingBadge';
import { createProductInfoStyles } from '@/components/products/ProductInfo/ProductInfo.styles';
import { useTheme } from '@/hooks/use-theme';
import { Product } from '@/types/product';
import {
  calculateDiscount,
  formatCurrency,
  formatStockStatus,
} from '@/utils/formatters';

export interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const theme = useTheme();
  const styles = createProductInfoStyles(theme);

  const discount = calculateDiscount(
    product.price,
    product.discountPercentage
  );
  const stock = formatStockStatus(product.availabilityStatus, product.stock);

  return (
    <View style={styles.container}>
      {/* Category, Brand & Stock */}
      <View style={styles.tagRow}>
        <View style={styles.brandBadge}>
          <Badge label={product.category} variant="primary" />
          {product.brand && (
            <Badge label={product.brand} variant="neutral" />
          )}
        </View>
        <Badge label={stock.label} variant={stock.variant} />
      </View>

      {/* Title */}
      <Text style={styles.title}>{product.title}</Text>

      {/* Rating */}
      <View style={styles.ratingRow}>
        <RatingBadge
          rating={product.rating}
          count={product.reviews?.length ?? 0}
          showCount
        />
      </View>

      {/* Price & Discount */}
      <View style={styles.priceSection}>
        <Text style={styles.price}>{formatCurrency(product.price)}</Text>
        {discount.hasDiscount && (
          <>
            <Text style={styles.originalPrice}>
              {discount.originalPriceFormatted}
            </Text>
            <Badge
              label={discount.discountPercentageFormatted}
              variant="danger"
            />
          </>
        )}
      </View>
      {discount.hasDiscount && (
        <Text style={styles.savingsText}>{discount.savingsFormatted}</Text>
      )}

      {/* Description */}
      <Text style={styles.sectionTitle}>About this product</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
}
