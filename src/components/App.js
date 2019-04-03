import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ModalComp from '../common/ModalComp'
import RegisterTank from './RegisterTank'
import { toggleModal } from '../redux-local/actions'

class App extends Component {
    render() {
        return (
            <div>
                <button
                    className="btn btn-primary"
                    onClick={() => this.props.toggleModal()}>
                    Register Tank
                </button>
                <ModalComp
                    modal={this.props.modal.isModalVisible}
                    toggle={() => this.props.toggleModal()}>
                    <RegisterTank onSubmit={() => this.props.toggleModal()} />
                </ModalComp>
            </div>

        )
    }
}

App.propTypes = {
    toggleModal: PropTypes.func
}

const mapStateToProps = state => ({
    modal: state.modal
})

export default connect(mapStateToProps, {
    toggleModal
})(App)