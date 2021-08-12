import React from 'react';
import LogoSvg from '../../../assets/logo.svg'
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

import { 
  Container,
  Header,
  HeaderWrapper,
  Steps,
  Form,
  FormTitle
} from './styles';

export function SignUpFirstStep(){
  return (
    <Container>
      <Header>
        <LogoSvg />
        <HeaderWrapper>
          <BackButton />
          <FormTitle>1. Dados</FormTitle>
          <Steps>
            <Bullet active/>
            <Bullet/>
          </Steps>
        </HeaderWrapper>
      </Header>
      <Form>
        <Input 
          iconName="user"
          placeholder="Digite seu nome"
        />
        <Input 
          iconName="mail"
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
        />
        <Input 
          iconName="credit-card"
          placeholder="Digite seu CPF"
          keyboardType="numeric"
        />
        <Button
          title="Próximo"
        />
      </Form>
    </Container>
  );
}