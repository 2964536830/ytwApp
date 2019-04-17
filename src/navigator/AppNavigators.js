/**
 * @private 此文件是App的导航文件
 * @param 包含了底部导航栏和顶部导航栏
 * @param createSwitchNavigator 这个功能是从欢迎页到主页后可以直接销毁欢迎页,不然用户可以返回欢迎页
 */

import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation"
import { connect } from "react-redux"
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer 
} from "react-navigation-redux-helpers"

import WelecomePage from "../page/WelecomePage"
import HomePage from "../page/HomePage"
import HeroIndex from "../page/Hero/HeroIndex"
import HeroDetail from "../page/Hero/HeroDetail"
import BoleIndex from "../page/Bole/BoleIndex"
import BoleDetail from "../page/Bole/BoleDetail"
import Publish from "../page/Publish"
import Message from "../page/Message"
import User from "../page/User/User"

const InitNavigator = createStackNavigator({
  WelecomePage: {
    screen: WelecomePage,
    navigationOptions: {
      header: null // 设置header为Null隐藏导航栏来达到全屏效果
    }
  }
})
const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null // 设置header为Null隐藏导航栏来达到全屏效果
    }
  },
  HeroIndex: {
    screen: HeroIndex,
    navigationOptions: {
      header: null // 设置header为Null隐藏导航栏来达到全屏效果
    }
  },
  HeroDetail: {
    screen: HeroDetail,
    navigationOptions: {
      // header: null // 设置header为Null隐藏导航栏来达到全屏效果
    }
  },
  BoleIndex: {
    screen: BoleIndex,
    navigationOptions: {
      header: null // 设置header为Null隐藏导航栏来达到全屏效果
    }
  },
  BoleDetail: {
    screen: BoleDetail,
    navigationOptions: {
      header: null // 设置header为Null隐藏导航栏来达到全屏效果
    }
  },
  Publish: {
    screen: Publish,
    navigationOptions: {
      header: null // 设置header为Null隐藏导航栏来达到全屏效果
    }
  },
  User: {
    screen: User,
    navigationOptions: {
      header: null // 设置header为Null隐藏导航栏来达到全屏效果
    }
  },
  Message: {
    screen: Message,
    navigationOptions: {
      header: null // 设置header为Null隐藏导航栏来达到全屏效果
    }
  }
})
export const rootCom = "Init" //设置根路由

export const RootNavigator = createAppContainer(
  createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator
  })
)
export const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
)

const AppWithNavigationState = createReduxContainer (RootNavigator, "root")

/**
 * State到Props的映射关系
 * @param state
 */
const mapStateToProps = state => ({
  state: state.nav //v2
})
/**
 * 3.连接 React 组件与 Redux store
 */
export default connect(mapStateToProps)(AppWithNavigationState)
