import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

import {connect} from 'react-redux'

addTodo = (text) => {
    this.props.dispatch({ type: 'ADD_TODO', text })
    this.setState({ text: '' })
}
class AddTodo extends Component {
    state = {
        text: ''
    }
    render() {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                <TextInput
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder='Eg. Create New Vedio'
                    style={{ borderColor: '#eaeaea', height: 50, flex: 1, padding: 5 }} />
                <Button onPress={() => this.addTodo(this.state.text)} title={'ADD'} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
});

export default connect()(AddTodo)