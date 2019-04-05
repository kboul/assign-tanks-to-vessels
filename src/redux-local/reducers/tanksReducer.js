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
        case TYPES.REMOVE_TANK_FROM_REGISTERED:
            const tanks = state.registeredTanks
                .filter(tank => tank.id !== action.tankId)
            return {
                ...state,
                registeredTanks: [...tanks]
            }
        default:
            return state
    }
}

export default tanksReducer