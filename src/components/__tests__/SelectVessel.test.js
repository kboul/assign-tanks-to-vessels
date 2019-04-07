import React from 'react'
import { mount } from 'enzyme'
import Rout from '../../Rout'
import SelectVessel from '../SelectVessel'
import Select from '../../common/Select'

let wrapped

beforeEach(() => {
    wrapped = mount(
        <Rout>
            <SelectVessel />
        </Rout>
    )
})

it('contains <Select />', () => {
    expect(wrapped.find(Select)).toHaveLength(1)
})

it('contains <Select /> and two props are passed', () => {
    expect(wrapped.find(Select).prop('label')).toBeDefined()
    expect(wrapped.find(Select).prop('name')).toBeDefined()
})