import React from 'react'
import { connect } from 'react-redux'
import { allLabels } from '../constants/tankLabels'
import '../styles/TankList.css'

const TankList = ({ registeredTanks }) => {
    console.log(registeredTanks)
    return (
        <table className="table col-6 mt-4">
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
                </tr>
            </thead>
            <tbody>
                {registeredTanks.map(({ unimedId, cyclinderSerialNumber,
                    cylinderSize, origin, owner }, key) => {
                    return (
                        <React.Fragment key={key}>
                            <tr>
                                <td>{unimedId}</td>
                                <td>{cylinderSize}</td>
                                <td>{cyclinderSerialNumber}</td>
                                <td>{origin}</td>
                                <td>{owner}</td>
                            </tr>
                        </React.Fragment>
                    )
                })}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({
    registeredTanks: state.tanks.registeredTanks
})

export default connect(mapStateToProps)(TankList)