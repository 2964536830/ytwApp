import { createStore, applyMiddleware } from "redux"
import rootReducer from "./reducers"
import promiseMiddleware from "redux-promise"

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
