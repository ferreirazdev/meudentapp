import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;
export const Header = styled.View`
  width: 100%;
  height: 113px;
  padding: 32px 24px;
`;

export const SearchBarWrapper = styled.View`
  margin-top: 15px;
`;

