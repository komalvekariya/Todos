//import liraries
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';

const TodoList = ({ todos, toggleTodo, setVisibility, visibilityFilter }) => {
  
    console.log('todolist', todos.text, visibilityFilter.filter)
    if(visibilityFilter.filter===undefined){
        visibilityFilter.filter='SHOW_ALL'
    }
        const getVisible = (
            todos,
        ) => {

            switch (visibilityFilter.filter) {
                case 'SHOW_ALL':
                    return todos
                case 'SHOW_ACTIVATED':
                    return todos.filter(todo => !todo.completed)
                case 'SHOW_COMPLETED':
                    return todos.filter(todo => todo.completed)
                default:
                return todos
        }
    }
    const visibleTodos = getVisible(
        todos,
    )

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Button title='All' onPress={() => setVisibility('SHOW_ALL')} />
                    <Button title='Activated' onPress={() => setVisibility('SHOW_ACTIVATED')} />
                    <Button title='Completed' onPress={() => setVisibility('SHOW_COMPLETED')} />
                </View>

                {visibilityFilter.filter == undefined  || visibilityFilter.filter == 'SHOW_ALL' ?
                    <View>
                        {visibleTodos.map(todo =>
                            <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                                <Text style={{
                                    fontSize: 20,
                                    backgroundColor: '#Fff',
                                    padding: 5,
                                    textDecorationLine: todo.completed ? 'line-through' : 'none'
                                }}>{todo.text}</Text>
                            </TouchableOpacity>)}
                    </View> :
                    <View >
                        {visibleTodos.map(todo =>
                            <Text style={{
                                fontSize: 20,
                                backgroundColor: '#Fff',
                                padding: 5,
                                textDecorationLine: todo.completed ? 'line-through' : 'none'
                            }} key={todo.id}>{todo.text}</Text>
                        )}

                    </View>}
            </View>
        </ScrollView>

    );
};
export default TodoList;

// define your styles
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
});




