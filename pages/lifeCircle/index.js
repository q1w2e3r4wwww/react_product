import React, { Component } from 'react';
import PropTypes from 'prop-types' // 在React 16版本之后, PropTypes 从react包 换到了prop-types 包中
import { Text , View } from 'react-native'

class LifeCircle extends Component {
    static defaultProps = { // 设置默认值
        defaultName:'设置默认值，通过this.props来调用',
        age: '25',
        name:'is required'
    };
    static propTypes = { // 检查属性类型是否正确
        defaultName: PropTypes.string,
        name:PropTypes.string.isRequired
    };
    constructor(props){
        super(props);
        console.log('组件最开始执行：constructor')
    }
    render() {
        console.log('组件正在加载 ：render');
        return (
            <View>
                <Text>生命周期</Text>
                <Text>{this.props.defaultName}</Text>
                <Text>年龄：{this.props.age}</Text>
                <Text>姓名不能为空：{this.props.name}</Text>
            </View>
        );
    }
    refFuncTest(){
        return '测试父组件通过ref属性调用子组件的函数'
    }
    componentWillMount(){
        console.log('组件开始加载：componentWillMount')
    }
    componentDidMount(){
        console.log('组件加载完成：componentDidMount')
    }
    componentWillReceiveProps(){ // 注意    这里是props发生变化
        console.log('组件中props发生变化：componentWillReceiveProps')
    }
    shouldComponentUpdate(){// 注意    这里是state发生变化
        console.log('state发生变化，询问组件是否也更新，，，返回true---组件更新--再次调用componentWillMount，render ，componentDidMount   false---组件更新')
        return true;
    }
    componentWillUpdate(nextProps,nextState){
        console.log('组件即将更新：componentWillUpdate')
    }
    componentDidUpdate(prevProps,prevState){
        console.log('组件更新完成：componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('组件卸载')
    }
}

export default LifeCircle;