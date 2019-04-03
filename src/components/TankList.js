import React from 'react'
import { connect } from 'react-redux'

const TankList = ({ registeredTanks }) => {
    console.log(registeredTanks)
    return (
        <div>Tank List</div>
    )
}

const mapStateToProps = state => ({
    registeredTanks: state.tanks.registeredTanks
})

export default connect(mapStateToProps)(TankList)