
import { assignFlagToVessel } from '../assignFlagToVessel'

it('returns the country by providing the vessel name', () => {
    expect(assignFlagToVessel('Astoria')).toEqual('Greece')
})