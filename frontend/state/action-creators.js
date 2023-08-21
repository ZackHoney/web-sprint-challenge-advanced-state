import { INPUT_CHANGE, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, RESET_FORM, SET_INFO_MESSAGE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER } from "./action-types"
import axios from "axios"

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise(index) {
  return {
    type: MOVE_CLOCKWISE,
    payload: index,
  };
}

export function moveCounterClockwise(index) {
  return {
    type: MOVE_COUNTERCLOCKWISE,
    payload: index,
  };
}

export function selectAnswer(answer_id) {
  return {
    type: SET_SELECTED_ANSWER,
    payload: answer_id,
  };
}

export const setQuiz = (quiz) => ({
  type: SET_QUIZ_INTO_STATE,
  payload: quiz,
});

export const setMessage = (message) => ({
  type: SET_INFO_MESSAGE,
  payload: message,
});

export const inputChange = (input_id, value) => ({
  type: INPUT_CHANGE,
  payload: { input_id, value },
});

export const resetForm = () => ({
  type: RESET_FORM,
});

export const fetchQuiz = () => (dispatch) => {
  axios
    .get("http://localhost:9000/api/quiz/next")
    .then((res) => {
      dispatch(setQuiz(res.data));
    })
    .catch((err) => console.error(err));
};

export const postAnswer = (answer) => (dispatch) => {
  axios
    .post("http://localhost:9000/api/quiz/answer", answer)
    .then((res) => {
      dispatch(setMessage(res.data.message));
      dispatch(fetchQuiz());
      dispatch(selectAnswer(null));
    })
    .catch((err) => console.error(err));
};

export const postQuiz = (answerForm) => (dispatch) => {
  axios.post("http://localhost:9000/api/quiz/new", answerForm).then(() => {
    dispatch({
      type: SET_INFO_MESSAGE,
      payload: `Congrats: "${answerForm.question_text}" is a great question!`,
    });
    dispatch(resetForm());
  });
};
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
