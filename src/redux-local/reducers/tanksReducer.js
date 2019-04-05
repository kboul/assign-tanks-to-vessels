import { TYPES } from '../actions/types'

const initialState = {
    registeredTanks: []
}

function tanksReducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.REGISTER_TANK:
            // if tank has same unimedId with another one don't store it
            const checkIfTankHasSameId = state.registeredTanks
                .filter(tank => tank.unimedId === action.tank.unimedId)

            if (checkIfTankHasSameId.length > 0) {
                return {
                    ...state,
                    registeredTanks: [
                        ...state.registeredTanks
                    ]
                }
            }

            return {
                ...state,
                registeredTanks: [
                    ...state.registeredTanks,
                    { ...action.tank }
                ]
            }
        case TYPES.REMOVE_TANK_FROM_REGISTERED:
            const tanks = state.registeredTanks
                .filter(tank => tank.unimedId === action.unimedId)
            return {
                ...state,
                registeredTanks: [...tanks]
            }
        default:
            return state
    }
}

export default tanksReducer