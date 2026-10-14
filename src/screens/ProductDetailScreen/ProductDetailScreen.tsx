import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Pressable,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ErrorView } from '@/components/common/ErrorView/ErrorView';
import { SkeletonDetail } from '@/components/common/LoadingSkeleton/SkeletonDetail';
import { ProductImageCarousel } from '@/components/products/ProductImageCarousel/ProductImageCarousel';
import { ProductInfo } from '@/components/products/ProductInfo/ProductInfo';
import { ProductReviewsList } from '@/components/products/ProductReviewsList/ProductReviewsList';
import { ProductSpecs } from '@/components/products/ProductSpecs/ProductSpecs';
import { useTheme } from '@/hooks/use-theme';
import { createProductDetailScreenStyles } from '@/screens/ProductDetailScreen/ProductDetailScreen.styles';
import { ApiError } from '@/types/api';
import { Product } from '@/types/product';
import { formatCurrency } from '@/utils/formatters';

export interface ProductDetailScreenViewProps {
  product: Product | null;
  isLoading: boolean;
  isRefreshing: boolean;
  error: ApiError | null;
  selectedImageIndex: number;
  onSelectImageIndex: (index: number) => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onRefresh: () => void;
  onRetry: () => void;
  onBack: () => void;
}

export function ProductDetailScreenView({
  product,
  isLoading,
  isRefreshing,
  error,
  selectedImageIndex,
  onSelectImageIndex,
  isFavorite,
  onToggleFavorite,
  onRefresh,
  onRetry,
  onBack,
}: ProductDetailScreenViewProps) {
  const theme = useTheme();
  const styles = createProductDetailScreenStyles(theme);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000);
  };

  // Error state
  if (error && !isRefreshing && !product) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.navBar}>
            <Pressable
              style={({ pressed }) => [
                styles.navButton,
                pressed && styles.navButtonPressed,
              ]}
              onPress={onBack}
              accessibilityRole="button"
              accessibilityLabel="Go back">
              <Ionicons name="arrow-back" size={22} color={theme.text} />
            </Pressable>
            <Text style={styles.navTitle}>Product Details</Text>
            <View style={{ width: 40 }} />
          </View>
          <ErrorView
            title="Failed to load product"
            message={error.message}
            onRetry={onRetry}
            retryText="Try Again"
          />
        </View>
      </SafeAreaView>
    );
  }

  // Loading state
  if (isLoading && !isRefreshing) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.navBar}>
            <Pressable
              style={({ pressed }) => [
                styles.navButton,
                pressed && styles.navButtonPressed,
              ]}
              onPress={onBack}
              accessibilityRole="button"
              accessibilityLabel="Go back">
              <Ionicons name="arrow-back" size={22} color={theme.text} />
            </Pressable>
            <Text style={styles.navTitle}>Loading...</Text>
            <View style={{ width: 40 }} />
          </View>
          <SkeletonDetail />
        </View>
      </SafeAreaView>
    );
  }

  if (!product) return null;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Top Navigation Bar */}
        <View style={styles.navBar}>
          <Pressable
            style={({ pressed }) => [
              styles.navButton,
              pressed && styles.navButtonPressed,
            ]}
            onPress={onBack}
            accessibilityRole="button"
            accessibilityLabel="Go back">
            <Ionicons name="arrow-back" size={22} color={theme.text} />
          </Pressable>

          <Text style={styles.navTitle} numberOfLines={1}>
            {product.title}
          </Text>

          <Pressable
            style={({ pressed }) => [
              styles.navButton,
              pressed && styles.navButtonPressed,
            ]}
            onPress={onToggleFavorite}
            accessibilityRole="button"
            accessibilityLabel={
              isFavorite ? 'Remove from favorites' : 'Add to favorites'
            }>
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={22}
              color={isFavorite ? theme.danger : theme.text}
            />
          </Pressable>
        </View>

        {/* Scrollable Content with Pull-To-Refresh */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={onRefresh}
              colors={[theme.primary]}
              tintColor={theme.primary}
            />
          }>
          {/* Hero Gallery */}
          <ProductImageCarousel
            images={product.images?.length > 0 ? product.images : [product.thumbnail]}
            selectedIndex={selectedImageIndex}
            onSelectIndex={onSelectImageIndex}
          />

          {/* Core Info & Description */}
          <ProductInfo product={product} />

          {/* Specifications */}
          <ProductSpecs product={product} />

          {/* Customer Reviews */}
          <ProductReviewsList reviews={product.reviews} />
        </ScrollView>

        {/* Bottom Floating Action Bar */}
        <View style={styles.bottomBar}>
          <View style={styles.bottomPriceGroup}>
            <Text style={styles.bottomPriceLabel}>Total Price</Text>
            <Text style={styles.bottomPrice}>{formatCurrency(product.price)}</Text>
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.addToCartButton,
              isAddedToCart && { backgroundColor: theme.success },
              pressed && styles.addToCartButtonPressed,
            ]}
            onPress={handleAddToCart}
            accessibilityRole="button">
            <Ionicons
              name={isAddedToCart ? 'checkmark-circle' : 'cart-outline'}
              size={20}
              color="#FFFFFF"
            />
            <Text style={styles.addToCartButtonText}>
              {isAddedToCart ? 'Added!' : 'Add to Cart'}
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
