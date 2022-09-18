import Api from '../../../_helpers/api';
import { authHeader } from '../../../_helpers/auth-header';
import handleResponse from '../../../_helpers/handle.response';
import { UrlConstants } from '../../../constants/url.constants';

export const quizQuestionService = {
    getQuestion,

};

function getQuestion(code) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return Api.get(`${UrlConstants.ADMIN.GET_QUIZ_QUESTION}`,{})
        .then(handleResponse)
        .then(response => {
            return response;
        });
}


