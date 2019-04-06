import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Accordion from '../common/Accordion'
import {
    selectLabels, allLabelsAbbreviation
} from '../constants/tankLabels'

const tableHeadStyle = { fontSize: '16px' }

const VesselsGrid = ({ tanks: { registeredTanks, selectedVesselFromList } }) => {
    if (registeredTanks.length === 0) return null

    return (
        <div className="mt-4">
            <h4>Vessels Grid</h4>
            {selectLabels[0].options.map((selectLabel, key) => {
                return (
                    <Accordion key={key} header={selectLabel}>
                        <table className="table">
                            <thead style={tableHeadStyle}>
                                <tr>
                                    {allLabelsAbbreviation.map((label, key) => {
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
                            </tbody>
                        </table>
                    </Accordion>
                )
            })}
        </div>
    )
}

VesselsGrid.propTypes = {
    tanks: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    tanks: state.tanks
})

export default connect(mapStateToProps)(VesselsGrid)