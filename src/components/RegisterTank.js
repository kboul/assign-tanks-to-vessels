import React from 'react'
import { reduxForm } from "redux-form"
import Input from '../common/Input'
import Select from '../common/Select'
import { inputLabels, selectLabels }
    from '../constants/tankLabels'

const RegisterTank = ({ handleSubmit }) => {
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
        </form>
    )
}

export default reduxForm({
    form: "registerTank",
    initialValues: {
        unimedIn: '',
        cyclinderSerialNumber: '',
        cylinderSize: 'MOX-40',
        origin: 'US',
        owner: 'UNIMED'
    }
})(RegisterTank)