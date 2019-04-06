import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { vesselInfo } from '../constants/vessels'
import { selectVesselGrid } from '../redux-local/actions'
import { hightlightTableRow } from '../utils/highlightTableRow'

class VesselList extends Component {
    state = {
        currentRowIndex: ''
    }

    handleChangeId = currentRowIndex => {
        this.setState({ currentRowIndex })
    }

    render() {
        const { selectVesselGrid } = this.props
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
                        {vesselInfo.map(({ name, flag }, index) => {
                            return (
                                <tr
                                    style={hightlightTableRow(index, this.state.currentRowIndex)}
                                    key={index}
                                    onClick={() => {
                                        this.handleChangeId(index)
                                        selectVesselGrid(name)
                                    }}>
                                    <td>{name}</td>
                                    <td>{flag}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <p className="text-center">
                    Select a Vessel from above table to
                    display oxygen tanks per ship.
                </p>
            </div>
        )
    }
}

VesselList.propTypes = {
    selectVesselGrid: PropTypes.func.isRequired
}

export default connect(null, {
    selectVesselGrid
})(VesselList)