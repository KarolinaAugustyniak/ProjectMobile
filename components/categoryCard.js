import React from 'react';
import { StyleSheet, Image, Text, View, ActivityIndicator, SafeAreaView } from 'react-native';


const CategoryCard = props => {
    return (
        <View style={styles.category}>
            <Image style={styles.category__img}
                source={{
                    width: 160,
                    height: 100,
                    uri: props.image
                }}
            />
            <Text style={styles.category__text}>
                {props.title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    category: {
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 4,
        marginTop: 16,
    },
    category__text: {
        padding: 16,
        fontSize: 14,
        width: 160,
        flexWrap: 'wrap',
    },
    category__img: {
        borderRadius: 4,
    }
});


export default CategoryCard;
