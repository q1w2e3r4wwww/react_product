import React from 'react';
// 创建导航器
import {createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { Button ,Platform } from 'react-native'

//引入页面
import HomePage from '../pages/HomePage'
import Page1 from '../pages/page1'
import Page2 from '../pages/page2'
import Page3 from '../pages/page3'
import Page4 from '../pages/page4'
import Login from '../pages/Login'

// 顶部导航，接收两个参数，第一个为导航标题与路由页面，，，第二个参数为样式设置
const AppTopNavigator = createMaterialTopTabNavigator({
        Page1: {
            screen: Page1,
            navigationOptions: {
                tabBarLabel: 'all' // 顶部标题
            }
        },
        Page2: {
            screen: Page2,
            navigationOptions: {
                tabBarLabel: 'react'
            }
        },
        Page4: {
            screen: Page4,
            navigationOptions: {
                tabBarLabel: 'react-native'
            }
        }
    }, {
        tabBarOptions: {
            tabStyle: { //选项卡的样式
                mindWidth: 50
            },
            upperCaseLabel: false, // -是否使标签大写，默认为 true。
            scrollEnabled: false, // 选项卡是否支持滚动
            style: {
                backgroundColor: "#678" // 选项卡栏的背景色
            },
            indicatorStyle: { // 选项卡指示器的样式对象（选项卡底部的行）
                height: 2,
                backgroundColor: "#ffffff"
            },
            labelStyle: { // 文字的样式
                fontSize: 13,
                marginTop: 6,
                marginBottom: 6
            }
        }
    }
);

const AppBottomNavigator = createMaterialBottomTabNavigator({
    Page1: { // 路由名称
        screen: Page1, // 映射的路由页面
        navigationOptions: {
            tabBarLabel: '最热', // 底部导航标题
            tabBarIcon: ({tintColor, focused}) => ( // 底部导航图标，，通过focused来判断是否被选中
                <Icon
                    name={'ios-home'}
                    size={26}
                    style={{color: tintColor}}
                />
        )},
    },
    Page2: { // 路由名称
        screen: Page2, // 映射的路由页面
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({tintColor, focused}) => ( // 底部导航图标，，通过focused来判断是否被选中
                <Icon
                    name={'ios-locate'}
                    size={26}
                    style={{color: tintColor}}
                />
        )},
    },
    Page4: { // 路由名称
        screen: Page4, // 映射的路由页面
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({tintColor, focused}) => ( // 底部导航图标，，通过focused来判断是否被选中
                <Icon
                    name={'ios-photos'}
                    size={26}
                    style={{color: tintColor}}
                />
        )},
    },
    Login: { // 路由名称
        screen: Login, // 映射的路由页面
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => ( // 底部导航图标，，通过focused来判断是否被选中
                <Icon
                    name={'ios-person'}
                    size={26}
                    style={{color: tintColor}}
                />
        )},
    }},{
        activeColor: '#f00', // 选中的图标和文字的颜色
        inactiveColor:'#ffffff',// 默认的图标和文字的颜色
        labeled:true, // 文字是否显示，默认是false ,只会显示图标
        barStyle:{
            backgroundColor: '#666666'
        },
        tabBarOptions: {
            showIcon:true
        }
    }
);

/*
    const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;
*   设置这个是为了让顶部导航--navigationOptions的title居中显示
*   因为title是否居中是根据顶部的左右两边是有内容来判断的，如果右边没有内容，那么title的right:0,
*   左边有width:70的内容的话，那么left:70，，这样title就会偏右显示
*
*   所以需要默认情况下，顶部导航的左右两边都设置宽度，不管左右两边是否具有内容，Title都会居中显示了
* */
const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;
export const AppStackNavigator = createStackNavigator({
    // 对应页面的路由名
    HomePage: {
        screen: HomePage, // 指向哪一个页面
    },
    Page1: {
        screen: Page1, // 指向哪一个页面
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name}页面名`,
            headerBackTitle: 'back'
        })
    },
    Page2: {
        screen: Page2, // 指向哪一个页面
        navigationOptions: {
            title: `this is page2`
        }
    },
    Page3: {
        screen: Page3, // 指向哪一个页面
        navigationOptions: (props) => {
            console.log(props)
            const {navigation} = props;
            const {state, setParams} = navigation;
            const {params} = state;
            return {
                title: params.title ? params.title : 'this is page3',
                headerRight: ( // 头部右边的按钮
                    <Button
                        title={params.mode === 'edit' ? '保存' : '编辑'}
                        onPress={() => setParams({mode: params.mode === 'edit' ? ' ' : 'edit'})}
                    />
                )
            }
        }
    },
    Page4: {
        screen: Page4, // 指向哪一个页面
        navigationOptions: {
            title: `this is page4`
        }
    },
    Top: {
        screen: AppTopNavigator,
        navigationOptions: {
            title: 'TopNavigator',
            headerTitleContainerStyle:{ // 设置title居中显示的第一个不要因素
                left: TITLE_OFFSET,
                right: TITLE_OFFSET,
            }
        }
    },
    Bottom: {
        screen: AppBottomNavigator,
        navigationOptions: {
            title: 'BottomNavigator',
            headerTitleStyle:{ // 给title设置居中显示
                alignSelf:'center',
                textAlign: 'center',
                flex:1,
            },
            headerTitleContainerStyle:{ // 设置title居中显示的第一个不要因素
                left: TITLE_OFFSET,
                right: TITLE_OFFSET,
            }
        }
    }
});