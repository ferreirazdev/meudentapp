import React from 'react';
import { ThemeProvider } from 'styled-components';

import { SignIn } from './src/screens/SignIn';
import { SignUpFirstStep } from './src/screens/SignUp/SignUpFirstStep';
import { SignUpSecondStep } from './src/screens/SignUp/SignUpSecondStep';
import { Home } from './src/screens/Home';
import theme from './src/styles/theme';
import { Routes } from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}> 
      <Routes />
    </ThemeProvider>
  );
}

