import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import VisibilityFilter from '../reducers/VisibilityFilter'

const FilterList = ({  title,onpress }) => {
    return (
       
            <Button
                title={title}
                onPress={onpress}
                />

    )
}

export default FilterList