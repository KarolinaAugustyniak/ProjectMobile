import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, TextInput, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import CategoryCard from '../components/categoryCard';
import Header from '../components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const foodURL = "https://www.themealdb.com/api/json/v1/1/categories.php";

const ChooseCategory = ({ navigation }) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(foodURL)
            .then((response) => response.json())
            .then((json) => setData(json.categories))
            .catch((error) => alert(error))
            .then(setLoading(false));
    });

    return (
        <SafeAreaView style={styles.container}>

            {/* <Header title="Choose category" /> */}
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    style={styles.categories__list}
                    columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                    numColumns={2}
                    data={data}
                    keyExtractor={({ idCategory }, index) => idCategory}
                    renderItem={({ item }) => <CategoryCard title={item.strCategory} image={item.strCategoryThumb} navigateTo="ChooseMeal" />}
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
});


export default ChooseCategory;