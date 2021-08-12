import styled, {css} from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const IconContainer = styled.View`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const InputText = styled(TextInput)`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background_secondary};
  font-size: ${RFValue(15)}px;
  padding: 0 23px;
  border-radius: 30px;
`;
