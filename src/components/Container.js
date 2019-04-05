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
import VesselList from './VesselList'

const Container = ({ modal: { isModalToRegisterTankVisible },
    toggleModalToRegisterTank, registerTank, tank,
    vesselGrid: { tanks } }) => {

    return (
        <div>
            <VesselList />

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

            {/* {tanks.length > 0 &&
                <div className="mt-4">
                    <h4>Vessels Grid</h4>
                    {selectLabels[0].options.map((selectLabel, key) => {
                        return (
                            <Accordion key={key} header={selectLabel}>
                                {tanks.filter(tank => tank.cylinderSize === selectLabel)
                                    .map((tank, key) => {
                                        return (
                                            <tr key={key}>
                                                <td>{tank.unimedId}</td>
                                                <td>{tank.cyclinderSerialNumber}</td>
                                                <td>{tank.cylinderSize}</td>
                                                <td>{tank.origin}</td>
                                                <td>{tank.owner}</td>
                                            </tr>
                                        )
                                    })}
                            </Accordion>
                        )
                    })}
                </div>} */}
        </div>
    )
}

Container.propTypes = {
    modal: PropTypes.objectOf(Boolean).isRequired,
    toggleModalToRegisterTank: PropTypes.func.isRequired,
    registerTank: PropTypes.func.isRequired,
    tank: PropTypes.object,
    vesselGrid: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    modal: state.modal,
    tank: state.form.registerTank,
    vesselGrid: state.vesselGrid
})

export default connect(mapStateToProps, {
    toggleModalToRegisterTank,
    registerTank
})(Container)