import React from 'react'
import { Field } from "redux-form"
import PropTypes from 'prop-types'

const Select = ({ name, label, options }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <div className="form-group">
                <div>
                    <Field
                        className="form-control"
                        name={name}
                        component="select">
                        {options.map((opt, key) => {
                            return (
                                <option
                                    key={key}
                                    value={opt}>
                                    {opt}
                                </option>
                            )
                        })}
                    </Field>
                </div>
            </div>
        </div>
    )
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Select