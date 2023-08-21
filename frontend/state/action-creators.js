import { INPUT_CHANGE, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, RESET_FORM, SET_INFO_MESSAGE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER } from "./action-types"
import axios from "axios"

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise(index) {
  return {
    type: MOVE_CLOCKWISE,
    payload: index
  }
}

export function moveCounterClockwise(index) {
  return {
    type: MOVE_COUNTERCLOCKWISE,
    payload: index
  }
}

export function selectAnswer() {
  return {
    type: SET_SELECTED_ANSWER,
    payload: payload
  }
}

export function setMessage(message) {
  return {
    type: SET_INFO_MESSAGE,
    payload: message
  }
}

export function setQuiz() {
  return {
    type: SET_QUIZ_INTO_STATE,
    payload: payload
  }
}

export function inputChange() {
  return {
    type: INPUT_CHANGE,
    payload: payload
  }
}

export function resetForm() {
  return {
    type: RESET_FORM,
    payload: payload
  }
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    axios.get('http://localhost:9000/api/quiz/next')
      .then(res => {
        dispatch(setQuiz(res.data))
      })
      .catch(error => error.message)
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    axios.post('http://localhost:9000/api/quiz/new', answer)
      .then(res => {
        dispatch(selectAnswer(null))
        dispatch(setMessage(res.data.message))
        dispatch(fetchQuiz())
      })
      .catch(error => error.message)
  }
}
export function postQuiz(answerForm) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    axios.post('http://localhost:9000/api/quiz/answer', answerForm)
      .then(() => {
        dispatch({ type: SET_INFO_MESSAGE, payload: `Congrats: "${answerForm.question_text}" is a great question!` })
        dispatch(resetForm(null))
      })
      .catch(error => error.message)
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
