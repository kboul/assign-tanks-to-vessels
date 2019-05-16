import { TYPES } from './types'

export const toggleModalToRegisterTank = () => ({
    type: TYPES.TOGGLE_MODAL_TO_REGISTER_TANK
})

export const registerTank = tank => ({
    type: TYPES.REGISTER_TANK,
    tank
})

export const assignTankToVessel = vesselName => ({
    type: TYPES.ASSIGN_TANK_TO_VESSEL,
    vesselName
})

export const toggleModalToAssignTankToVessel = () => ({
    type: TYPES.TOGGLE_MODAL_TO_ASSIGN_TANK_TO_VESSEL
})

export const selectTank = tank => ({
    type: TYPES.SELECT_TANK,
    tank
})

export const selectVessel = vessel => ({
    type: TYPES.SELECT_VESSEL,
    vessel
})