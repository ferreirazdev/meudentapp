import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { 
  Container,
  Title
 } from './styles';

interface Props extends RectButtonProperties {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  light = false
}: Props){

  const theme = useTheme();
  return (
    <Container
      color={color ? color : theme.colors.secondary}
    >
      {
        loading
        ? <ActivityIndicator color={theme.colors.background_secondary}/>
        : <Title light={light}>{title}</Title>
      }
    </Container>
  );
}