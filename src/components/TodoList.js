import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const TodoList = ({ todos, toggleTodo }) => (
    <View >
        {todos.map(todo =>
            <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                <Text style={{fontSize:24,
                textDecorationLine:todo.completed? 'line-through':'none'}}>{todo.text}</Text>
            </TouchableOpacity>
        )}
    </View>
)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    }
});

export default TodoList;