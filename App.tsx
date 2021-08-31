import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

import { SignIn } from './src/screens/SignIn';
import { SignUpFirstStep } from './src/screens/SignUp/SignUpFirstStep';
import { SignUpSecondStep } from './src/screens/SignUp/SignUpSecondStep';
import { Home } from './src/screens/Home';
import theme from './src/styles/theme';
import { Routes } from './src/routes';

function App() {
  return (
    <ThemeProvider theme={theme}> 
      <Home />
    </ThemeProvider>
  );
}

export default withAuthenticator(App);

