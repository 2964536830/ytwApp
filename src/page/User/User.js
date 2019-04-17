import React, {Component} from 'react';
import {Platform, Button,StyleSheet, Text, View} from 'react-native';
const instructions = Platform.select({
  ios: '',
  android:''
})

export default class User extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
       <Text>User</Text>
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