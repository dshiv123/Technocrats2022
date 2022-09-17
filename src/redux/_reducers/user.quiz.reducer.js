import { QuizUserConstants } from '../../constants/quiz.user.constants';
const initialState =  {
};
export function userQuiz(state = initialState, action) {
  switch (action.type) {

    case QuizUserConstants.GET_QUIZ_REQUEST:
      return {
        loading: true,
      };
    case QuizUserConstants.GET_QUIZ_SUCCESS:
      return {
        items: action.quiz
      };
    case QuizUserConstants.GET_QUIZ_FAILURE:
      return { 
        error: action.error
      };
    
    default:
      return state
  }
}