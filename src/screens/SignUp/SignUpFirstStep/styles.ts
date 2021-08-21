import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.background_primary};
  height: 100%;
`;
export const Header = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: ${getStatusBarHeight() + 51}px;
  margin-bottom: 20px;
`;

export const HeaderWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 41px;
`;

export const FormTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Steps = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Form = styled.View`
  width: 100%;
  margin-bottom: 16px;
  margin-top: 20px;
`;


