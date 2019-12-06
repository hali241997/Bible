import React from 'react'
import {Text, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-navigation';

const SearchScreen = () => {
    return(
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text>Search Screen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default SearchScreen;