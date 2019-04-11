import { oxygenTanksPerFlag } from '../oxygenTanksPerFlag'

const tanks = [{
    unimedId: "666",
    cyclinderSerialNumber: "6",
    cylinderSize: "MOX-40",
    origin: "US",
    owner: "UNIMED",
    vessel: 'Astoria',
    flag: 'Greece'
},
{
    unimedId: "123",
    cyclinderSerialNumber: "123",
    cylinderSize: "MOX-40",
    origin: "US",
    owner: "UNIMED",
    vessel: 'Jela Delta',
    flag: 'Greece'
},
{
    unimedId: "123",
    cyclinderSerialNumber: "123",
    cylinderSize: "MOX-5",
    origin: "US",
    owner: "UNIMED",
    vessel: 'Claudia',
    flag: 'Malta'
}]

it(`returns the number of registered tanks 
    that have the provided (as function arguments) 
    flag & cylinder type`, () => {
        expect(oxygenTanksPerFlag(tanks, 'Greece', 'MOX-40')).toEqual(2)
    })