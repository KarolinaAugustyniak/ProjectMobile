import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, TextInput, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
// import { SafeAreaView } from 'react-native-web';
import CategoryCard from './components/categoryCard';

const foodURL = "https://www.themealdb.com/api/json/v1/1/categories.php";

export default function App() {

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
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={styles.categories__list}
          columnWrapperStyle={{ justifyContent: 'space-evenly' }}
          numColumns={2}
          data={data}
          keyExtractor={({ idCategory }, index) => idCategory}
          renderItem={({ item }) => <CategoryCard title={item.strCategory} image={item.strCategoryThumb} />}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  categories__list: {
    width: '100%',
  },
});
