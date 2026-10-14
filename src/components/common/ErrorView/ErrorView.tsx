import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import { createErrorViewStyles } from '@/components/common/ErrorView/ErrorView.styles';
import { useTheme } from '@/hooks/use-theme';

export interface ErrorViewProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  retryText?: string;
  style?: StyleProp<ViewStyle>;
}

export function ErrorView({
  title = 'Something Went Wrong',
  message = 'We encountered an error while fetching data. Please check your internet connection and try again.',
  onRetry,
  retryText = 'Try Again',
  style,
}: ErrorViewProps) {
  const theme = useTheme();
  const styles = createErrorViewStyles(theme);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconContainer}>
        <Ionicons name="alert-circle-outline" size={38} color={theme.danger} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      {onRetry && (
        <Pressable
          style={({ pressed }) => [
            styles.retryButton,
            pressed && styles.retryButtonPressed,
          ]}
          onPress={onRetry}
          accessibilityRole="button"
          accessibilityLabel={retryText}>
          <Ionicons name="refresh" size={18} color="#FFFFFF" />
          <Text style={styles.retryButtonText}>{retryText}</Text>
        </Pressable>
      )}
    </View>
  );
}
