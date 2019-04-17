import { handleActions } from "redux-actions"
import { SET_TOKEN } from "../types/app"

const defaultState = {
  num: 0,
  asyncNum: 0
}

export default handleActions(
  {
    [SET_TOKEN](state) {
      return {
        ...state,
        num: state.num + 1
      }
    }
  },
  defaultState
)
