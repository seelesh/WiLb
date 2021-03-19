import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from './BookTransactionScreen';
import SearchScreen from './SearchScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';


export default class App extends Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigtor=createBottomTabNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen:SearchScreen}
})

const AppContainer=createAppContainer(TabNavigtor)