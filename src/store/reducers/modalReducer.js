import { TYPES } from '../actions/types'

const initialState = {
    isModalToRegisterTankVisible: false,
    isModalToAssignTankToVesselVisible: false
}

function modalReducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.TOGGLE_MODAL_TO_REGISTER_TANK:
            return {
                ...state,
                isModalToRegisterTankVisible: !state.isModalToRegisterTankVisible
            }
        case TYPES.TOGGLE_MODAL_TO_ASSIGN_TANK_TO_VESSEL:
            return {
                ...state,
                isModalToAssignTankToVesselVisible: !state.isModalToAssignTankToVesselVisible
            }
        default:
            return state
    }
}

export default modalReducer