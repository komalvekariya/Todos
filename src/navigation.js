import React, { Component } from 'react';
import TodoApp from './TodoApp'
import { createAppContainer,createStackNavigator,createBottomTabNavigator } from 'react-navigation'
import ShowData from './containers/ShowData';
//import ShowData from './containers/VisibleTodos'
const Navigator = createStackNavigator({
    TodoApp: { screen: TodoApp },
    ShowData: { screen: ShowData  },
},      
    {
        initialRouteName: 'TodoApp',
    });

    

    const AppContainer = createAppContainer(Navigator);

export default AppContainer