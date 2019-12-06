import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, Image, ScrollView} from 'react-native'

export default class ContentComponent extends Component {
    render() {
        return(
            <TouchableOpacity>
                <View>
                    <Image source={require('../../assets/android.png')} style={styles.headerImageStyle}/>
                    <Text style={styles.textStyle}>Read Bible</Text>
                </View>
            </TouchableOpacity>
            // <TouchableOpacity style={styles.drawerTransparentStyle} onPress={() => this.props.navigation.goBack()}>
            //     <TouchableOpacity style={styles.drawerStyle} disabled={false}>
            //         <ScrollView>
            //             <View style={styles.headerStyle}>
            //                 <Image source={require('../../assets/android.png')} style={styles.headerImageStyle}/>
            //                 <Text style={[styles.textStyle, {color: 'white'}]}>My Profile</Text>
            //             </View>

            //             <TouchableHighlight underlayColor={'rgba(0, 0, 0, 0.2)'} onPress={() => this.props.navigation.navigate('Bookmark')}>
            //                 <View style={styles.rowStyle}>
            //                     <Image source={require('../../assets/android.png')} style={styles.headerImageStyle}/>
            //                     <Text style={styles.textStyle}>Read Bible</Text>
            //                 </View>
            //             </TouchableHighlight>

            //             <View style={styles.lineStyle}></View>

            //             <TouchableHighlight underlayColor={'rgba(0, 0, 0, 0.2)'} onPress={() => this.props.navigation.navigate('Bookmark')}>
            //                 <View style={styles.rowStyle}>
            //                     <Image source={require('../../assets/android.png')} style={styles.headerImageStyle}/>
            //                     <Text style={styles.textStyle}>Contacts</Text>
            //                 </View>
            //             </TouchableHighlight>
            //         </ScrollView>
            //     </TouchableOpacity>
            // </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    lineStyle: {
        width: '90%',
        alignSelf: 'center',
        height: 1,
        backgroundColor: 'grey',
        margin: 15
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        color: '#111'
    },
    menuStyle: {
        width: 10,
        height: 10,
        backgroundColor: 'red',
        borderRadius: 50,
        alignSelf: 'center'
    },
    rowStyle: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingLeft: 10
    },
    headerImageStyle: {
        borderRadius: 100,
        width: 30,
        height: 30
    },
    headerStyle: {
        width: '100%',
        height: 200,
        backgroundColor: '#6195FF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    drawerStyle: {
        flex: 1,
        backgroundColor: 'white'
    },
    drawerTransparentStyle: {
        flex: 1,
        backgroundColor: 'transparent'
    }
});