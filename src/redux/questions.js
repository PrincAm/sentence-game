import get from 'lodash/fp/get'

import {WHO, WHAT, WHEN, WHERE} from '../config'

const SAVE_QUESTION = 'questions/SAVE_QUESTION'

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
  const who = get(['questions', WHO], state)
  const what = get(['questions', WHAT], state)
  const where = get(['questions', WHERE], state)
  const when = get(['questions', WHEN], state)
  return `${who} ${what} ${where} ${when}`
}
