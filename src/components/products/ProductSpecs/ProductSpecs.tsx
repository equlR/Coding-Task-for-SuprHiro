import React from 'react';
import { Text, View } from 'react-native';

import { createProductSpecsStyles } from '@/components/products/ProductSpecs/ProductSpecs.styles';
import { useTheme } from '@/hooks/use-theme';
import { Product } from '@/types/product';

export interface ProductSpecsProps {
  product: Product;
}

export function ProductSpecs({ product }: ProductSpecsProps) {
  const theme = useTheme();
  const styles = createProductSpecsStyles(theme);

  const dimensionsStr = product.dimensions
    ? `${product.dimensions.width} × ${product.dimensions.height} × ${product.dimensions.depth} cm`
    : 'N/A';

  const specs = [
    { label: 'SKU', value: product.sku || 'N/A' },
    { label: 'Weight', value: product.weight ? `${product.weight} kg` : 'N/A' },
    { label: 'Dimensions', value: dimensionsStr },
    { label: 'Warranty', value: product.warrantyInformation || 'Standard' },
    { label: 'Shipping', value: product.shippingInformation || 'Standard shipping' },
    { label: 'Return Policy', value: product.returnPolicy || 'N/A' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Specifications & Details</Text>
      <View style={styles.grid}>
        {specs.map((item, index) => (
          <View key={`spec-${index}`} style={styles.specRow}>
            <Text style={styles.specLabel}>{item.label}</Text>
            <Text style={styles.specValue}>{item.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
