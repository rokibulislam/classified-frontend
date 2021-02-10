import { combineReducers } from 'redux';
import authReducer from './authReducer'
import brandReducer from './brandReducer'
import categoryReducer from './categoryReducer'
import complainReducer from './complainReducer'
import packageReducer from './packageReducer'
import postReducer from './postReducer'
import tagReducer from './tagReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    brand: brandReducer,
    category: categoryReducer,
    complain: complainReducer,
    package: packageReducer,
    post: postReducer,
    tag: tagReducer,
    user: userReducer
})

export default rootReducer;