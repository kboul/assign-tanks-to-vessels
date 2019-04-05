import { TYPES } from './types'

export const toggleModalToRegisterTank = () => ({
    type: TYPES.TOGGLE_MODAL_TO_REGISTER_TANK
})

export const registerTank = tank => ({
    type: TYPES.REGISTER_TANK,
    tank
})

export const removeTankFromRegistered = tankId => ({
    type: TYPES.REMOVE_TANK_FROM_REGISTERED,
    tankId
})

export const selectCylinderSize = cylinderSize => ({
    type: TYPES.SELECT_CYLINDER_SIZE,
    cylinderSize
})

export const populateVesselGridTanks = tank => ({
    type: TYPES.POPOULATE_VESSEL_GRID_TANKS,
    tank
})