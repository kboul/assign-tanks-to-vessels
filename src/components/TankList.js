import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ModalComp from '../common/ModalComp'
import SelectVessel from './SelectVessel'
import {
    selectCylinderSize,
    toggleModalToAssignTankToVessel,
    selectTank,
    assignTankToVessel
} from '../redux-local/actions'
import { allLabels } from '../constants/tankLabels'
import { displayNumberOfTanks } from '../utils/displayNumberOfTanks'
import '../styles/TankList.css'


const TankList = ({ tanks: { registeredTanks },
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
            <table className="table mt-4" id="tanksTable">
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
    selectCylinderSize: PropTypes.func.isRequired,
    assignTankToVessel: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    tanks: state.tanks,
    modal: state.modal,
    cylinderSize: state.form.selectCylinderSize,
    vessel: state.form.selectVessel
})

export default connect(mapStateToProps, {
    selectCylinderSize,
    toggleModalToAssignTankToVessel,
    selectTank,
    assignTankToVessel
})(TankList)