import React from 'react'
import { mount } from 'enzyme'
import Rout from '../../Rout'
import RegisterTank from '../RegisterTank'
import Input from '../../common/Input'
import Select from '../../common/Select'

let wrapped

beforeEach(() => {
    wrapped = mount(
        <Rout>
            <RegisterTank />
        </Rout>
    )
})

it('contains <Input />', () => {
    expect(wrapped.find(Input)).toBeDefined()
})

it('contains <Select />', () => {
    expect(wrapped.find(Select)).toBeDefined()
})

it('contains two buttons whci have a disabled prop', () => {
    expect(wrapped.find('button')).toHaveLength(2)
    wrapped.find('button').forEach(button => {
        expect(button.prop('disabled')).toBeTruthy()
    })
})