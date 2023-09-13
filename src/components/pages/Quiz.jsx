/* eslint-disable no-unused-vars */
import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import useQuestions from "../../hooks/useQuestionList";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const initializeState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });

      return action.value;

    case "answer":
      // eslint-disable-next-line no-case-declarations
      const questions = _.cloneDeep(state);
      questions[action.questionsId].options[action.optionIndex].checked =
        action.value;
      return questions;
    default:
      return state;
  }
};

const Quiz = () => {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initializeState);
  const navigate = useNavigate();

  const { currentUser } = useAuth();

  useEffect(() => {
    dispatch({ type: "questions", value: questions });
  }, [questions]);

  const handleAnswerChanged = (e, index) => {
    dispatch({
      type: "answer",
      questionsId: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  function nextQuestion() {
    console.log("next");
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  }

  function prevQuestions() {
    if (currentQuestion >= 1 && currentQuestion < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  }

  async function SubmitQuestion() {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    navigate(`/result/${id}`, { state: { qna: qna } });
  }

  //calculate percentage of progress
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;
  return (
    <div>
      {loading && <div>Loading ...</div>}
      {error && <div>There was an error</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>

          <Answers
            input={true}
            options={qna[currentQuestion].options}
            handleChanged={handleAnswerChanged}
          />
          <ProgressBar
            next={nextQuestion}
            prev={prevQuestions}
            submit={SubmitQuestion}
            progress={percentage}
          />
          <MiniPlayer />
        </>
      )}
    </div>
  );
};

export default Quiz;
