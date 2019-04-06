import { vesselInfo } from '../constants/vessels'

export const assignFlagToVessel = vesselName => {
    return (vesselInfo
        .filter(vesselObj => vesselName === vesselObj.name)
        .map(vesselObj => vesselObj.flag)).join('')
}