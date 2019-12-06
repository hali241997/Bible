import React, {Component} from 'react'
import * as Font from 'expo-font'
import { Header, Left, Button, Body, Title, Icon, Right } from 'native-base';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {fontLoaded: false}
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto_medium': require('../../assets/fonts/Roboto_medium.ttf')
        });
        this.setState({fontLoaded: true})
    }

    sideMenuToggler() {
        this.props.toggleMenu.toggleDrawer();
    }

    render() {
        // console.log(this.props)
        return (
            this.state.fontLoaded ? (
                <Header style={{backgroundColor: '#0A72A5'}}>
                    <Left>
                        <Button transparent onPress={this.sideMenuToggler.bind(this)}>
                            <Icon name={this.props.leftIconName} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.props.headerTitle}</Title>
                    </Body>
                    <Right>
                        {this.props.children}
                    </Right>
                </Header>
            )
            : null
        );
    }
}

export default HeaderComponent;