import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ModalComp from '../common/ModalComp'
import RegisterTank from './RegisterTank'
import VesselList from './VesselList'
import TankList from './TankList'
import Accordion from '../common/Accordion'
import { toggleModalToRegisterTank } from '../redux-local/actions'
import { registerTank } from '../redux-local/actions'
import { selectLabels } from '../constants/tankLabels'

const Container = ({ modal: { isModalToRegisterTankVisible },
    toggleModalToRegisterTank, registerTank, tank,
    tanks: { registeredTanks, selectedVesselFromList } }) => {

    return (
        <div className="row">
            <div className="col-md-6">
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

                <VesselList />
            </div>
            <div className="col-md-6">
                {registeredTanks.length > 0 &&
                    <div className="mt-4">
                        <h4>Vessels Grid</h4>
                        {selectLabels[0].options.map((selectLabel, key) => {
                            return (
                                <Accordion key={key} header={selectLabel}>
                                    {registeredTanks
                                        .filter(tank => tank.cylinderSize === selectLabel
                                            && tank.vessel === selectedVesselFromList)
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
                    </div>
                }
            </div>
        </div>
    )
}

Container.propTypes = {
    modal: PropTypes.objectOf(Boolean).isRequired,
    toggleModalToRegisterTank: PropTypes.func.isRequired,
    registerTank: PropTypes.func.isRequired,
    tank: PropTypes.object
}

const mapStateToProps = state => ({
    modal: state.modal,
    tank: state.form.registerTank,
    tanks: state.tanks
})

export default connect(mapStateToProps, {
    toggleModalToRegisterTank,
    registerTank
})(Container)