import React, {Component} from 'react'
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native'

class ChapterScreen extends Component {
    chapters = [
        {chapterNumber: "1"},
        {chapterNumber: "2"},
        {chapterNumber: "3"},
        {chapterNumber: "4"},
        {chapterNumber: "5"},
        {chapterNumber: "6"},
        {chapterNumber: "7"},
        {chapterNumber: "8"},
        {chapterNumber: "9"},
        {chapterNumber: "10"},
        {chapterNumber: "11"},
        {chapterNumber: "12"}
    ]
    
    render() {
        return(
            <View style={styles.containerStyle}>
                <FlatList
                    data={this.chapters}
                    renderItem={({item}) => (
                        <View style={styles.chapterContainerStyle}>
                            <Text style={styles.chapterNumberTextStyle}>{item.chapterNumber}</Text>
                            <Text style={styles.chapterTextStyle}>Chapter</Text>
                        </View>
                    )}
                    numColumns={5}
                    keyExtractor={(item) => item.chapterNumber}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#EDEDED'
    },
    chapterContainerStyle: {
        width: (Dimensions.get('screen').width)/5,
        paddingTop: 5
    },
    chapterNumberTextStyle: {
        fontSize: 30,
        alignSelf: 'center'
    },
    chapterTextStyle: {
        color: '#AAAAAA',
        alignSelf: 'center'
    }
})

export default ChapterScreen;