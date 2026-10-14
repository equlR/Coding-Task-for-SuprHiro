import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import { createEmptyViewStyles } from '@/components/common/EmptyState/EmptyView.styles';
import { useTheme } from '@/hooks/use-theme';

export interface EmptyViewProps {
  title?: string;
  message?: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  actionText?: string;
  onAction?: () => void;
  style?: StyleProp<ViewStyle>;
}

export function EmptyView({
  title = 'No Products Found',
  message = 'We could not find any items matching your search or filters.',
  iconName = 'cube-outline',
  actionText,
  onAction,
  style,
}: EmptyViewProps) {
  const theme = useTheme();
  const styles = createEmptyViewStyles(theme);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={34} color={theme.textMuted} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      {actionText && onAction && (
        <Pressable
          style={({ pressed }) => [
            styles.actionButton,
            pressed && styles.actionButtonPressed,
          ]}
          onPress={onAction}
          accessibilityRole="button">
          <Text style={styles.actionButtonText}>{actionText}</Text>
        </Pressable>
      )}
    </View>
  );
}
