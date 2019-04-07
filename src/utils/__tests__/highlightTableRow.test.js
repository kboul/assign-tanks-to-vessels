
import { hightlightTableRow } from '../highlightTableRow'

it(`has blue backgroundColor & white color in a 
    table row when rowIndex equals currentIndex`, () => {
        const sameIndexes = hightlightTableRow(1, 1)
        expect(sameIndexes.backgroundColor).toEqual('#2196F3')
        expect(sameIndexes.color).toEqual('#ffffff')
    })

it(`does not have any backgroundColor & color in 
    a table row when rowIndex equals currentIndex`, () => {
        const differentIndexes = hightlightTableRow(1, 2)
        expect(differentIndexes.backgroundColor).toEqual('')
        expect(differentIndexes.color).toEqual('')
    })