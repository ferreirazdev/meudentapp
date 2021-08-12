import React from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import LogoSvg from '../../assets/logo.svg';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

import { 
  Container,
  Header,
  Form,
  Footer,
  RegisterWrapper,
  FooterText,
  CreateAccountButton,
} from './styles';
import theme from '../../styles/theme';
import { Button } from '../../components/Button';

export function SignIn(){
  return (
    <KeyboardAvoidingView
      behavior="position" enabled
    >
      <TouchableWithoutFeedback>
        <Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
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
            <Button 
              title="Login"
              color={theme.colors.secondary}
            />
          </Form>
          <Footer>
          <RegisterWrapper>
              <FooterText>Ainda não tem conta?</FooterText>
              <CreateAccountButton>Criar conta</CreateAccountButton>
          </RegisterWrapper>
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}