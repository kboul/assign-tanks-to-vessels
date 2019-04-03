import { TYPES } from '../actions/types'

const initialState = {
    registeredTanks: []
}

function tanksReducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.REGISTER_TANK:
            return {
                ...state,
                registeredTanks: [
                    ...state.registeredTanks,
                    { ...action.tank }
                ]
            }
        default:
            return state
    }
}

export default tanksReducer