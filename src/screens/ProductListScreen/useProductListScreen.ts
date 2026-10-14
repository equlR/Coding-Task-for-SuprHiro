import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import { useProducts } from '@/hooks/useProducts';
import { RootNavigationProp } from '@/navigation/types';
import { Product } from '@/types/product';

export function useProductListScreen() {
  const navigation = useNavigation<RootNavigationProp>();
  const productData = useProducts();

  const handleProductPress = useCallback(
    (product: Product) => {
      navigation.navigate('ProductDetail', {
        productId: product.id,
        title: product.title,
      });
    },
    [navigation]
  );

  return {
    ...productData,
    onProductPress: handleProductPress,
  };
}
