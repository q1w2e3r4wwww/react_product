import React from 'react';
// 创建导航器
import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createDrawerNavigator,
    createSwitchNavigator,
    SafeAreaView,
    DrawerItems
} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import {Button, Platform, ScrollView} from 'react-native'

//引入页面
import HomePage from '../pages/HomePage'
import Page1 from '../pages/page1'
import Page2 from '../pages/page2'
import Page3 from '../pages/page3'
import Page4 from '../pages/page4'
import Page5 from '../pages/page5'
import Login from '../pages/Login'
import FlatList from '../pages/FlatList'
import SectionList from '../pages/SectionList'

/*
*   进行下面的配置后，
*   页面默认进来就是login页面,,并且只会显示一个页面，跳转到其他页面后，
*   不会在其他页面通过滑动、返回按钮等操作返回到当前页面
* */
const AppStack = createStackNavigator({Home: HomePage, Page1: Page1});
const AuthStack = createStackNavigator({Login: {screen: Login}});
export default createSwitchNavigator(
    {
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Auth',
    }
);


// 抽屉式
const DrawerNavigator = createDrawerNavigator({
    Page5: {
        screen: Page5,
        navigationOptions: {
            drawerLabel: 'page5页面', // 侧滑菜单的菜单标题
            drawerIcon: ({tintColor}) => {
                return <MaterialIcon
                    name={'dashboard'}
                    size={24}
                    style={{color: tintColor}}
                />
            }
        }
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            drawerLabel: 'page2页面', // 侧滑菜单的菜单标题
            drawerIcon: ({tintColor}) => {
                return <MaterialIcon
                    name={'dns'}
                    size={24}
                    style={{color: tintColor}}
                />
            }
        }
    }
}, {
    order: ['Page2', 'Page5'], // - 定义了侧滑栏items顺序的路由名称数组.
    initialRouteName: 'Page2',//初始路由
    contentOptions: { // 侧边菜单内容的颜色
        activeTintColor: '#e91e63', // 活动选项卡的标签和图标颜色
        itemsContainerStyle: { //内容节的样式对象
            marginVertical: 0,
        },
        iconContainerStyle: { // 用于覆盖View图标容器样式的样式对象
            opacity: 1
        }
    },
    /*
    *  如果自定义内容，请务必将内容包装在 SafeAreaView 中
    * */
    contentComponent: (props) => ( // 显示侧边菜单的内容 ,内容就是上面所配置的Page5和Page2两个页面，props接收到的就是这两个页面
        <ScrollView>
            <SafeAreaView forceInset={{flex: 1, top: 'always', horizontal: 'never'}}>
                <DrawerItems {...props} />
            </SafeAreaView>
        </ScrollView>
    ),
    /*
       drawerLockMode的值：
       unlocked'   可以通过手势和代码 打开关闭抽屉
       locked-closed' 抽屉关闭状态  不能通过手势打开  只能通过代码实现
       locked-open'  抽屉打开状态  不能通过手势关闭  只能通过代码实现
    * */
    drawerLockMode: 'unlocked',//设置是否响应手势
});


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

// 底部tabbar导航
const AppBottomNavigator = createMaterialBottomTabNavigator({
        Page1: { // 路由名称
            screen: AppTopNavigator, // 映射的路由页面
            navigationOptions: {
                tabBarLabel: '最热', // 底部导航标题
                tabBarIcon: ({tintColor, focused}) => ( // 底部导航图标，，通过focused来判断是否被选中
                    <Icon
                        name={'ios-home'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            },
        },
        Screen3: { // 路由名称
            screen: Page3, // 映射的路由页面
            navigationOptions: {
                tabBarLabel: '趋势',
                tabBarIcon: ({tintColor, focused}) => ( // 底部导航图标，，通过focused来判断是否被选中
                    <Icon
                        name={'ios-locate'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            },
        },
        Screen4: { // 路由名称
            screen: Page5, // 映射的路由页面
            navigationOptions: {
                tabBarLabel: '收藏',
                tabBarIcon: ({tintColor, focused}) => ( // 底部导航图标，，通过focused来判断是否被选中
                    <Icon
                        name={'ios-photos'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            },
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
                )
            },
        }
    }, {
        activeColor: '#f00', // 选中的图标和文字的颜色
        inactiveColor: '#ffffff',// 默认的图标和文字的颜色
        labeled: true, // 文字是否显示，默认是false ,只会显示图标
        barStyle: {
            backgroundColor: '#666666'
        },
        tabBarOptions: {
            showIcon: true
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

/*
*               这里是总路由
*
* */
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
            headerTitleContainerStyle: { // 设置title居中显示的第一个不要因素
                left: TITLE_OFFSET,
                right: TITLE_OFFSET,
            }
        }
    },
    Bottom: {
        screen: AppBottomNavigator,
        navigationOptions: {
            title: 'BottomNavigator',
            headerTitleStyle: { // 给title设置居中显示  第二个必要因素
                alignSelf: 'center',
                textAlign: 'center',
                flex: 1,
            },
            headerTitleContainerStyle: { // 设置title居中显示的第一个必要因素
                left: TITLE_OFFSET,
                right: TITLE_OFFSET,
            }
        }
    },
    DrawerNav: {
        screen: DrawerNavigator,
        navigationOptions: {
            title: '抽屉式',
            headerTitleStyle: { // 给title设置居中显示  第二个必要因素
                alignSelf: 'center',
                textAlign: 'center',
                flex: 1,
            },
            headerTitleContainerStyle: { // 设置title居中显示的第一个不要因素
                left: TITLE_OFFSET,
                right: TITLE_OFFSET,
            }
        }
    },
    FlatList: {
        screen: FlatList,
        navigationOptions: {
            title: 'FlatList列表',
            headerTitleStyle: { // 给title设置居中显示  第二个必要因素
                alignSelf: 'center',
                textAlign: 'center',
                flex: 1,
            },
            headerTitleContainerStyle: { // 设置title居中显示的第一个不要因素
                left: TITLE_OFFSET,
                right: TITLE_OFFSET,
            }
        }
    },
    SectionList: {
        screen:SectionList,
        navigationOptions:{
            title:'SectionList列表',
            headerTitleStyle:{
                alignSelf:'center',
                textAlign:'center',
                flex:1
            },
            headerTitleContainerStyle:{
                left:TITLE_OFFSET,
                right:TITLE_OFFSET
            }
        }
    }
});