import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
// import { createBottomTabNavigator, BottomTopBar } from "@react-navigation/bottom-tabs"

import Home from '../screens/Home';
import ChooseCategory from '../screens/ChooseCategory';

// const Tab = createBottomTabNavigator();

const FooterNavigation = () => {
    return (
        // <Tab.FooterNavigation>
        //     <Tab.Screen
        //         name="Home"
        //         Component={Home}
        //         options={{ tabBarBadge: 3 }}
        //     />
        // </Tab.FooterNavigation>
        <Text style={styles.footer}>dds</Text>
    )
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#333',
        color: "#fff",
        padding: 20,
        width: '100%',
        paddingTop: 60,
        zIndex: 99,
    },

});


export default FooterNavigation;