import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, TextInput, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';

import { Header, FocusedStatusBar, FooterNavigation } from '../components';

const Home = () => {
    return (
        <SafeAreaView>
            <Header title="Home page" />
            {/* <Text>sfsd</Text> */}
            <FocusedStatusBar style={styles.statusbar} />
            <FooterNavigation />
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    statusbar: {
        backgroundColor: '#b695f0',
    },

});

export default Home;