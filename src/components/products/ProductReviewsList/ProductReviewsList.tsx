import React from 'react';
import { Text, View } from 'react-native';

import { RatingBadge } from '@/components/common/RatingBadge/RatingBadge';
import { createProductReviewsListStyles } from '@/components/products/ProductReviewsList/ProductReviewsList.styles';
import { useTheme } from '@/hooks/use-theme';
import { ProductReview } from '@/types/product';
import { formatDate } from '@/utils/formatters';

export interface ProductReviewsListProps {
  reviews?: ProductReview[];
}

export function ProductReviewsList({ reviews = [] }: ProductReviewsListProps) {
  const theme = useTheme();
  const styles = createProductReviewsListStyles(theme);

  if (!reviews || reviews.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Customer Reviews</Text>
        <Text style={styles.noReviewsText}>No reviews yet for this product.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Customer Reviews ({reviews.length})</Text>
      </View>

      {reviews.map((rev, index) => {
        const initials = rev.reviewerName
          ? rev.reviewerName
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2)
              .toUpperCase()
          : 'U';

        return (
          <View key={`review-${index}`} style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <View style={styles.reviewerInfo}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{initials}</Text>
                </View>
                <View>
                  <Text style={styles.reviewerName}>{rev.reviewerName}</Text>
                  <Text style={styles.reviewDate}>{formatDate(rev.date)}</Text>
                </View>
              </View>
              <RatingBadge rating={rev.rating} />
            </View>
            <Text style={styles.comment}>{rev.comment}</Text>
          </View>
        );
      })}
    </View>
  );
}
