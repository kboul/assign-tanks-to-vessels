import { TYPES } from '../types'
import { registerTank, toggleModalToRegisterTank } from '..'

describe('actions', () => {
    it('should create an action to add a tank', () => {
        const expectedAction = {
            type: TYPES.TOGGLE_MODAL_TO_REGISTER_TANK
        }
        expect(toggleModalToRegisterTank()).toEqual(expectedAction)
    })

    it('should create an action to add a tank', () => {
        const tank = {
            unimedId: "666",
            cyclinderSerialNumber: "6",
            cylinderSize: "MOX-40",
            origin: "US",
            owner: "UNIMED"
        }
        const expectedAction = {
            type: TYPES.REGISTER_TANK,
            tank
        }
        expect(registerTank(tank)).toEqual(expectedAction)
    })

})