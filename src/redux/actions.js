// action creator: 액션을 (동적으로) 만드는 함수
import {ADD_PLAYER, REMOVE_PLAYER} from "./actionTypes";
import {CHANGE_SCORE} from "./actionTypes";

export const updateUser = (name) => ({
  type: 'updateUser',
  payload: name
})

export const addPlayer = (name) => ({
  type: ADD_PLAYER,
  name
})

export const changeScore = (id, delta) => ({
  type: CHANGE_SCORE,
    id, delta
})

export const removePlayer= (id) => ({
  type:REMOVE_PLAYER,
  id
})