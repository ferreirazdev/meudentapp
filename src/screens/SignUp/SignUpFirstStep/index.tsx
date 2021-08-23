import React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native';
import LogoSvg from '../../../assets/logo.svg'
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { useNavigation } from '@react-navigation/native';

import { 
  Container,
  Header,
  HeaderWrapper,
  Steps,
  Form,
  FormTitle
} from './styles';

export function SignUpFirstStep(){
  
  const navigation = useNavigation()

  function handleBack(){
    navigation.goBack()
  }

  function handleNextStep() {
    navigation.navigate('SignUpSecondStep')
  }


  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback>
        <Container>
          <Header>
            <LogoSvg />
            <HeaderWrapper>
              <BackButton 
                onPress={handleBack}
              />
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
              onPress={handleNextStep}
            />
          </Form>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}