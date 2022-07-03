import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, TextInput, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MealScreen = ({ route, navigation }) => {
    const { itemName } = route.params;
    const choosenMeal = itemName ? itemName : 'Vegan Lasagna';
    const foodURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + choosenMeal;

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

            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    style={styles.container}
                    columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                    numColumns={2}
                    data={data}
                    keyExtractor={({ idMeal }, index) => idMeal}
                    renderItem={({ item }) => (
                        <View>
                            <Image style={styles.meal__img}
                                source={{
                                    width: 160,
                                    height: 260,
                                    uri: item.strMealThumb
                                }}
                            />
                            <Text style={styles.meal__name}>{item.strMeal}</Text>
                            <Text style={styles.meal__category}>Category: {item.strCategory}</Text>
                            <Text style={styles.meal__country}>Area: {item.strArea}</Text>
                            <Text style={styles.meal__recipe_title}>Recipe </Text>
                            <Text style={styles.meal__recipe}>{item.strInstructions}</Text>
                        </View>
                    )}
                />
            )}

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        padding: 10
    },
    meal__img: {
        width: "100%",
    },
    meal__name: {
        fontSize: 24,
        marginVertical: 14
    },
    meal__recipe_title: {
        fontSize: 24,
        marginVertical: 14
    },
    meal__category: {
        marginBottom: 12,
    },
    meal__recipe: {
        fontSize: 14,
        marginBottom: 24,
        lineHeight: 24,
    },

});


export default MealScreen;