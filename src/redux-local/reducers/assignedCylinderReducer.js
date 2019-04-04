import { TYPES } from '../actions/types'

const initialState = {
    cylinderSize: ''
}

function assignedCylinderReducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.SELECT_CYLINDER_SIZE:
            return {
                ...state,
                cylinderSize: action.cylinderSize.values.selectCylinderSize
            }
        default:
            return state
    }
}

export default assignedCylinderReducer