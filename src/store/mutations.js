/**
 * Created by 96004 on 2017/7/14.
 */
import * as types from './mutation-types'
export const mutations = {
  [types.SET_SINGER](state, data) {
    state.singer = data
  },
  [types.SET_PLAYING](state, flag) {
    state.playing = flag
  },
  [types.SET_FULLSCREEN](state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAYINGLIST](state, list) {
    state.playingList = list
  },
  [types.SET_SEQUENCELIST](state, data) {
    state.sequenceList = data
  },
  [types.SET_MODE](state, num) {
    state.mode = num
  },
  [types.SET_CURRENTINDEX](state, index) {
    state.currentIndex = index
  }
}
