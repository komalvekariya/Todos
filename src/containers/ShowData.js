//import liraries
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import  AppContainer from '../TabNavigation'

const ShowData = ({ todos, toggleTodo }) => {

    return (
        // <ScrollView>
        //     <View style={styles.container}>
        //         <View>
        //             {todos.map(todo =>
        //                 <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
        //                     <Text style={{
        //                         fontSize: 20,
        //                         backgroundColor: '#Fff',
        //                         padding: 5,
        //                         textDecorationLine: todo.completed ? 'line-through' : 'none'
        //                     }}>{todo.text}</Text>
        //                 </TouchableOpacity>)}
        //         </View>
                
        //     </View>
        // </ScrollView>

        <AppContainer/>

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

        marginHorizontal: 20,

    },
});
export default connect(mapStateToProps, mapDispatchToProps)(ShowData)




