import React from 'react'
import { mount } from 'enzyme'
import Rout from '../../Rout'
import Container from '../Container'
import VesselList from '../VesselList'
import VesselsGrid from '../VesselsGrid'
import TankList from '../TankList'

let wrapped

beforeEach(() => {
    wrapped = mount(
        <Rout>
            <Container />
        </Rout>
    )

})

it('contains <TankList />', () => {
    expect(wrapped.find(TankList)).toHaveLength(1)
})

it('contains <VesselList />', () => {
    expect(wrapped.find(VesselList)).toHaveLength(1)
})

it('contains <VesselsGrid />', () => {
    expect(wrapped.find(VesselsGrid)).toHaveLength(1)
})