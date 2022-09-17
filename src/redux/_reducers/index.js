import { combineReducers } from 'redux';
import { alert } from './alert.reducer';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { test } from './test.reducer';
import { adminQuiz } from './admin.quiz.reducer';
import { userQuiz } from './user.quiz.reducer';
import { quizCategory } from './quiz.category.reducer';
export default combineReducers({  
    alert,  
    authentication,
    registration,
    users,
    test,
    adminQuiz,
    userQuiz,
    quizCategory
  })  