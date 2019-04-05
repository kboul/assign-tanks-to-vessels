import { TYPES } from '../actions/types'

const initialState = {
    registeredTanks: [],
    selectedTank: {},
    selectedVesselFromList: ''
}

function tanksReducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.REGISTER_TANK:
            // if a tank has same unimedId with an existing one 
            // don't store it and return current registeredTanks state
            const tankHasSameIdWithExisting = state.registeredTanks
                .filter(tank => tank.unimedId === action.tank.unimedId)

            if (tankHasSameIdWithExisting.length > 0) {
                return {
                    ...state,
                    registeredTanks: [
                        ...state.registeredTanks
                    ]
                }
            }

            // otherwise return the previous state plus the
            // registered new tank
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
        case TYPES.SELECTED_TANK:
            return {
                ...state,
                selectedTank: {
                    ...action.tank
                }
            }
        case TYPES.ASSIGN_TANK_TO_VESSEL:
            // find the array index which contains the tank to assign vessel
            let index
            state.registeredTanks.forEach(tank => {
                if (tank.unimedId === state.selectedTank.unimedId) {
                    index = state.registeredTanks
                        .findIndex(tank => tank.unimedId === state.selectedTank.unimedId)
                }
            })

            // update the specific tank object instance
            //  by maintaining it & injecting the vessel name
            const tankObjectWithVessel = state.registeredTanks[index] = {
                ...state.registeredTanks[index],
                vessel: action.vessselName
            }

            // remove the previous tank object instance
            const removePreviousTankObject = state.registeredTanks.slice(0, index)

            return {
                ...state,
                registeredTanks: [
                    ...removePreviousTankObject,
                    tankObjectWithVessel
                ]
            }
        case TYPES.SELECT_FROM_VESSEL_LIST:
            return {
                ...state,
                selectedVesselFromList: action.vessel
            }
        default:
            return state
    }
}

export default tanksReducer