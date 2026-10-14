import React, { ReactNode } from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';

import {
  BadgeVariant,
  createBadgeStyles,
} from '@/components/common/Badge/Badge.styles';
import { useTheme } from '@/hooks/use-theme';

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  icon?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function Badge({ label, variant = 'neutral', icon, style }: BadgeProps) {
  const theme = useTheme();
  const styles = createBadgeStyles(theme, variant);

  return (
    <View style={[styles.badge, style]}>
      {icon}
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}
