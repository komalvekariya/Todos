import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import AddTodo from '../src/containers/AddTodo'
import VisibleTodos from '../src/containers/VisibleTodos'

export default class TodoApp extends Component {
    
    render() {
        const { container } = styles
        return (
            <View style={container}>
                <AddTodo />
                <View style={{flex:5}}>
                    <VisibleTodos />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor:'white'
    }
});