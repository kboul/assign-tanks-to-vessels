import { TYPES } from './types'

export const toggleModal = () => ({
    type: TYPES.TOGGLE_MODAL
})

export const registerTank = tank => ({
    type: TYPES.REGISTER_TANK,
    tank
})