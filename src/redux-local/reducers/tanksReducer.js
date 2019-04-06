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
            // by spreading it in the array & injecting 
            // the vessel name
            const tankToAssignVessel = state.registeredTanks[index] = {
                ...state.registeredTanks[index],
                vessel: action.vesselName
            }

            // collect all remaining tank objects apart 
            // from the one that was previously modified
            const deriveRestOfTanks = state.registeredTanks
                .filter(tank => tank.unimedId !== state.registeredTanks[index].unimedId)

            return {
                ...state,
                registeredTanks: [
                    tankToAssignVessel,
                    ...deriveRestOfTanks
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