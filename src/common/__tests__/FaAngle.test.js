import React from 'react'
import { shallow } from 'enzyme'
import FaAngle from '../FaAngle'

describe('prop isAccordionCollapsed is passed as true', () => {
    const wrapped = shallow(
        <FaAngle isAccordionCollapsed={true} />
    )

    it('contains fa-angle-down class', () => {
        expect(wrapped.find('i').prop('className'))
            .toContain('fa-angle-down')
    })
})

describe('prop isAccordionCollapsed is passed as false', () => {
    const wrapped = shallow(
        <FaAngle isAccordionCollapsed={false} />
    )

    it('contains fa-angle-up class', () => {
        expect(wrapped.find('i').prop('className'))
            .toContain('fa-angle-up')
    })
})