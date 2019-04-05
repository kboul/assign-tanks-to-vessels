import { TYPES } from './types'

export const toggleModalToRegisterTank = () => ({
    type: TYPES.TOGGLE_MODAL_TO_REGISTER_TANK
})

export const registerTank = tank => ({
    type: TYPES.REGISTER_TANK,
    tank
})

export const removeTankFromRegistered = tank => ({
    type: TYPES.REMOVE_TANK_FROM_REGISTERED,
    tank
})

export const selectCylinderSize = cylinderSize => ({
    type: TYPES.SELECT_CYLINDER_SIZE,
    cylinderSize
})

export const populateVesselGridTanks = tank => ({
    type: TYPES.POPOULATE_VESSEL_GRID_TANKS,
    tank
})

export const assignTankToVessel = vessselName => ({
    type: TYPES.ASSIGN_TANK_TO_VESSEL,
    vessselName
})

export const toggleModalToAssignTankToVessel = () => ({
    type: TYPES.TOGGLE_MODAL_TO_ASSIGN_TANK_TO_VESSEL
})

export const selectTank = tank => ({
    type: TYPES.SELECTED_TANK,
    tank
})