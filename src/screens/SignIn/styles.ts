import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
  padding: 0 24px;
  height: 100%;
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + 100}px;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  width: 100%;
  margin: 64px 0;
`;

export const Footer = styled.View``;

export const RegisterWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 5px;
`;

export const CreateAccountButton = styled.Text` 
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: underline;
`;



