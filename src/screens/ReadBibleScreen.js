import React, {Component} from 'react'
import Tab from './TabNavigator'
import { SafeAreaView } from 'react-navigation';
import HeaderComponent from '../components/HeaderComponent'
import {Button} from 'native-base'
import {SimpleLineIcons} from '@expo/vector-icons'

class ReadBibleScreen extends Component {
    static router = Tab.router;

    render() {
        return (
            <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
                <HeaderComponent
                    leftIconName='menu'
                    headerTitle='Header'
                    toggleMenu={this.props.navigation}
                >
                    <Button transparent onPress={() => console.log('Click')}>
                        <SimpleLineIcons name='options-vertical' size={15} color='#FFF' />
                    </Button>
                </HeaderComponent>
                <Tab navigation={this.props.navigation} />
            </SafeAreaView>
        );
    }
}

export default ReadBibleScreen;