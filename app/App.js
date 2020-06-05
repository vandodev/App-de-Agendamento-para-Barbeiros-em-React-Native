import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/Stacks/MainStack.js';

import userContextProvider from './src/context/UserContext';

export default () => {
  return(
    <userContextProvider>
      <NavigationContainer>
          <MainStack />
      </NavigationContainer>
    </userContextProvider>
    
  );
}