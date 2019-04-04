import { TYPES } from '../actions/types'

const initialState = {
    isModalToRegisterTankVisible: false
}

function modalReducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.TOGGLE_MODAL_TO_REGISTER_TANK:
            return {
                ...state,
                isModalToRegisterTankVisible: !state.isModalToRegisterTankVisible
            }
        default:
            return state
    }
}

export default modalReducer