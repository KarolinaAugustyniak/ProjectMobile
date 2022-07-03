import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';


const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.header__title}>
                {props.title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        padding: 20,
        width: '100%',
        paddingTop: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8.30,
        elevation: 13,
        zIndex: 99,

    },
    header__title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    }
});


export default Header;
