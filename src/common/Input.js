import React from 'react'
import { Field } from "redux-form"
import PropTypes from 'prop-types'

const renderField = ({ input }) => {
    return (
        <input
            className='form-control'
            {...input}
            type='text' />
    )
}

const Input = ({ name, label }) => {
    return (
        <div>
            <label><b>{label}</b></label>
            <div className="form-group">
                <Field
                    name={name}
                    component={renderField}
                    type="text"
                />
            </div>
        </div>
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default Input