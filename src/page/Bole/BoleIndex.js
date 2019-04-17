import React, {Component} from 'react';
import {Platform, Button,StyleSheet, Text, View} from 'react-native';
const instructions = Platform.select({
  ios: '',
  android:''
})

export default class BoleIndex extends Component{
  render() {
    return (
      <View style={styles.container}>
       <Text>BoleIndex</Text>
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