/**
 * Created by 96004 on 2017/7/14.
 */
import * as types from './mutation-types'
import { shuffle } from 'common/js/randomList'
import { playMode } from 'common/js/config'
export const selectPlay = function ({commit, state}, {list, index}) {
  if (state.mode === playMode.random) {
    let randomList = shuffle(list)
    commit(types.SET_PLAYINGLIST, randomList)
    index = findIndex(randomList, list[index])
  } else {
    commit(types.SET_PLAYINGLIST, list)
  }
  commit(types.SET_CURRENTINDEX, index)
  commit(types.SET_FULLSCREEN, true)
  commit(types.SET_PLAYING, true)
}

function findIndex (list, song) {
  return list.findIndex(item => {
    return item.id === song.id
  })
}

