import React, { Component } from 'react'
import ModalComp from '../common/ModalComp'

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
                <button className="btn btn-primary" onClick={this.toggleModal}>
                    Register Tank
            </button>
                <ModalComp
                    modal={this.state.isVisible}
                    toggle={this.toggleModal}>
                    <div>modal content</div>
                </ModalComp>
            </div>

        )
    }
}

export default App