/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux'; 
import store from './src/store/index';
import Screen1 from './src/components/screen1'


export default class App extends Component {
  render() {
    return (
     <Provider store= {store}>
          <Screen1 />
       </Provider>
    );
  }
}
