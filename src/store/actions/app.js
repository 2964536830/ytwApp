import Types from "../types/app"
import { createAction } from "redux-actions"
import { Fetch } from "../../lib/Fetch"

const asyncInc = createAction(Types.SET_TOKEN, data => {
  return data
})
const getHeroIndex = createAction(Types.GET_HERO_INDEX, data => {
  return new Promise((resolve, reject) => {
    Fetch("https://api.apiopen.top/likePoetry?name=李白").then(res => {
      resolve(res.result)
    })
  })
})
export default {
  asyncInc,
  getHeroIndex
}
