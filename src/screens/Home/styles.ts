import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;
export const Header = styled.View`
  width: 100%;
  height: 113px;
  padding: 32px 24px;
  margin-bottom: 60px;
`;

export const SearchBarWrapper = styled.View`
  margin-top: 15px;
`;

export const ServicesList = styled.View`
  padding: 24px;
`;
