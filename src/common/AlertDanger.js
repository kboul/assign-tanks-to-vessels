import React from 'react'
import PropTypes from 'prop-types'

const AlertDanger = ({ flagConstraint }) => {
    if (!flagConstraint) return null

    return (
        <div className="alert alert-danger m-2">
            The selected vessel can not receive more tanks of this type
        </div>
    )
}

AlertDanger.propTypes = {
    flagConstraint: PropTypes.bool.isRequired
}

export default AlertDanger