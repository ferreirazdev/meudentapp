import React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native';
import LogoSvg from '../../../assets/logo.svg'
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { PasswordInput } from '../../../components/PasswordInput';

import { 
  Container,
  Header,
  HeaderWrapper,
  Steps,
  Form,
  FormTitle
} from './styles';

export function SignUpSecondStep(){
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback>
        <Container>
          <Header>
            <LogoSvg />
            <HeaderWrapper>
              <BackButton />
              <FormTitle>2. Senha</FormTitle>
              <Steps>
                <Bullet/>
                <Bullet active/>
              </Steps>
            </HeaderWrapper>
          </Header>
          <Form>
            <PasswordInput 
              iconName="lock"
              placeholder="Digite uma senha"
            />
            <PasswordInput 
              iconName="lock"
              placeholder="Confirme a senha"
            />
            <Button
              title="Próximo"
            />
          </Form>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}