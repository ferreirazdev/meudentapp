import React from 'react';
import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { BorderlessButton } from 'react-native-gesture-handler';

import { 
  Container,
  IconContainer,
  InputText
} from './styles';

interface Props extends TextInputProps{
  value?:string;
}

export function SearchInput({ 
  value,
  ...rest
}: Props){

  const theme = useTheme();
  return (
    <Container>

      <InputText 
        autoCorrect={false}
        {...rest}
      />

      <BorderlessButton>
        <IconContainer>
          <Feather 
            name="search"
            size={24}
            color={theme.colors.secondary}
          />
        </IconContainer>
      </BorderlessButton>
    </Container>
  );
}