//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FilterList from '../components/FilterList'
import visibilityFilter from '../reducers/VisibilityFilter';
// create a component



const TodoList = ({ todos, toggleTodo }) => {
    console.log('todolist', todos.text)

    const getVisible = (
        todos,
        filter
    ) => {
        switch (filter) {
            case 'SHOW_ALL':
                return todos;
            case 'SHOW_COMPLETED':
                return todos.filter(id=>id.completed);
        }
    }

const visibleTodos=getVisible(
    todos,
    visibilityFilter
)

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <FilterList filter='SHOW_ALL' title='All' />
                <FilterList filter='SHOW_ACTIVATED' title='Activated' />
                <FilterList filter='SHOW_COMPLETED' title='Completed' onpress={this.getVisible} />

            </View>
            <View style={{ flex: 6 }}>
                {todos.map(todo =>
                    <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                        <Text style={{
                            fontSize: 20,
                            backgroundColor: '#F8F8F8',
                            padding: 15,
                            textDecorationLine: todo.completed ? 'line-through' : 'none'
                        }}>{todo.text}</Text>
                    </TouchableOpacity>

                )}
            </View>


        </View>

    );
};
//make this component available to the app
export default TodoList;

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        // backgroundColor: 'red'
    },
});



