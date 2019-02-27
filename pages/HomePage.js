import React, {Component} from 'react';
import { View , Text ,Button } from 'react-native'

class HomePage extends Component {
    static navigationOptions = {
        title:'home',
        headerBackTitle: '返回首页'
    };
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text>这里是主页</Text>
                <Button title={'go to page1'} onPress={ () => {
                    // name是参数，page1是路由的url
                    navigation.navigate('Page1',{name:'动态的'})
                }} />
                <Button title={'go to page2'} onPress={ () => {
                    // name是参数，page1是路由的url
                    navigation.navigate('Page2')
                }} />
                <Button title={'go to page3'} onPress={ () => {
                    // name是参数，page1是路由的url
                    navigation.navigate('Page3',{title:'deldl'})
                }} />
                <Button title={'go to TopNavigator'} onPress={ () => {
                    // name是参数，page1是路由的url
                    navigation.navigate('Top')
                }} />
                <Button title={'go to BottomNavigator'} onPress={ () => {
                    // name是参数，page1是路由的url
                    navigation.navigate('Bottom')
                }} />
            </View>
        );
    }
}

export default HomePage;