//import liraries
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'


const active = ({ todos, toggleTodo}) => {

    const getVisible = (
        todos,
    ) => {
        return todos.filter(todo => !todo.completed)
    }


const visibletodos = getVisible(todos)

return (
    <ScrollView>
        <View style={styles.container}>
            <View>
                {visibletodos.map(todo =>
                    <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                        <Text style={{
                            fontSize: 20,
                            backgroundColor: '#Fff',
                            padding: 5,
                            textDecorationLine: todo.completed ? 'line-through' : 'none'
                        }}>{todo.text}</Text>
                    </TouchableOpacity>)}
            </View>

        </View>
    </ScrollView>

);
};

const mapStateToProps = state => ({
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    setVisibility: filter => dispatch(setVisibility(filter))

})
// define your styles
const styles = StyleSheet.create({
    container: {

        marginHorizontal: 20,

    },
});
export default connect(mapStateToProps, mapDispatchToProps)(active)




