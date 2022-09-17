import { QuizUserConstants } from '../../constants/quiz.user.constants';
import { userQuizService } from '../../_services/quiz/user.quiz.service';
import { alertActions } from './alert.actions';
export const adminQuizActions = {
    getQuiz
};
function getQuiz(code) {
    
    return dispatch => {
        dispatch(request({ code }));

        userQuizService.getQuiz(code)
            .then(
                quiz => { 
                    dispatch(success(quiz));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(code) { return { type: QuizUserConstants.GET_QUIZ_REQUEST, code } }
    function success(quiz) { return { type: QuizUserConstants.GET_QUIZ_SUCCESS, quiz } }
    function failure(error) { return { type: QuizUserConstants.GET_QUIZ_FAILURE, error } }
}
