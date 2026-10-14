import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback } from 'react';

import { useProductDetail } from '@/hooks/useProductDetail';
import { ProductDetailScreenProps, RootNavigationProp } from '@/navigation/types';

export function useProductDetailScreen() {
  const navigation = useNavigation<RootNavigationProp>();
  const route = useRoute<ProductDetailScreenProps['route']>();
  const { productId } = route.params;

  const detailData = useProductDetail(productId);

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    ...detailData,
    onBack: handleBack,
  };
}
