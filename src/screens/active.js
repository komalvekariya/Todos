//import liraries
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'


const active = ({ todos, toggleTodo }) => {

    const getVisible = (
        todos,
    ) => {
        return todos.filter(todo => !todo.completed)
    }

    const visibletodos = getVisible(todos)
    // const count = visibletodos.length().tostring()
    var count = Object.keys(visibletodos).length;

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ flex: 1.5 }}>
                    {visibletodos.map(todo =>
                        <Text style={{
                            fontSize: 20,
                            backgroundColor: '#Fff',
                            padding: 5,
                            textDecorationLine: todo.completed ? 'line-through' : 'none'
                        }} key={todo.id}>{todo.text}
                        </Text>)}
                </View>
                <View style={{ alignItems: 'center', flex: .1 }}>
                    <Text style={{ fontWeight: 'bold' }}>Number of List:={count}</Text>
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
        flex:1
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(active)




