import { TYPES } from '../actions/types'

const initialState = {
    cylinderSize: '',
    cylinders: [
        { unimedId: "12345", cyclinderSerialNumber: "999991", cylinderSize: "MOX-40", origin: "US", owner: "UNIMED" },
        { unimedId: "3456", cyclinderSerialNumber: "999991", cylinderSize: "MOX-10", origin: "US", owner: "UNIMED" }

    ]
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