import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, TextInput, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import CategoryCard from '../components/categoryCard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const ChooseMeal = ({ route, navigation }) => {
    const { itemName } = route.params;
    const choosenCategory = itemName;
    const foodURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + choosenCategory;

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(foodURL)
            .then((response) => response.json())
            .then((json) => setData(json.meals))
            .catch((error) => alert(error))
            .then(setLoading(false));
    });

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.info}>Choosen category: {itemName}</Text>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    style={styles.categories__list}
                    columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                    numColumns={2}
                    data={data}
                    keyExtractor={({ idMeal }, index) => idMeal}
                    renderItem={({ item }) => <CategoryCard title={item.strMeal} image={item.strMealThumb} navigateTo="MealScreen" />}
                />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    categories__list: {
        width: '100%',
    },
    info: {
        margin: 10,
        marginTop: 18,
        fontSize: 18
    },
});


export default ChooseMeal;