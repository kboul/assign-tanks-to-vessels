import { TYPES } from "../../actions/types"
import tanksReducer from "../tanksReducer"

describe('modal reducer', () => {
    it('should return the initial state', () => {
        expect(tanksReducer(undefined, {})).toEqual(
            {
                registeredTanks: [],
                selectedTank: {},
                selectedVesselFromList: '',
                flagConstraint: false,
                tankWithSameId: false
            }
        )
    })

    it('should handle REGISTER_TANK', () => {
        // console.log(tanksReducer(undefined, { type: TYPES.SELECT_FROM_VESSEL_LIST, selectedVesselFromList: 'Astoria' }))

        // it('should handle ADD_TODO', () => {
        //     expect(
        //         reducer([], {
        //             type: types.ADD_TODO,
        //             text: 'Run the tests'
        //         })
        //     ).toEqual(
        //         {
        //             text: 'Run the tests',
        //             completed: false,
        //             id: 0
        //         }
        //     )
        // })
    })
})