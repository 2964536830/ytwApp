import { handleActions } from "redux-actions"
import Types from "../types/app"

const defaultState = {
  heroIndex:[], // 伯乐主页的数据
  num: 0,
  asyncNum: 0
}

export default handleActions(
  {
    [Types.SET_TOKEN](state) {
      return {
        ...state,
        num: state.num + 1
      }
    },
    [Types.GET_HERO_INDEX](state,data) {
      return {
        ...state,
        heroIndex: data.payload.slice(0,10)
      }
    }
  },
  defaultState
)
