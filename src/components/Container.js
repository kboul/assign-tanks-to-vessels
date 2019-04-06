import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ModalComp from '../common/ModalComp'
import RegisterTank from './RegisterTank'
import VesselList from './VesselList'
import TankList from './TankList'
import VesselsGrid from './VesselsGrid'
import { toggleModalToRegisterTank } from '../redux-local/actions'
import { registerTank } from '../redux-local/actions'

const Container = ({ modal: { isModalToRegisterTankVisible },
    toggleModalToRegisterTank, registerTank, tank }) => {

    return (
        <div className="row">
            <div className="col-md-6">
                <button
                    className="btn btn-primary"
                    onClick={() => toggleModalToRegisterTank()}>
                    Register Tank
                </button>

                <ModalComp
                    header={'Add New Tank'}
                    modal={isModalToRegisterTankVisible}
                    toggle={() => toggleModalToRegisterTank()}>
                    <RegisterTank onSubmit={() => {
                        toggleModalToRegisterTank()
                        registerTank(tank.values)
                    }} />
                </ModalComp>

                <TankList />

                <VesselList />
            </div>
            <div className="col-md-6">
                <VesselsGrid />
            </div>
        </div>
    )
}

Container.propTypes = {
    modal: PropTypes.objectOf(Boolean).isRequired,
    tank: PropTypes.object,
    toggleModalToRegisterTank: PropTypes.func.isRequired,
    registerTank: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    modal: state.modal,
    tank: state.form.registerTank
})

export default connect(mapStateToProps, {
    toggleModalToRegisterTank,
    registerTank
})(Container)