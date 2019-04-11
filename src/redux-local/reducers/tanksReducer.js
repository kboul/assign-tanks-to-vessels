import { TYPES } from '../actions/types'
import { assignFlagToVessel } from '../../utils/assignFlagToVessel'
import { oxygenTanksPerFlag } from '../../utils/oxygenTanksPerFlag'

const initialState = {
    registeredTanks: [],
    selectedTank: {},
    selectedVessel: '',
    flagConstraint: false,
    tankWithSameId: false
}

function tanksReducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.REGISTER_TANK:
            // revert tankWithSameId message
            state.tankWithSameId = false
            // revert constraint message
            state.flagConstraint = false

            // if a tank has same unimedId with an existing one 
            // don't store it and return current registeredTanks state
            const tankHasSameIdWithExisting = state.registeredTanks
                .filter(tank => tank.unimedId === action.tank.unimedId)

            if (tankHasSameIdWithExisting.length > 0) {
                // display tankWithSameId message 
                state.tankWithSameId = true
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
        case TYPES.SELECT_TANK:
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
            // revert tankWithSameId message
            state.tankWithSameId = false

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
            const greeceMox40 = oxygenTanksPerFlag(tanks, 'Greece', 'MOX-40')
            const greeceMox10 = oxygenTanksPerFlag(tanks, 'Greece', 'MOX-10')
            const greeceMox5 = oxygenTanksPerFlag(tanks, 'Greece', 'MOX-5')
            const greeceMox2 = oxygenTanksPerFlag(tanks, 'Greece', 'MOX-2')

            const maltaMox40 = oxygenTanksPerFlag(tanks, 'Malta', 'MOX-40')
            const maltaMox10 = oxygenTanksPerFlag(tanks, 'Malta', 'MOX-10')
            const maltaMox5 = oxygenTanksPerFlag(tanks, 'Malta', 'MOX-5')
            const maltaMox2 = oxygenTanksPerFlag(tanks, 'Malta', 'MOX-2')

            const netherlandsMox40 = oxygenTanksPerFlag(tanks, 'Netherlands', 'MOX-40')
            const netherlandsMox10 = oxygenTanksPerFlag(tanks, 'Netherlands', 'MOX-10')
            const netherlandsMox5 = oxygenTanksPerFlag(tanks, 'Netherlands', 'MOX-5')
            const netherlandsMox2 = oxygenTanksPerFlag(tanks, 'Netherlands', 'MOX-2')

            const denmarkMox40 = oxygenTanksPerFlag(tanks, 'Denmark', 'MOX-40')
            const denmarkMox10 = oxygenTanksPerFlag(tanks, 'Denmark', 'MOX-10')
            const denmarkMox5 = oxygenTanksPerFlag(tanks, 'Denmark', 'MOX-5')
            const denmarkMox2 = oxygenTanksPerFlag(tanks, 'Denmark', 'MOX-2')

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
        case TYPES.SELECT_VESSEL:
            return {
                ...state,
                selectedVessel: action.vessel
            }
        default:
            return state
    }
}

export default tanksReducer