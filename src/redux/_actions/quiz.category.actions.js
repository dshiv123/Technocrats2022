import { CategoryAdminConstants } from '../../constants/quiz.category.constants';
import { quizCategoryService } from '../../_services/quiz/category/quiz.category.service';
import { alertActions } from './alert.actions';
export const adminQuizCategoryActions = {
    getQuizCategory
};
function getQuizCategory() {
    
    return dispatch => {
        dispatch(request({  }));

        quizCategoryService.getCategory()
            .then(
                category => { 
                    dispatch(success(category));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: CategoryAdminConstants.GETALL_CATEGORY_REQUEST } }
    function success(category) { return { type: CategoryAdminConstants.GETALL_CATEGORY_SUCCESS, category } }
    function failure(error) { return { type: CategoryAdminConstants.GETALL_CATEGORY_FAILURE, error } }
}
