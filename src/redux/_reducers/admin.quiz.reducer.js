import { QuizAdminConstants } from '../../constants/quiz.admin.constants';
const initialState =  {
};
export function adminQuiz(state = initialState, action) {
  switch (action.type) {

    case QuizAdminConstants.CREATE_QUIZ_REQUEST:
      return {
        loading: true,
      };
    case QuizAdminConstants.CREATE_QUIZ_SUCCESS:
      return {
        items: action.quiz
      };
    case QuizAdminConstants.CREATE_QUIZ_FAILURE:
      return { 
        error: action.error
      };
    case QuizAdminConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case QuizAdminConstants.GETALL_SUCCESS:
      return {
        items: action.quizs
      };
    case QuizAdminConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case QuizAdminConstants.DELETE_REQUEST:
      // add 'deleting:true' property to quiz being deleted
      return {
        ...state,
        items: state.items.map(quiz =>
          quiz.id === action.id
            ? { ...quiz, deleting: true }
            : quiz
        )
      };
    case QuizAdminConstants.DELETE_SUCCESS:
      // remove deleted quiz from state
      return {
        items: state.items.filter(quiz => quiz.id !== action.id)
      };
    case QuizAdminConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to quiz 
      return {
        ...state,
        items: state.items.map(quiz => {
          if (quiz.id === action.id) {
            // make copy of quiz without 'deleting:true' property
            const { deleting, ...quizCopy } = quiz;
            // return copy of quiz with 'deleteError:[error]' property
            return { ...quizCopy, deleteError: action.error };
          }

          return quiz;
        })
      };
    default:
      return state
  }
}