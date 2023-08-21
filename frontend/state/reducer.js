// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { SET_INFO_MESSAGE, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_SELECTED_ANSWER, RESET_FORM, INPUT_CHANGE, SET_QUIZ_INTO_STATE } from './action-types'

const initialWheelState = 0
function wheel(state = initialWheelState, { type, payload }) {
  switch (type) {
    case MOVE_CLOCKWISE:
      return payload
    case MOVE_COUNTERCLOCKWISE:
      return payload
    default:
      return state
  }

}

const initialQuizState = null
function quiz(state = initialQuizState, { type, payload }) {
  switch (type) {
    case SET_QUIZ_INTO_STATE:
      return payload
    default:
      return state
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, { type, payload }) {
  switch (type) {
    case SET_SELECTED_ANSWER:
      return payload
    default:
      return state
  }

}

const initialMessageState = ''
function infoMessage(state = initialMessageState, { type, payload }) {
  switch (type) {
    case SET_INFO_MESSAGE:
      return payload
    default:
      return state
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, { type, payload }) {
  switch (type) {
    case INPUT_CHANGE:
      return payload
    case RESET_FORM:
      return payload
    default:
      return state
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
