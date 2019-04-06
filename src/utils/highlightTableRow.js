/**
 * 
 * @param {*} rowIndex number
 * @param {*} currentIndex number
 */

export const hightlightTableRow = (rowIndex, currentIndex) => {
    return {
        cursor: 'pointer',
        backgroundColor: rowIndex === currentIndex ? '#2196F3' : '',
        color: rowIndex === currentIndex ? '#ffffff' : ''
    }
}