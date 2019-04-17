import { SET_TOKEN } from "../types/app"
import { createAction } from "redux-actions"

const asyncInc = createAction(SET_TOKEN, data => {
  return data
})
export default {
  asyncInc
}