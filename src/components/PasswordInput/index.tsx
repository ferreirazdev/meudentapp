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
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?:string;
}

export function PasswordInput({ 
  iconName,
  value,
  ...rest
}: Props){

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

      <InputText />

      <BorderlessButton>
        <IconContainer>
          <Feather 
            name="eye"
            size={24}
            color={theme.colors.secondary}
          />
        </IconContainer>
      </BorderlessButton>
    </Container>
  );
}