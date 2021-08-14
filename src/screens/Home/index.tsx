import React from 'react';
import { SearchInput } from '../../components/SearchInput';
import { Container } from './styles';

export function Home(){
  return (
    <Container>
      <SearchInput />
    </Container>
  );
}