import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ModalComp from '../common/ModalComp'
import RegisterTank from './RegisterTank'
import { toggleModalToRegisterTank } from '../redux-local/actions'
import { registerTank } from '../redux-local/actions'
import TankList from './TankList'
import Accordion from '../common/Accordion'
import { selectLabels } from '../constants/tankLabels'

const Container = ({ modal: { isModalToRegisterTankVisible },
    toggleModalToRegisterTank, registerTank, tank,
    assignedCylinder: { cylinders } }) => {

    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={() => toggleModalToRegisterTank()}>
                Register Tank
            </button>

            <ModalComp
                header={'Add New Tank'}
                modal={isModalToRegisterTankVisible}
                toggle={() => toggleModalToRegisterTank()}>
                <RegisterTank onSubmit={() => {
                    toggleModalToRegisterTank()
                    registerTank(tank.values)
                }} />
            </ModalComp>

            <TankList />

            <div className="mt-4">
                <h4>Vessels Grid</h4>
                {selectLabels[0].options.map((tank, key) => {
                    return (
                        <Accordion key={key} header={tank}>
                            {cylinders.filter(cylinder => cylinder.cylinderSize === tank).map((el, key) => {
                                return <tr key={key}>
                                    <td>{el.unimedId}</td>
                                </tr>
                            })}
                        </Accordion>
                    )
                })}
            </div>
        </div>
    )
}

Container.propTypes = {
    modal: PropTypes.objectOf(Boolean).isRequired,
    toggleModalToRegisterTank: PropTypes.func.isRequired,
    registerTank: PropTypes.func.isRequired,
    tank: PropTypes.object,
    assignedCylinder: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    modal: state.modal,
    tank: state.form.registerTank,
    assignedCylinder: state.assignedCylinder
})

export default connect(mapStateToProps, {
    toggleModalToRegisterTank,
    registerTank
})(Container)