import React from 'react'
import { shallow } from 'enzyme'
import AlertDanger from '../AlertDanger'

describe('prop constraint is passed as true', () => {
    const wrapped = shallow(
        <AlertDanger constraint={true}>
            Alert message
        </AlertDanger>
    )

    it('renders a div with a text', () => {
        expect(wrapped.find('div').html()).toContain('Alert message')
    })
})

describe('prop constraint is passed as false', () => {
    const wrapped = shallow(
        <AlertDanger constraint={false}>
            Alert message
        </AlertDanger>
    )

    it('does not render any html', () => {
        expect(wrapped.find('div')).toHaveLength(0)
    })
})