import React, {Component} from 'react';
import {StyleSheet, View , Text , TextInput  } from 'react-native'

class Page3 extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props)
        const { navigation } = this.props;
        const { state,setParams } = navigation;
        const { params } = state;
        console.log(params.mode) // 这里的params里面的mode是通过appNavigators路由管理跳转到page3页面，点击page3页面上的右边按钮传到params对象里面的
        const ViewText = params && params.mode === 'edit' ? '正在编辑' : '编辑完成';
        return (
            <View>
                <Text>page3页面12</Text>
                <Text style={styles.center}>{ViewText}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={ (text) => { // 通过setParams动态设置params对象的title属性
                        setParams({
                            title:text
                        })
                    }}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    center:{
        width:'100%',
        backgroundColor:'red',
        textAlign: 'center',
        paddingTop:10,
        paddingBottom:10,
        color:'#ffffff'
    },
    input:{
        borderWidth:1,
        borderColor:'blue',
        height:40,
        marginTop:20
    }
})

export default Page3;