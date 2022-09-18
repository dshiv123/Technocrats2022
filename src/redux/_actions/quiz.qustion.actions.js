import { QuestionAdminConstants } from '../../constants/quiz.question.constants';
import { quizQuestionService } from '../../_services/quiz/question/quiz.question.service';
import { alertActions } from './alert.actions';
export const adminQuizquestionActions = {
    getQuizquestion
};
function getQuizquestion() {
    
    return dispatch => {
        dispatch(request({  }));

        quizQuestionService.getQuestion()
            .then(
                question => { 
                    dispatch(success(question));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: QuestionAdminConstants.GETALL_QUESTION_REQUEST } }
    function success(question) { return { type: QuestionAdminConstants.GETALL_QUESTION_SUCCESS, question } }
    function failure(error) { return { type: QuestionAdminConstants.GETALL_QUESTION_FAILURE, error } }
}
