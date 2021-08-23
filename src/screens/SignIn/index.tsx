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

import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

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


export function SignIn(){

  const navigation = useNavigation();

  function handleNewAccount() {
    navigation.navigate('SignUpFirstStep')
  }

  function handleLogin() {
    navigation.navigate('Home')
  }

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
              onPress={handleLogin}
            />
          </Form>
          <Footer>
          <RegisterWrapper>
              <FooterText>Ainda não tem conta?</FooterText>
              <CreateAccountButton onPress={handleNewAccount}>Criar conta</CreateAccountButton>
          </RegisterWrapper>
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}