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
                    navigation.navigate('Page2')
                }} />
                <Button title={'go to page3'} onPress={ () => {
                    // title是参数，page3是路由的url
                    navigation.navigate('Page3',{title:'deldl'})
                }} />
                <Button title={'go to TopNavigator'} onPress={ () => {
                    navigation.navigate('Top')
                }} />
                <Button title={'go to BottomNavigator'} onPress={ () => {
                    navigation.navigate('Bottom')
                }} />
                <Button title={'go to DrawerNavigator'} onPress={ () => {
                    navigation.navigate('DrawerNav')
                }} />
                <Button
                    title={'go to FlatList'}
                    style={{marginTop:10}}
                    onPress={ () => {
                    navigation.navigate('FlatList')
                }} />
            </View>
        );
    }
}

export default HomePage;