import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import modalReducer from './modalReducer'
import tanksReducer from './tanksReducer'
import assignedCylinderReducer from './assignedCylinderReducer'

const rootReducer = combineReducers({
    form: formReducer,
    modal: modalReducer,
    tanks: tanksReducer,
    assignedCylinder: assignedCylinderReducer
})

export default rootReducer