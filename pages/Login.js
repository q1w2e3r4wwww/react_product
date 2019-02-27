import React, {Component} from 'react';
import { View , Text , Button} from 'react-native'


class Login extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text>登录页面</Text>
                <Button
                    title={'跳转到page1'}
                    onPress={() => {
                        navigation.navigate('Page1')
                    }}
                />
            </View>
        );
    }
}

export default Login;