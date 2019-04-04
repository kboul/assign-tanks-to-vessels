import { TYPES } from '../actions/types'

const initialState = {
    isModalVisibleToRegisterTank: false,
    isModalToAssignVesselVisible: false
}

function modalReducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.TOGGLE_MODAL_TO_REGISTER_TANK:
            return {
                ...state,
                isModalVisibleToRegisterTank: !state.isModalVisibleToRegisterTank
            }
        case TYPES.TOGGLE_MODAL_TO_ASSIGN_VESSEL:
            return {
                ...state,
                isModalToAssignVesselVisible: !state.isModalToAssignVesselVisible
            }
        default:
            return state
    }
}

export default modalReducer