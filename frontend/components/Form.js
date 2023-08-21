import React from 'react'
import { connect } from 'react-redux'
import { postQuiz, inputChange } from '../state/action-creators'

export function Form({ postQuiz, inputChange, form }) {

  const onChange = evt => {
    evt.preventDefault()
    inputChange(evt.target.id, evt.target.value)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    const answerForm = { question_text: form.newQuestion, true_answer_text: form.trueAnswer, false_answer_text: form.falseAnswer }
    postQuiz(answerForm)
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} value={form.newQuestion} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} value={form.trueAnswer} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} value={form.falseAnswer} id="newFalseAnswer" placeholder="Enter false answer" />
      {/* Can you use disabled={form.value === '' } */}
      <button id="submitNewQuizBtn" disabled={form.newQuestion.trim().length <= 1 || form.trueAnswer.trim().length <= 1 || form.falseAnwer.trim().length <= 1}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    form: state.form
  }
}

export default connect(mapStateToProps, { inputChange, postQuiz })(Form)
