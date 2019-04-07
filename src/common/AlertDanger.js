import React from 'react'
import PropTypes from 'prop-types'

const AlertDanger = ({ constraint, children }) => {
    if (!constraint) return null

    return (
        <div className="alert alert-danger m-2">
            {children}
        </div>
    )
}

AlertDanger.propTypes = {
    constraint: PropTypes.bool.isRequired,
    children: PropTypes.string.isRequired
}

export default AlertDanger