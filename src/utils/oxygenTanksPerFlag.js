// find which tanks have equal vessel flag
export const oxygenTankPerFlag = (tanks, flag, cylinderCize) => {
    return tanks.filter(tank => tank.flag === flag
        && tank.cylinderSize === cylinderCize).length
}