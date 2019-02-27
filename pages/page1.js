import React, {Component} from 'react';
import { View , Text ,Button } from 'react-native'

class Page1 extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text>page1页面</Text>
                <Button title={'Go Back'} onPress={ () => {
                    navigation.goBack(); //返回上一页
                }}/>
                <Button title={'跳转到页面4'} onPress={ () => {
                    navigation.navigate('Page4');
                }}/>
            </View>
        );
    }
}

export default Page1;