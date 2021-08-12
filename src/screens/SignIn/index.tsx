import React from 'react';
import { Text } from 'react-native';
import LogoSvg from '../../assets/logo.svg';

import { 
  Container,
  Header,
  Form,
  Footer,
  RegisterWrapper,
  AuthWrapper,
} from './styles';

export function SignIn(){
  return (
    <Container>
      <Header>
        <LogoSvg />
      </Header>
      <Form>
        <Text>Email</Text>
        <Text>Senha</Text>
      </Form>
      <Footer>
       <RegisterWrapper>
          <Text>Ainda não tem conta?</Text>
          <Text>Criar conta</Text>
       </RegisterWrapper>
       <AuthWrapper>
          <Text>Ainda não tem conta?</Text>
          <Text>Criar conta</Text>
       </AuthWrapper>
      </Footer>
    </Container>
  );
}