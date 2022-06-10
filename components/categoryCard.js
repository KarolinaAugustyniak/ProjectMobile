import React from 'react';
import { StyleSheet, Image, Text, View, ActivityIndicator, SafeAreaView } from 'react-native';


const CategoryCard = props => {
    return (
        <View style={styles.category}>
            <Image source={{
                width: 160,
                height: 100,
                uri: props.image
            }}
            />
            <Text style={styles.text}>
                {props.title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    category: {
        backgroundColor: '#fff',
        paddingTop: 8,
        marginBottom: 20,
        borderRadius: 4,
    },
    text: {
        padding: 16,
    }
});


export default CategoryCard;
