import { authHeader } from '../../_helpers/auth-header';
import handleResponse from '../../_helpers/handle.response';
import { UrlConstants } from '../../constants/url.constants';
import Api from '../../_helpers/api';
export const userQuizService = {
    getQuiz,

};

function getQuiz(code) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: code ,
    };
    debugger;
    Api.post(`${UrlConstants.USER.GET_QUIZ}`, 
        code
    ).then(handleResponse)
        .then(response => {
            return response;
        });
}
