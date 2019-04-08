import { TYPES } from "../../actions/types"
import modalReducer from "../modalReducer"

describe('modal reducer', () => {
    it('should return the initial state', () => {
        expect(modalReducer(undefined, {})).toEqual(
            {
                isModalToRegisterTankVisible: false,
                isModalToAssignTankToVesselVisible: false
            }
        )
    })

    it('should handle TOGGLE_MODAL_TO_REGISTER_TANK', () => {
        expect(
            modalReducer(undefined, {
                type: TYPES.TOGGLE_MODAL_TO_REGISTER_TANK
            })
        ).toEqual(
            {
                isModalToRegisterTankVisible: true,
                isModalToAssignTankToVesselVisible: false
            }
        )
    })

    it('should handle TOGGLE_MODAL_TO_ASSIGN_TANK_TO_VESSEL', () => {
        expect(
            modalReducer(undefined, {
                type: TYPES.TOGGLE_MODAL_TO_ASSIGN_TANK_TO_VESSEL
            })
        ).toEqual(
            {
                isModalToRegisterTankVisible: false,
                isModalToAssignTankToVesselVisible: true
            }
        )
    })
})