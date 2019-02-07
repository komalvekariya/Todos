import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import AddTodo from '../src/containers/AddTodo'
import VisibleTodos from '../src/containers/VisibleTodos'


export default class TodoApp extends Component {

    render() {
        const { container } = styles
        return (
            <View style={container}>
                <AddTodo />
                <VisibleTodos />
                <View style={{ padding: 10 }}>
                    <Button
                        title="nextPage"
                        onPress={() => this.props.navigation.navigate('ShowData')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    }
});