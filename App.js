import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import Store from './src/store'
import MainStack from './src/navigators/mainStack'

const App = () => {
  return(
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}

export default () => (
  <Provider store={Store}>
    <App/>
  </Provider>
)
