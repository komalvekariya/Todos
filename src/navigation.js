import React, { Component } from 'react';
import TodoApp from './TodoApp'
import DataApp from './DataApp'
import { createAppContainer,createStackNavigator } from 'react-navigation'

const Navigator = createStackNavigator({
    TodoApp: { screen: TodoApp },
    DataApp: { screen: DataApp },
},      
    {
        initialRouteName: 'TodoApp',
    });


    const AppContainer = createAppContainer(Navigator);

export default AppContainer