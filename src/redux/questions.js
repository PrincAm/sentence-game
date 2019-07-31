import get from 'lodash/get'

import {WHO, WHAT, WHEN, WHERE} from '../config'

export const SAVE_QUESTION = 'questions/SAVE_QUESTION'

// action creator
export const saveQuestion = (question) => ({type: SAVE_QUESTION, question})

const initialState = {}

// reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_QUESTION:
      return {
        ...state,
        ...action.question
      }
    default:
      return state
  }
}

export default reducer

// selectors
export const sentenceSelector = (state) => {
  const who = get(state, ['questions', WHO])
  const what = get(state, ['questions', WHAT])
  const where = get(state, ['questions', WHERE])
  const when = get(state, ['questions', WHEN])
  return `${who} ${what} ${where} ${when}.`
}
