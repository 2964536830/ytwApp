import React, { Component } from "react"

import { Provider } from "react-redux"
import store from "./src/store"
import AppNavigator from "./src/navigator/AppNavigators"

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}
