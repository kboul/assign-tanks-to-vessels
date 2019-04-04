import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import modalReducer from './modalReducer'
import tanksReducer from './tanksReducer'
import vesselGridReducer from './vesselGridReducer'

const rootReducer = combineReducers({
    form: formReducer,
    modal: modalReducer,
    tanks: tanksReducer,
    vesselGrid: vesselGridReducer
})

export default rootReducer