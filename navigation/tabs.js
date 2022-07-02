import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import Home from '../screens/Home';
import ChooseCategory from '../screens/ChooseCategory';
import ChooseMeal from '../screens/ChooseMeal';

import reactDom from 'react-dom';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#FFB800',
            }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="ChooseCategory" component={ChooseCategory} options={{
                tabBarLabel: 'Choose Category',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="food" color={color} size={size} />
                ),
            }} />


            <Tab.Screen name="ChooseMeal" component={ChooseMeal} options={{
                tabBarLabel: 'ChooseMeal',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="food" color={color} size={size} />
                ),
            }} />


        </Tab.Navigator>
    );
}

export default Tabs;