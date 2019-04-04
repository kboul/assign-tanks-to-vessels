import React from 'react'
import PropTypes from 'prop-types'

const arrowStyle = { fontSize: '24px' }

const FaAngle = ({ isAccordionCollapsed }) => {
    return (
        <i className={`fa fa-angle-${!isAccordionCollapsed ? 'up' : 'down'}`}
            aria-hidden="true"
            style={arrowStyle}>
        </i>
    )
}

FaAngle.propTypes = {
    isAccordionCollapsed: PropTypes.bool.isRequired
}

export default FaAngle