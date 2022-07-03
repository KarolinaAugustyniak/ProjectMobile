import React from 'react';
import { Button, Text } from 'react-native';

import ChooseMeal from '../screens/ChooseMeal';

export default function Button({ navigation, ...props }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(props.buttonText)}>
            <Text >{props.buttonText}</Text>
        </TouchableOpacity>
    )
}