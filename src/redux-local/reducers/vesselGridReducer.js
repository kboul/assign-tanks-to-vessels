import { TYPES } from '../actions/types'

const initialState = {
    cylinderSize: '',
    tanks: [
        { unimedId: "12345", cyclinderSerialNumber: "999991", cylinderSize: "MOX-40", origin: "US", owner: "UNIMED" },
        { unimedId: "3456", cyclinderSerialNumber: "999991", cylinderSize: "MOX-10", origin: "US", owner: "UNIMED" },
        { unimedId: "46567", cyclinderSerialNumber: "343434", cylinderSize: "MOX-10", origin: "Greece", owner: "UNIMED" }
    ]
}

function vesselGridReducer(state = initialState, action) {
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

export default vesselGridReducer