import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps {
  color: string;
}

interface ButtonTextProps {
  light: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;

  padding: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;

  background-color: ${({ color }) => color};
  margin-bottom: 8px;
  
`;

export const Title = styled.Text<ButtonTextProps>`
  font-size: 17px;
  color: ${({theme, light}) => 
    light ? theme.colors.secondary : theme.colors.background_secondary};
  
`;