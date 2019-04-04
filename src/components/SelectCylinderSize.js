import React from 'react'
import { reduxForm } from "redux-form"
import PropTypes from 'prop-types'
import Select from '../common/Select'
import { selectLabels } from '../constants/tankLabels'

const SelectCylinderSize = ({ handleSubmit, submitting }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Select
                label={'Select Cylinder Size'}
                name={'selectCylinderSize'}
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

SelectCylinderSize.propTypes = {
    submitting: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
    form: "selectCylinderSize",
    initialValues: {
        selectCylinderSize: 'MOX-40'
    }
})(SelectCylinderSize)