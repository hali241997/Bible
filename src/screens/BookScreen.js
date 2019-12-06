import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite'
const databaseName = "gnb.db";

class BookScreen extends Component {
    async componentDidMount() {
        this.copyDatabase()
    }

    async copyDatabase() {
        try {
            let db = null;
            const localDatabase = await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}SQLite/${databaseName}`);
            if( !localDatabase.exists ) {
                FileSystem.downloadAsync(
                    'https://firebasestorage.googleapis.com/v0/b/ilc-chat-app.appspot.com/o/gnb.db?alt=media&token=7702d973-59ab-4e39-8f70-9282b9a07d4b',
                    `${FileSystem.documentDirectory}SQLite/${databaseName}`
                ).then(async ({ uri }) => {
                    console.log('Finished downloading to ', uri);
                    db = SQLite.openDatabase('gnb.db');
                    const res = await db.transaction(tx => tx.executeSql('SELECT * FROM BIBLE_TABLE'))
                    console.log(res);
                }).catch(error => {
                    console.log(error);
                })
            }
            else {
                console.log('Database exists');
                db = SQLite.openDatabase('gnb.db');
                const res = await db.transaction(tx => tx.executeSql('SELECT * FROM BIBLE_TABLE'))
                console.log(res);
            }
        } catch(error) {
            console.log('Error: ', error)
        }
    }


    render() {
        console.log
        return(
            <View style={styles.containerStyle}>
                <View style={styles.testamentSelectionStyle}>
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>Old Testament</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>New Testament</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{color: 'red'}}>This will contain a list. Shoxwing some demo text:</Text>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#EDEDED'
    },
    testamentSelectionStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 5
    },
    buttonStyle: {
        backgroundColor: '#0A72A5',
        width: ((Dimensions.get('screen').width)/2)-12,
        alignItems: 'center',
        borderRadius: 5
    },
    buttonTextStyle: {
        color: '#FFF',
        padding: 10,
        paddingHorizontal: 5,
        fontSize: 18
    }
})

export default BookScreen;