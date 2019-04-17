import React, { Component } from "react"
import { connect } from "react-redux"
import { Platform, Button, StyleSheet, Text, View } from "react-native"
import { createAppContainer, createBottomTabNavigator } from "react-navigation"
import { NavigationActions } from "react-navigation"
import BackPressComponent from "../lib/BackPressComponent"
import NavigationUtil from "../navigator/NavigationUtil"
import HeroIndex from "../page/Hero/HeroIndex"
import BoleIndex from "../page/Bole/BoleIndex"
import Publish from "../page/Publish"
import Message from "../page/Message"
import User from "../page/User/User"
import TabBar from "./TabBar"
const instructions = Platform.select({
  ios: "",
  android: ""
})

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.backPress = new BackPressComponent({ backPress: this.onBackPress })
  }
  componentDidMount() {
    this.backPress.componentDidMount()
  }
  componentWillUnmount() {
    this.backPress.componentWillUnmount()
  }
  onBackPress = () => {
    const { dispatch,nav } = this.props
    //if (nav.index === 0) {
    if (nav.routes[1].index === 0) {
      //如果RootNavigator中的MainNavigator的index为0，则不处理返回事件
      return false
    }
    dispatch(NavigationActions.back())
    return true
  }
  tabNav = () => {
    return createAppContainer(
      createBottomTabNavigator(
        {
          HeroIndex: {
            screen: HeroIndex,
            navigationOptions: {
              tabBarLabel: "英雄"
            }
          },
          BoleIndex: {
            screen: BoleIndex,
            navigationOptions: {
              tabBarLabel: "伯乐"
            }
          },
          Publish: {
            screen: Publish,
            navigationOptions: {
              tabBarLabel: "发布"
            }
          },
          Message: {
            screen: Message,
            navigationOptions: {
              tabBarLabel: "消息"
            }
          },
          User: {
            screen: User,
            navigationOptions: {
              tabBarLabel: "我的"
            }
          }
        },
        {
          tabBarComponent: TabBar,
          tabBarOptions: {
            activeTintColor: "#94CEEE",
            inactiveTintColor: "#C1C1C1"
          }
        }
      )
    )
  }
  render() {
    NavigationUtil.navigation = this.props.navigation
    const Tab = this.tabNav()
    return <Tab />
  }
}
export default connect(state => ({ nav: state.nav }))(HomePage)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
})
