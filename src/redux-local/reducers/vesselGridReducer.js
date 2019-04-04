import { TYPES } from '../actions/types'

const initialState = {
    cylinderSize: '',
    tanks: []
}

function vesselGridReducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.SELECT_CYLINDER_SIZE:
            return {
                ...state,
                cylinderSize: action.cylinderSize.values.selectCylinderSize
            }

        case TYPES.POPOULATE_VESSEL_GRID_TANKS:
            return {
                ...state,
                tanks: [
                    ...state.tanks,
                    { ...action.tank }
                ]
            }
        default:
            return state
    }
}

export default vesselGridReducer