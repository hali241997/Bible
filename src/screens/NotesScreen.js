import React from 'react'
import {Text, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-navigation';

const NotesScreen = () => {
    return(
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text>Notes Screen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default NotesScreen;