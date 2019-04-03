import { TYPES } from '../actions/types'

const initialState = {
    isModalVisible: false
}

function modalReducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.TOGGLE_MODAL:
            return {
                ...state,
                isModalVisible: !state.isModalVisible
            }
        default:
            return state
    }
}

export default modalReducer