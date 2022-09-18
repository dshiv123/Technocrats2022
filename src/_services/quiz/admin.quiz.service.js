import Api from '../../_helpers/api';
import { authHeader } from '../../_helpers/auth-header';
import handleResponse from '../../_helpers/handle.response';
import { UrlConstants } from '../../constants/url.constants';

export const adminQuizService = {
    createQuiz,
    mapQustion
    
};

function createQuiz(quiz) {
    const requestOptions = {
        method: 'POST',
        headers:  authHeader(),
        body: JSON.stringify(quiz),
    };

    return Api.post(`${UrlConstants.ADMIN.CREATE_QUIZ}`, 
    quiz
).then(handleResponse)
        .then(response => {
            return response;
        });
}



function mapQustion(mapping) {
    
    return Api.post(`${UrlConstants.ADMIN.MAP_QUIZ_QUESTION}`,mapping)
        .then(handleResponse)
        .then(response => {
            return response;
        });
}
