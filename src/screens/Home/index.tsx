import React from 'react';
import { StatusBar } from 'react-native';
import { SearchInput } from '../../components/SearchInput';
import LogoSvg from '../../assets/logo.svg'
import { 
  Container,
  Header,
  SearchBarWrapper
} from './styles';

export function Home(){
  return (
    <Container>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <LogoSvg 
          width="55"
          style={{ alignSelf: 'center'}}
        />
        <SearchBarWrapper>
          <SearchInput 
            placeholder="Busque um atendimento"
          />
        </SearchBarWrapper>
      </Header>
    </Container>
  );
}