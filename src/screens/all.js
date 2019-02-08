//import liraries
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

const all = ({ todos }) => {
    const count = Object.keys(todos).length;
    return (

        <View style={styles.container}>
            <View style={{ flex: 1.5 }}>
                <ScrollView>
                    {todos.map(todo =>
                        <Text style={{
                            fontSize: 20,
                            padding: 5,
                            textDecorationLine: todo.completed ? 'line-through' : 'none'
                        }} key={todo.id}>{todo.text}
                        </Text>)}
                </ScrollView>
            </View>
            <View style={{ alignItems: 'center', flex: .1 }}>
                <Text style={{ fontWeight: 'bold' }}>Number of List:={count}</Text>
            </View>
        </View>
    );
};

const mapStateToProps = state => ({
    todos: state.todos,

})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),

})
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(all)




