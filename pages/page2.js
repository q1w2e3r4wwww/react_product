import React, {Component} from 'react';
import { View , Text , Button } from 'react-native'

class Page2 extends Component {
    render() {
        console.log(this.props)
        const { navigation } = this.props;
        return (
            <View>
                <Text>page2页面</Text>
                <Button title={'打开侧滑菜单'} onPress={() => navigation.openDrawer()} />
            </View>
        );
    }
}

export default Page2;