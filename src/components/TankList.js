import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ModalComp from '../common/ModalComp'
import SelectVessel from './SelectVessel'
import AlertDanger from '../common/AlertDanger'
import {
    toggleModalToAssignTankToVessel,
    selectTank,
    assignTankToVessel
} from '../redux-local/actions'
import { allLabels } from '../constants/tankLabels'
import { displayNumberOfTanks } from '../utils/displayNumberOfTanks'
import '../styles/TankList.css'


const TankList = ({ tanks: { registeredTanks, flagConstraint },
    modal: { isModalToAssignTankToVesselVisible },
    toggleModalToAssignTankToVessel, selectTank,
    assignTankToVessel, vessel }) => {

    if (registeredTanks.length === 0)
        return (
            <p className="mt-2">
                No registered tanks.
            </p>
        )

    return (
        <React.Fragment>
            <h4 className="mt-4">Pool of Registered Oxygen Tanks</h4>
            <table className="table mt-2" id="tanksTable">
                <thead>
                    <tr>
                        {allLabels.map((label, key) => {
                            return (
                                <th
                                    key={key}
                                    scope="col">
                                    {label}
                                </th>
                            )
                        })}
                        <th>Assign Tank To Vessel</th>
                    </tr>
                </thead>
                <tbody>
                    {registeredTanks.map((tank, key) => {
                        return (
                            <React.Fragment key={key}>
                                <tr>
                                    <td>{tank.unimedId}</td>
                                    <td>{tank.cyclinderSerialNumber}</td>
                                    <td>{tank.cylinderSize}</td>
                                    <td>{tank.origin}</td>
                                    <td>{tank.owner}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => {
                                                console.log(tank)
                                                selectTank(tank)
                                                toggleModalToAssignTankToVessel()
                                            }}>
                                            Assign
                                        </button>
                                    </td>
                                </tr>
                            </React.Fragment>
                        )
                    })}
                </tbody>
            </table>

            <div className="m-2">
                {displayNumberOfTanks(registeredTanks)}
            </div>

            <AlertDanger flagConstraint={flagConstraint} />

            <ModalComp
                header={'Assign Tank To Vessel'}
                modal={isModalToAssignTankToVesselVisible}
                toggle={() => toggleModalToAssignTankToVessel()}>
                <SelectVessel onSubmit={() => {
                    assignTankToVessel(vessel.values.selectVessel)
                    toggleModalToAssignTankToVessel()
                }} />
            </ModalComp>
        </React.Fragment>
    )
}

TankList.propTypes = {
    tanks: PropTypes.object.isRequired,
    modal: PropTypes.objectOf(Boolean).isRequired,
    cylinderSize: PropTypes.object,
    assignTankToVessel: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    tanks: state.tanks,
    modal: state.modal,
    vessel: state.form.selectVessel
})

export default connect(mapStateToProps, {
    toggleModalToAssignTankToVessel,
    selectTank,
    assignTankToVessel
})(TankList)