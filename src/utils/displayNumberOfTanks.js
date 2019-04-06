/**
 * 
 * @param {*} tanks <Tanks>
 */

export const displayNumberOfTanks = tanks => {
    if (tanks.length === 1)
        return 'There is 1 registered tank.'
    return `There are ${tanks.length} registered tanks.`
}