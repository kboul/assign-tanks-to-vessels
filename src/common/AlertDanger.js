import React from 'react'
import PropTypes from 'prop-types'

const AlertDanger = ({ constraint, alertMessage }) => {
    if (!constraint) return null

    return (
        <div className="alert alert-danger m-2">
            {alertMessage}
        </div>
    )
}

AlertDanger.propTypes = {
    constraint: PropTypes.bool.isRequired,
    alertMessage: PropTypes.string.isRequired
}

export default AlertDanger