import React from 'react';
import {
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { EmptyView } from '@/components/common/EmptyState/EmptyView';
import { ErrorView } from '@/components/common/ErrorView/ErrorView';
import { SkeletonList } from '@/components/common/LoadingSkeleton/SkeletonCard';
import { SearchBar } from '@/components/common/SearchBar/SearchBar';
import { CategoryFilterBar } from '@/components/products/CategoryFilterBar/CategoryFilterBar';
import { ProductCard } from '@/components/products/ProductCard/ProductCard';
import { useTheme } from '@/hooks/use-theme';
import { createProductListScreenStyles } from '@/screens/ProductListScreen/ProductListScreen.styles';
import { ApiError } from '@/types/api';
import { Product, ProductCategory } from '@/types/product';

export interface ProductListScreenViewProps {
  products: Product[];
  isLoading: boolean;
  isRefreshing: boolean;
  error: ApiError | null;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  categories: ProductCategory[];
  onCategorySelect: (categorySlug: string) => void;
  onRefresh: () => void;
  onRetry: () => void;
  onClearFilters: () => void;
  onProductPress: (product: Product) => void;
}

export function ProductListScreenView({
  products,
  isLoading,
  isRefreshing,
  error,
  searchQuery,
  onSearchChange,
  selectedCategory,
  categories,
  onCategorySelect,
  onRefresh,
  onRetry,
  onClearFilters,
  onProductPress,
}: ProductListScreenViewProps) {
  const theme = useTheme();
  const styles = createProductListScreenStyles(theme);

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <Text style={styles.appTitle}>Explore</Text>
        {!isLoading && products.length > 0 && (
          <Text style={styles.itemCountText}>
            {products.length} {products.length === 1 ? 'item' : 'items'}
          </Text>
        )}
      </View>

      {/* Search Input */}
      <SearchBar
        value={searchQuery}
        onChangeText={onSearchChange}
        onClear={onClearFilters}
        placeholder="Search products, brands, or categories..."
      />

      {/* Category Pills Filter */}
      {categories.length > 0 && (
        <CategoryFilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={onCategorySelect}
        />
      )}
    </View>
  );

  // Error state
  if (error && !isRefreshing && products.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <View style={styles.container}>
          {renderHeader()}
          <ErrorView
            title="Unable to load products"
            message={error.message}
            onRetry={onRetry}
            retryText="Retry"
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <View style={styles.container}>
        {renderHeader()}

        {isLoading && !isRefreshing ? (
          <View style={styles.listContent}>
            <SkeletonList count={4} />
          </View>
        ) : products.length === 0 ? (
          <EmptyView
            title={searchQuery ? 'No Results Found' : 'No Products Available'}
            message={
              searchQuery
                ? `No products matched "${searchQuery}". Try a different search term or category.`
                : 'There are currently no products in this category.'
            }
            actionText="Clear Filters"
            onAction={onClearFilters}
          />
        ) : (
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ProductCard product={item} onPress={onProductPress} />
            )}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={onRefresh}
                colors={[theme.primary]}
                tintColor={theme.primary}
              />
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
}
