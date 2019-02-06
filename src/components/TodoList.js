//import liraries
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import FilterList from '../components/FilterList'
// import visibilityFilter from '../reducers/VisibilityFilter';
import { connect } from 'react-redux'
// create a component



const TodoList = ({ todos, toggleTodo, setVisibility, visibilityFilter }) => {
    console.log('todolist', todos.text, visibilityFilter.filter)

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
                {visibilityFilter.filter == 'SHOW_ALL' ?
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
                    </View> :
                    <View>
                        {visibleTodos.map(todo =>
                                    <Text style={{
                                    fontSize: 20,
                                    backgroundColor: '#F8F8F8',
                                    padding: 15,
                                    textDecorationLine: todo.completed ? 'line-through' : 'none'
                                }} key={todo.id}>{todo.text}</Text>
                            )}

                    </View>}
            </View>
        </ScrollView>
        
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
        
        
        
