import React from 'react'
import {Text, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-navigation';

const VerseOfTheDayScreen = () => {
    return(
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text>Verse of the Day Screen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default VerseOfTheDayScreen;