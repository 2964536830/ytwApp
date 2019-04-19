import React, { Component } from "react"
import { StyleSheet, TouchableHighlight, Text, View } from "react-native"

export default class ButtonView extends Component {
  static defaultProps = {
    btnText: "Button",
    underlayColor: "gray"
  }
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <TouchableHighlight
          style={[styles.btnDefaultStyle, this.props.btnStyle, styles.center]}
          activeOpacity={0.5}
          underlayColor={this.props.underlayColor}
          onPress={this.props.onPress}
        >
          <Text style={[styles.textDefaultStyle, this.props.textStyle]}>
            {this.props.btnText}
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center"
  }
})
