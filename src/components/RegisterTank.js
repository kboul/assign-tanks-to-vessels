import React from 'react'
import { reduxForm } from "redux-form"
import PropTypes from 'prop-types'
import Input from '../common/Input'
import Select from '../common/Select'
import { inputLabels, selectLabels }
    from '../constants/tankLabels'

const RegisterTank = ({ handleSubmit, pristine, reset, submitting }) => {
    return (
        <form onSubmit={handleSubmit}>
            {inputLabels.map(({ name, label }, key) => {
                return (
                    <div key={key}>
                        <Input label={label} name={name} />
                    </div>
                )
            })}

            {selectLabels.map(({ label, name, options }, key) => {
                return (
                    <div key={key}>
                        <Select
                            label={label}
                            name={name}
                            options={options} />
                    </div>
                )
            })}

            <button
                className="btn btn-primary btn float-right"
                type="submit"
                disabled={pristine || submitting}>
                Save
            </button>

            <button
                className="btn btn-primary btn float-right mr-4"
                type="button"
                disabled={pristine || submitting}
                onClick={reset}>
                Cancel
            </button>
        </form>
    )
}

RegisterTank.propTypes = {
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
}

export default reduxForm({
    form: "registerTank",
    initialValues: {
        unimedId: '',
        cyclinderSerialNumber: '',
        cylinderSize: 'MOX-40',
        origin: 'US',
        owner: 'UNIMED'
    }
})(RegisterTank)