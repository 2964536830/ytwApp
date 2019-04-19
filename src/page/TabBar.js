import React, { Component } from "react"
import {
  Platform,
  Button,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from "react-native"
const instructions = Platform.select({
  ios: "",
  android: ""
})

const TabBar = props => {
  const {
    renderIcon,
    getLabelText,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation
  } = props
  const { routes, index: activeRouteIndex } = navigation.state

  return (
    <View style={styles.container}>
      {routes.map((route, routeIndex) => {

        const isRouteActive = routeIndex === activeRouteIndex
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor

        return (
          <TouchableOpacity
            key={routeIndex}
            style={styles.tabButton}
            onPress={() => {
              onTabPress({ route })
            }}
            onLongPress={() => {
              onTabLongPress({ route })
            }}
            accessibilityLabel={getAccessibilityLabel({ route })}
          >
            {(function() {
              switch (getLabelText({ route })) {
                case "英雄":
                  return isRouteActive ? (
                    <Image
                      style={styles.tabImg}
                      source={require("../assets/images/tab_bar/hero_s.png")}
                    />
                  ) : (
                    <Image
                      style={styles.tabImg}
                      source={require("../assets/images/tab_bar/hero_n.png")}
                    />
                  )
                  break
                case "伯乐":
                  return isRouteActive ? (
                    <Image
                      style={styles.tabImg}
                      source={require("../assets/images/tab_bar/demand_s.png")}
                    />
                  ) : (
                    <Image
                      style={styles.tabImg}
                      source={require("../assets/images/tab_bar/demand_n.png")}
                    />
                  )
                  break
                case "发布":
                  return isRouteActive ? (
                    <Image
                      style={styles.tabImg}
                      source={require("../assets/images/tab_bar/submit_s.png")}
                    />
                  ) : (
                    <Image
                      style={styles.tabImg}
                      source={require("../assets/images/tab_bar/submit_n.png")}
                    />
                  )
                  break
                case "消息":
                  return isRouteActive ? (
                    <Image
                      style={styles.tabImg}
                      source={require("../assets/images/tab_bar/message_s.png")}
                    />
                  ) : (
                    <Image
                      style={styles.tabImg}
                      source={require("../assets/images/tab_bar/message_n.png")}
                    />
                  )
                case "我的":
                  return isRouteActive ? (
                    <Image
                      style={styles.tabImg}
                      source={require("../assets/images/tab_bar/person_s.png")}
                    />
                  ) : (
                    <Image
                      style={styles.tabImg}
                      source={require("../assets/images/tab_bar/person_n.png")}
                    />
                  )
                  break
              }
            })()}

            <Text style={{ color: isRouteActive ? tintColor : "#C1C1C1" }}>
              {getLabelText({ route })}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default TabBar
const styles = StyleSheet.create({
  container: { flexDirection: "row", height: 52, elevation: 2 },
  tabButton: { flex: 1, justifyContent: "center", alignItems: "center" },
  tabImg: { width: 35, height: 30 }
})
