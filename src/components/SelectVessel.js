import React from 'react'
import { reduxForm } from "redux-form"
import PropTypes from 'prop-types'
import Select from '../common/Select'
import { vessels } from '../constants/vessels';

const SelectVessel = ({ handleSubmit, submitting }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Select
                label={'Select Vessel'}
                name={'selectVessel'}
                options={vessels} />

            <button
                className="btn btn-primary btn float-right"
                type="submit"
                disabled={submitting}>
                Save
            </button>
        </form>
    )
}

SelectVessel.propTypes = {
    submitting: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
    form: "selectVessel",
    initialValues: {
        selectVessel: 'Astoria'
    }
})(SelectVessel)