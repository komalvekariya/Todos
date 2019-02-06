import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    addTodo = (text) => {
        this.props.dispatch(addTodo(text))
        this.setState({ text: '' })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder='Eg. Create New List'
                    style={{ margin: 5, borderBottomColor: '#eaeaea', height: 50, flex: 1, backgroundColor: 'lightgrey' }} />


                <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                    <Text style={{ fontSize: 15, color: 'red', margin: 5, }}>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect()(AddTodo)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', justifyContent: 'center', alignItems: "center"

    }
});

