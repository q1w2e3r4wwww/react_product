/**
 * 作者：王涛
 * 时间：2019-2-26
 * 内容：react-native
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import LifeCircle from './pages/lifeCircle'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            remove: false,
            refTest:''
        }
        this.refTest = this.refTest.bind(this)
    }

    render() {
        const params = { name:'wangtao',age:'24',sex:'男'}
        // 可以使用延展操作符...  {...params}这样直接传参数
        const view = this.state.remove ? null : <LifeCircle {...params} ref='refTest' />;
        return (
            <View style={styles.container}>
                <Button style={styles.welcome}
                        onPress={() => this.setState({remove: !this.state.remove})}
                        title={'卸载/加载生命周期组件'}/>
                {view}
                <Button title={'通过ref获取子组件的方法'} onPress={ this.refTest } />
                <Text>{this.state.refTest}</Text>
            </View>
        );
    }
    refTest(){
        this.setState({
            // refTest:this.refs['refTest'].refFuncTest()
            refTest:this.refs.refTest.refFuncTest()
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
