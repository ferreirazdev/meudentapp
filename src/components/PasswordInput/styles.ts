import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-radius: 30px;
`;

export const IconContainer = styled.View`
  height: 56px;
  width: 55px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  
  justify-content: center;
  align-items: center;
  
  border-radius: 30px;
`;

export const InputText = styled(TextInput)`
  flex: 1;
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background_secondary};
  
  
  border-radius: 30px;
  padding: 0 23px;
`;