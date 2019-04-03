import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ModalComp from '../common/ModalComp'
import RegisterTank from './RegisterTank'
import { toggleModal } from '../redux-local/actions'

const Container = ({ modal: { isModalVisible }, toggleModal }) => {
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
                <RegisterTank onSubmit={() => toggleModal()} />
            </ModalComp>
        </div>
    )
}

Container.propTypes = {
    modal: PropTypes.objectOf(Boolean).isRequired,
    toggleModal: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    modal: state.modal
})

export default connect(mapStateToProps, {
    toggleModal
})(Container)