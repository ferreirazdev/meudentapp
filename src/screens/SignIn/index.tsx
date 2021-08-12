import React from 'react';
import { Text } from 'react-native';
import { Input } from '../../components/Input';
import LogoSvg from '../../assets/logo.svg';
import { PasswordInput } from '../../components/PasswordInput';

import { 
  Container,
  Header,
  Form,
  Footer,
  RegisterWrapper,
  AuthWrapper,
  ButtonAuthWrapper
} from './styles';

export function SignIn(){
  return (
    <Container>
      <Header>
        <LogoSvg />
      </Header>
      <Form>
        <Input 
          iconName="mail"
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <PasswordInput 
          iconName="lock"
          placeholder="Digite sua senha"
        />
      </Form>
      <Footer>
       <RegisterWrapper>
          <Text>Ainda não tem conta?</Text>
          <Text>Criar conta</Text>
       </RegisterWrapper>
       <AuthWrapper>
          <Text>Ou faça login com:</Text>
          <ButtonAuthWrapper>
            <Text>Google</Text>
            <Text>Apple</Text>
          </ButtonAuthWrapper>
       </AuthWrapper>
      </Footer>
    </Container>
  );
}