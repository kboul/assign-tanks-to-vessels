import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import modalReducer from './modalReducer'
import tanksReducer from './tanksReducer'

const rootReducer = combineReducers({
    form: formReducer,
    modal: modalReducer,
    tanks: tanksReducer,
})

export default rootReducer