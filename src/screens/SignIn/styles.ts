import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
  padding: 0 24px;
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + 115}px;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View``;

export const Footer = styled.View``;

export const RegisterWrapper = styled.View``;

export const AuthWrapper = styled.View``;
