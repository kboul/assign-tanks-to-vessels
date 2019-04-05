import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { vesselList } from '../constants/vessels'
import { selectVesselGrid } from '../redux-local/actions'

const VesselList = ({ selectVesselGrid }) => {
    return (
        <div className="mt-4 mb-4">
            <h4 >Vessel List</h4>
            <table className="table mt-2" id="tanksTable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Flag</th>
                    </tr>
                </thead>
                <tbody>
                    {vesselList.map(({ name, flag }, key) => {
                        return (
                            <tr
                                key={key}
                                onClick={() => selectVesselGrid(name)}>
                                <td>{name}</td>
                                <td>{flag}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

VesselList.propTypes = {
    selectVesselGrid: PropTypes.func.isRequired
}

export default connect(null, {
    selectVesselGrid
})(VesselList)