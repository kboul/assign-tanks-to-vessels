import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { allLabels } from '../constants/tankLabels'
import {
    toggleModalToAssignVessel, selectCylinderSize,
    populateVesselGridTanks
} from '../redux-local/actions'
import ModalComp from '../common/ModalComp'
import '../styles/TankList.css'
import SelectCylinderSize from './SelectCylinderSize'

const displayNumberOfTanks = tanks => {
    if (tanks.length === 1)
        return 'There is 1 registered tank.'
    return `There are ${tanks.length} registered tanks.`
}

const TankList = ({ registeredTanks, cylinderSize,
    modal: { isModalToAssignVesselVisible },
    toggleModalToAssignVessel, selectCylinderSize,
    populateVesselGridTanks }) => {

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
                        <th>Assign Tank</th>
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
                                                // toggleModalToAssignVessel()
                                                console.log(tank)
                                                populateVesselGridTanks(tank)
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
                header={'Assign Tanks To Vessels Grid'}
                modal={isModalToAssignVesselVisible}
                toggle={() => toggleModalToAssignVessel()}>
                <SelectCylinderSize onSubmit={() => {
                    toggleModalToAssignVessel()
                    selectCylinderSize(cylinderSize)
                }} />
            </ModalComp>
        </React.Fragment>
    )
}

TankList.propTypes = {
    registeredTanks: PropTypes.array.isRequired,
    modal: PropTypes.objectOf(Boolean).isRequired,
    cylinderSize: PropTypes.object,
    toggleModalToAssignVessel: PropTypes.func.isRequired,
    selectCylinderSize: PropTypes.func.isRequired,
    populateVesselGridTanks: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    registeredTanks: state.tanks.registeredTanks,
    modal: state.modal,
    cylinderSize: state.form.selectCylinderSize,
})

export default connect(mapStateToProps, {
    toggleModalToAssignVessel,
    selectCylinderSize,
    populateVesselGridTanks
})(TankList)