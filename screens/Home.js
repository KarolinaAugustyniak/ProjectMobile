import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Image, Text, View, TextInput, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Header, FocusedStatusBar } from '../components';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.home}>
            {/* <Header title="Home page" /> */}
            <View >
                <Text style={styles.home__title}>Projekt {"\n"}Programowanie urządzeń mobilnych</Text>
                <Text style={styles.home__subtitle} >Grupa 4IIZ/2020/TIM-SP02</Text>
                <View style={styles.home__creators}>
                    <Text>Karolina Augustyniak w64043</Text>
                    <Text>Norbert Guzy w64084</Text>
                </View>
            </View>
            <View>
                <Button
                    title="Choose category"
                    onPress={() => navigation.navigate('ChooseCategory')}
                />
            </View>
            <FocusedStatusBar style={styles.statusbar} />
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    statusbar: {
        backgroundColor: '#FFB800',
    },
    home: {
        textAlign: 'center',
        padding: 16,
    },
    home__title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 14,

    },
    home__subtitle: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
        color: '#FFB800',
    },
    home__creators: {
        margin: 40,
        marginBottom: 100,
    }

});

export default Home;