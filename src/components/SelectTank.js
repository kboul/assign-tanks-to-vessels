import React from 'react'
import { reduxForm } from "redux-form"
import PropTypes from 'prop-types'
import Select from '../common/Select'
import { selectLabels } from '../constants/tankLabels'

const SelectTank = ({ handleSubmit, submitting }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Select
                label={'Select Tank'}
                name={'selectTank'}
                options={selectLabels[0].options} />

            <button
                className="btn btn-primary btn float-right"
                type="submit"
                disabled={submitting}>
                Save
            </button>
        </form>
    )
}

SelectTank.propTypes = {
    submitting: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({
    form: "selectTank",
    initialValues: {
        selectTank: 'MOX-40'
    }
})(SelectTank)