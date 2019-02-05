//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FilterList from '../components/FilterList'
import visibilityFilter from '../reducers/VisibilityFilter';
import { connect } from 'react-redux'
// create a component



const TodoList = ({ todos, toggleTodo, setVisibility }) => {
    console.log('todolist', todos.text,visibilityFilter.filter)

    const getVisible = (
        todos,
    ) => {
        return todos.filter(todo => !todo.completed)
    }

    const visibleTodos = getVisible(
        todos
    )

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <FilterList filter='SHOW_ALL' title='All' onpress={()=> setVisibility('SHOW_ALL')} />
                <FilterList filter='SHOW_ACTIVATED' title='Activated' />
                <FilterList filter='SHOW_COMPLETED' title='Completed' />
            </View>
            <View style={{ flex: 6 }}>
                {visibleTodos.map(todo =>
                    <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                        <Text style={{
                            fontSize: 20,
                            backgroundColor: '#F8F8F8',
                            padding: 15,
                            textDecorationLine: todo.completed ? 'line-through' : 'none'
                        }}>{todo.text}</Text>
                    </TouchableOpacity>)}
            </View>


        </View>

    );
};

mapDispatchToProps = (dispatch) => {
    
}
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



