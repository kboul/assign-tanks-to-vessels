import React from 'react'
import { vesselList } from '../constants/vessels'

const VesselList = () => {
    return (
        <React.Fragment>
            <h4 className="mt-4">Vessel List</h4>
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
                            <tr key={key}>
                                <td>{name}</td>
                                <td>{flag}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default VesselList