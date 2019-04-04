import React from 'react'
import { connect } from 'react-redux'
import { allLabels } from '../constants/tankLabels'
import { toggleModalToAssignVessel } from '../redux-local/actions'
import '../styles/TankList.css'
import ModalComp from '../common/ModalComp';

const displayNumberOfTanks = tanks => {
    if (tanks.length === 1)
        return 'There is 1 registered tank.'
    return `There are ${tanks.length} registered tanks.`
}

const TankList = ({ registeredTanks,
    modal: { isModalToAssignVesselVisible }, toggleModalToAssignVessel }) => {

    if (registeredTanks.length === 0)
        return (
            <p className="mt-2">
                No registered tanks.
            </p>
        )

    return (
        <React.Fragment>
            <table className="table col-6 mt-4" id="tanksTable">
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
                    {registeredTanks.map(({ unimedId, cyclinderSerialNumber,
                        cylinderSize, origin, owner }, key) => {
                        return (
                            <React.Fragment key={key}>
                                <tr>
                                    <td>{unimedId}</td>
                                    <td>{cyclinderSerialNumber}</td>
                                    <td>{cylinderSize}</td>
                                    <td>{origin}</td>
                                    <td>{owner}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => toggleModalToAssignVessel()}>
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
                <div>new content</div>
            </ModalComp>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    registeredTanks: state.tanks.registeredTanks,
    modal: state.modal
})

export default connect(mapStateToProps, {
    toggleModalToAssignVessel
})(TankList)