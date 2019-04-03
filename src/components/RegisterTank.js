import React from 'react'
import { reduxForm } from "redux-form"
import Input from '../common/Input'
import { inputLabels } from '../constants/tankLabels'

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
        </form>
    )
}

export default reduxForm({
    form: "registerTank"
})(RegisterTank)