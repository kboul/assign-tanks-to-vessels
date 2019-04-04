import { TYPES } from './types'

export const toggleModalToRegisterTank = () => ({
    type: TYPES.TOGGLE_MODAL_TO_REGISTER_TANK
})

export const registerTank = tank => ({
    type: TYPES.REGISTER_TANK,
    tank
})