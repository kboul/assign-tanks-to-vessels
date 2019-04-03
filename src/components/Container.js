import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ModalComp from '../common/ModalComp'
import RegisterTank from './RegisterTank'
import { toggleModal } from '../redux-local/actions'
import { registerTank } from '../redux-local/actions'

const Container = ({ modal: { isModalVisible }, toggleModal, registerTank, registeredTanks }) => {
    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={() => toggleModal()}>
                Register Tank
                </button>
            <ModalComp
                modal={isModalVisible}
                toggle={() => toggleModal()}>
                <RegisterTank onSubmit={() => {
                    toggleModal()
                    registerTank(registeredTanks.values)
                }} />
            </ModalComp>
        </div>
    )
}

Container.propTypes = {
    modal: PropTypes.objectOf(Boolean).isRequired,
    toggleModal: PropTypes.func.isRequired,
    registerTank: PropTypes.func.isRequired,
    registeredTanks: PropTypes.array
}

const mapStateToProps = state => ({
    modal: state.modal,
    registeredTanks: state.form.registerTank
})

export default connect(mapStateToProps, {
    toggleModal,
    registerTank
})(Container)