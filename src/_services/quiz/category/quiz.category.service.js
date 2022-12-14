import Api from '../../../_helpers/api';
import { authHeader } from '../../../_helpers/auth-header';
import handleResponse from '../../../_helpers/handle.response';
import { UrlConstants } from '../../../constants/url.constants';

export const quizCategoryService = {
    getCategory,

};

function getCategory(code) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return Api.get(`${UrlConstants.ADMIN.GET_QUIZ_CATEGORY}`, {})
        .then(handleResponse)
        .then(response => {
            return response;
        });
}
