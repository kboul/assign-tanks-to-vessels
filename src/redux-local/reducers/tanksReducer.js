import { TYPES } from '../actions/types'
import { generateId } from '../../utils/generateId'

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
                    {
                        ...action.tank,
                        id: generateId()
                    }
                ]
            }
        default:
            return state
    }
}

export default tanksReducer