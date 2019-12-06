import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite'
import { openDatabase } from 'expo-sqlite';
const databaseName = "gnb.db";

class Database {
    db = SQLite.openDatabase('gnb.db');

    constructor() {
        try {
            db.transaction(tx => tx.executeSql(''));
        } catch(error) {
            this.getDB()
        }
    }

    async getDB() {
        try {
            const localDatabase = await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}SQLite/${databaseName}`);
    
            if( !localDatabase.exists ) {
                this.db = FileSystem.downloadAsync(
                    'https://firebasestorage.googleapis.com/v0/b/ilc-chat-app.appspot.com/o/gnb.db?alt=media&token=7702d973-59ab-4e39-8f70-9282b9a07d4b',
                    `${FileSystem.documentDirectory}SQLite/${databaseName}`
                ).then(({ uri }) => {
                    console.log('Finished downloading to ', uri);
                    this.db = 
                }).catch(error => {
                    console.log(error);
                })
            }
            else {
                console.log('Database exists');
            }
        } catch(error) {
            console.log('Error: ', error)
        }
    }

    getAllBooks() {
        this.db.transaction()
    }
}

export default Database;