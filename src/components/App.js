import React, { Component } from 'react'
import ModalComp from '../common/ModalComp'
import RegisterTank from './RegisterTank'

class App extends Component {
    state = {
        isVisible: false
    }

    toggleModal = () => {
        this.setState({ isVisible: !this.state.isVisible })
    }

    render() {
        return (
            <div>
                <button
                    className="btn btn-primary"
                    onClick={this.toggleModal}>
                    Register Tank
                </button>
                <ModalComp
                    modal={this.state.isVisible}
                    toggle={this.toggleModal}>
                    <RegisterTank onSubmit={this.toggleModal} />
                </ModalComp>
            </div>

        )
    }
}

export default App