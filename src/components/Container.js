import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ModalComp from '../common/ModalComp'
import RegisterTank from './RegisterTank'
import { toggleModal } from '../redux-local/actions'
import { registerTank } from '../redux-local/actions'
import TankList from './TankList'
import Accordion from '../common/Accordion'
import { selectLabels } from '../constants/tankLabels'

const Container = ({ modal: { isModalVisible }, toggleModal, registerTank, tank }) => {
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
                    registerTank(tank.values)
                }} />
            </ModalComp>

            <TankList />

            {selectLabels[0].options.map((tank, key) => {
                return <Accordion key={key} header={tank} />
            })}
        </div>
    )
}

Container.propTypes = {
    modal: PropTypes.objectOf(Boolean).isRequired,
    toggleModal: PropTypes.func.isRequired,
    registerTank: PropTypes.func.isRequired,
    tank: PropTypes.object
}

const mapStateToProps = state => ({
    modal: state.modal,
    tank: state.form.registerTank
})

export default connect(mapStateToProps, {
    toggleModal,
    registerTank
})(Container)