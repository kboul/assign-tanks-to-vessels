
import { displayNumberOfTanks } from '../displayNumberOfTanks'

const tank = [{
    unimedId: "666",
    cyclinderSerialNumber: "6",
    cylinderSize: "MOX-40",
    origin: "US",
    owner: "UNIMED"
}]

const tanks = [{
    unimedId: "666",
    cyclinderSerialNumber: "6",
    cylinderSize: "MOX-40",
    origin: "US",
    owner: "UNIMED"
},
{
    unimedId: "123",
    cyclinderSerialNumber: "123",
    cylinderSize: "MOX-5",
    origin: "US",
    owner: "UNIMED"
}]

it('returns the appropriate message when there is only one registered tank', () => {
    expect(displayNumberOfTanks(tank)).toEqual('There is 1 registered tank.')
})

it('returns the appropriate message when there is more than one registered tanks', () => {
    expect(displayNumberOfTanks(tanks)).toEqual(`There are ${tanks.length} registered tanks.`)
})