import React from 'react';
import { ThemeProvider } from 'styled-components';

import { SignIn } from './src/screens/SignIn';
import { SignUpFirstStep } from './src/screens/SignUp/SignUpFirstStep';
import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignUpFirstStep />
    </ThemeProvider>
  );
}

