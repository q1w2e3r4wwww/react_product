/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
//import App from './App';
// 让主文件指向路由器
import { AppStackNavigator } from './navigators/appNavigators'
//import AppNavigator from './navigators/appNavigators'
import { createAppContainer } from 'react-navigation'
import {name as appName} from './app.json';

const AppStackNavigatorContainer = createAppContainer(AppStackNavigator); // 使用createAppContainer先包裹AppStackNavigator，在注册，是navigation 3.x的新语法
//const AppStackNavigatorContainer = createAppContainer(AppNavigator);

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
