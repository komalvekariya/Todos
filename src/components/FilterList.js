import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';


const FilterList = ({ filter, title,onpress }) => {
    return (
       
            <Button
                title={title}
                // onPress={this.props.dispatch({type:'SET_VISIBILITY_FILTER',filter})} 
                onPress={onpress}
                />

    )
}

export default FilterList