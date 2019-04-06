import { TYPES } from '../actions/types'
import { assignFlagToVessel } from '../../utils/assignFlagToVessel'
import { oxygenTankPerFlag } from '../../utils/oxygenTanksPerFlag'

const initialState = {
    registeredTanks: [],
    selectedTank: {},
    selectedVesselFromList: '',
    flagConstraint: false
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
            // store tanks to a shorter variable
            const tanks = state.registeredTanks
            // revert constraint message
            state.flagConstraint = false

            // find the array index which contains the tank to assign vessel
            let index
            tanks.forEach(tank => {
                if (tank.unimedId === state.selectedTank.unimedId) {
                    index = tanks
                        .findIndex(tank => tank.unimedId === state.selectedTank.unimedId)
                }
            })

            // update the specific tank object instance
            // by spreading it in the array & injecting 
            // the vessel name
            const tankToAssignVessel = tanks[index] = {
                ...tanks[index],
                vessel: action.vesselName,
                flag: assignFlagToVessel(action.vesselName)
            }

            // collect all remaining tank objects apart 
            // from the one that was previously modified
            const deriveRestOfTanks = tanks
                .filter(tank => tank.unimedId !== tanks[index].unimedId)

            // apply cylinder type constraints per vessel flag 
            const greeceMox40 = oxygenTankPerFlag(tanks, 'Greece', 'MOX-40')
            const greeceMox10 = oxygenTankPerFlag(tanks, 'Greece', 'MOX-10')
            const greeceMox5 = oxygenTankPerFlag(tanks, 'Greece', 'MOX-5')
            const greeceMox2 = oxygenTankPerFlag(tanks, 'Greece', 'MOX-2')

            const maltaMox40 = oxygenTankPerFlag(tanks, 'Malta', 'MOX-40')
            const maltaMox10 = oxygenTankPerFlag(tanks, 'Malta', 'MOX-10')
            const maltaMox5 = oxygenTankPerFlag(tanks, 'Malta', 'MOX-5')
            const maltaMox2 = oxygenTankPerFlag(tanks, 'Malta', 'MOX-2')

            const netherlandsMox40 = oxygenTankPerFlag(tanks, 'Netherlands', 'MOX-40')
            const netherlandsMox10 = oxygenTankPerFlag(tanks, 'Netherlands', 'MOX-10')
            const netherlandsMox5 = oxygenTankPerFlag(tanks, 'Netherlands', 'MOX-5')
            const netherlandsMox2 = oxygenTankPerFlag(tanks, 'Netherlands', 'MOX-2')

            const denmarkMox40 = oxygenTankPerFlag(tanks, 'Denmark', 'MOX-40')
            const denmarkMox10 = oxygenTankPerFlag(tanks, 'Denmark', 'MOX-10')
            const denmarkMox5 = oxygenTankPerFlag(tanks, 'Denmark', 'MOX-5')
            const denmarkMox2 = oxygenTankPerFlag(tanks, 'Denmark', 'MOX-2')

            if (greeceMox40 > 2 || greeceMox10 > 4 || greeceMox5 > 2 || greeceMox2 > 2
                || maltaMox40 > 1 || maltaMox10 > 2 || maltaMox5 > 0 || maltaMox2 > 6
                || netherlandsMox40 > 2 || netherlandsMox10 > 2 || netherlandsMox5 > 1 || netherlandsMox2 > 3
                || denmarkMox40 > 3 || denmarkMox10 > 4 || denmarkMox5 > 2 || denmarkMox2 > 1) {
                // display constraint message
                state.flagConstraint = true
                return {
                    ...state,
                    registeredTanks: [
                        ...deriveRestOfTanks,
                        tanks[index] = {
                            ...tanks[index],
                            vessel: ''
                        }
                    ]
                }
            }

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