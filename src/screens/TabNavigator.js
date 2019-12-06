import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {Entypo, Foundation} from '@expo/vector-icons'
import BookScreen from './BookScreen';
import ChapterScreen from './ChapterScreen';
import VerseScreen from './VerseScreen';

const Tab = createMaterialTopTabNavigator({
    Book: {
        screen: BookScreen,
        navigationOptions: {
          //Icon for Book Screen
          tabBarIcon: ({tintColor}) => (
            <Foundation name='book-bookmark' size={40} color={tintColor} />
          ),
        }
    },
    Chapter: {
        screen: ChapterScreen,
        //Icon for Chapter
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Entypo name='open-book' size={40} color={tintColor} />
          )
        }
    },
    Verse: {
        screen: VerseScreen,
        //Icon for Verse Screen
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Foundation name='clipboard-notes' size={40} color={tintColor} />
          )
        }
    }
},
{
    initialRouteName: 'Book',
    tabBarOptions: {
        showIcon: true,
        iconStyle: {
            width: 40,
            height: 35,
            alignItems: 'center',
            justifyContent: 'center'
        },
        labelStyle: {
            fontWeight: 'bold'
        },
        activeTintColor: '#18C4B6',
        inactiveTintColor: '#FFF',
        indicatorStyle: {
            backgroundColor: '#18C4B6' //Styling the active tab's underline
        },
        style: {
            backgroundColor: '#0A72A5'//Styling the whole Top Tab Navigator
        }
    }
});

export default Tab;