import React, {Component} from 'react';
import {Platform, Button,StyleSheet, Text, View} from 'react-native';
const instructions = Platform.select({
  ios: '',
  android:''
})

export default class Publish extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
       <Text>Publish</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});