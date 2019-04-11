/**
 * find which tanks have equal vessel flag
 * 
 * @param {*} tanks <Tanks>
 * @param {*} flag string
 * @param {*} cylinderCize string
 */

export const oxygenTanksPerFlag = (tanks, flag, cylinderCize) => {
    return tanks.filter(tank => tank.flag === flag
        && tank.cylinderSize === cylinderCize).length
}