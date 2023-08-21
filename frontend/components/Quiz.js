import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectAnswer, setMessage, fetchQuiz } from '../state/action-creators';


function Quiz({ selectAnswer, setMessage, fetchQuiz, quiz, selectedAnswer }) {


  useEffect(() => { fetchQuiz(), [] })

  const onSubmit = evt => {
    evt.preventDefault()
    const answer = { quiz_id: quiz.quiz_id, selectAnswer: quiz.selectedAnswer.id}
    postAnswer(answer)
  }


  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>{quiz.quiz_id}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps, {})(Quiz)