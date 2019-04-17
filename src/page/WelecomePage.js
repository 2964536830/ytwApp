import React, { Component } from "react"
import { Platform, Button, StyleSheet, Text, View } from "react-native"
const instructions = Platform.select({
  ios: "",
  android: ""
})
export default class WelecomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    const { navigation } = this.props

    this.timer = setTimeout(() => {
      navigation.navigate("Main")
    }, 2000)
  }
  componentWillUnMount() {
    this.timer && clearTimeout(this.timer)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>WelecomePage</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
})
