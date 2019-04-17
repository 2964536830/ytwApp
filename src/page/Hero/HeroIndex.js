import React, { Component } from "react"
import { Platform, Button, StyleSheet, Text, View } from "react-native"
import { connect } from "react-redux"
import actions from "../../store/actions"
import NavigationUtil from "../../navigator/NavigationUtil"

const instructions = Platform.select({
  ios: "",
  android: ""
})

class HeroIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log(this.props, "aaaaaaaaaaaaaaaaaaaa")

    return (
      <View style={styles.container}>
        <Text>HeroIndex</Text>
        <Button title={"点击我"} onPress={this.toDetail} />
      </View>
    )
  }
  toDetail = () => {
    const { navigation } = this.props
    NavigationUtil.goPage(navigation, "HeroDetail")
  }
}
export default connect(
  state => ({ ...state.app }),
  actions.app
)(HeroIndex)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
})
