import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import modalReducer from './modalReducer'

const rootReducer = combineReducers({
    form: formReducer,
    modal: modalReducer
})

export default rootReducer