import React, { Component } from "react"
import { Platform, Button, StyleSheet, Text, View } from "react-native"
import { connect } from "react-redux"
import action from '../store/actions'

const instructions = Platform.select({
  ios: "",
  android: ""
})

class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Message</Text>
      </View>
    )
  }
}
export default connect(
  state => ({ ...state.app }),
  action.app
)(Message)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
})
