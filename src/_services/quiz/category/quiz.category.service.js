import config from '../../../config';
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
    return fetch(`${config.apiUrl}${UrlConstants.ADMIN.GET_QUIZ_CATEGORY}`, requestOptions)
        .then(handleResponse)
        .then(response => {
            return response;
        });
}
