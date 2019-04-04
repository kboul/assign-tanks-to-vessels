import { TYPES } from '../actions/types'

const initialState = {
    isModalVisibleToRegisterTank: false,
}

function modalReducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.TOGGLE_MODAL_TO_REGISTER_TANK:
            return {
                ...state,
                isModalVisibleToRegisterTank: !state.isModalVisibleToRegisterTank
            }
        default:
            return state
    }
}

export default modalReducer