/**
 * @Description: 路由
 * @author Qi
 * @date 2020/12/01
 */
import React from 'react';
import {ToastAndroid, BackHandler, Platform} from 'react-native';
import {createAppContainer, NavigationActions} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginPage from './page/LoginPage';
import MainPage from './page/MainPage';
import NavigationService from './common/NavigationService';
import {Provider} from 'mobx-react';

const AppNavigator = createStackNavigator(
  {
    MainPage,
    LoginPage,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
    initialRouteName: 'LoginPage',
  },
);

let lastBackPressed = false;
const defaultGetStateForAction = AppNavigator.router.getStateForAction;
AppNavigator.router.getStateForAction = (action, state) => {
  // if (state && action.type === NavigationActions.BACK) {
  //   if (Platform.OS === 'android') {
  //     if (state.routes[state.index].routeName === 'MainPage') {
  //       if (lastBackPressed + 2000 < Date.now()) {
  //         ToastAndroid.show('再按一次退出', ToastAndroid.SHORT);
  //         lastBackPressed = Date.now();
  //         const routes = [...state.routes];
  //         return {
  //           ...state,
  //           ...state.routes,
  //           index: routes.length - 1,
  //         };
  //       }
  //       BackHandler.exitApp();
  //     }
  //   }
  // }
  return defaultGetStateForAction(action, state);
};
const AppContainer = createAppContainer(AppNavigator);
export default class Router extends React.Component {
  render() {
    return (
      <Provider>
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
