/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
//import App from './App';
// 让主文件指向路由器
import { AppStackNavigator } from './navigators/appNavigators'
import { createAppContainer } from 'react-navigation'
import {name as appName} from './app.json';

const AppStackNavigatorContainer = createAppContainer(AppStackNavigator);

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
