import React from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { 
  Container,
  IconContainer,
  InputText
} from './styles';

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function Input({
  iconName,
  value,
  ...rest
} : Props){

  const theme = useTheme();

  return (
    <Container> 
      <IconContainer>
        <Feather 
          name={iconName}
          size={24}
          color={theme.colors.secondary}
        />
      </IconContainer>

      <InputText 
        autoCorrect={false}
        {...rest}
      />
    </Container>
  );
}