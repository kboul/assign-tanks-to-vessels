import { TYPES } from '../types'
import {
    registerTank, toggleModalToRegisterTank,
    toggleModalToAssignTankToVessel,
    selectTank,
    selectVessel
} from '..'

const tank = {
    unimedId: "666",
    cyclinderSerialNumber: "6",
    cylinderSize: "MOX-40",
    origin: "US",
    owner: "UNIMED"
}

describe('actions', () => {
    it(`should create an action to toggle the 
        modal state to register a tank`, () => {
            const expectedAction = {
                type: TYPES.TOGGLE_MODAL_TO_REGISTER_TANK
            }
            expect(toggleModalToRegisterTank())
                .toEqual(expectedAction)
        })

    it('should create an action to register a tank', () => {
        const expectedAction = {
            type: TYPES.REGISTER_TANK,
            tank
        }
        expect(registerTank(tank))
            .toEqual(expectedAction)
    })
    it(`should create an action to toggle the modal 
        state to assign a tank to a vessel`, () => {
            const expectedAction = {
                type: TYPES.TOGGLE_MODAL_TO_ASSIGN_TANK_TO_VESSEL
            }
            expect(toggleModalToAssignTankToVessel())
                .toEqual(expectedAction)
        })
    it(`should create an action to select a 
        tank from registered tanks table`, () => {
            const expectedAction = {
                type: TYPES.SELECTED_TANK,
                tank
            }
            expect(selectTank(tank)).toEqual(expectedAction)
        })
    it(`should create an action to 
        select a vessel from vessel list`, () => {
            const vessel = 'Claudia'
            const expectedAction = {
                type: TYPES.SELECT_VESSEL,
                vessel
            }
            expect(selectVessel(vessel)).toEqual(expectedAction)
        })
})