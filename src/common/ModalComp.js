import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import PropTypes from 'prop-types'

const modalHeaderStyle = { backgroundColor: 'lightgrey' }

const ModalComp = ({ modal, toggle, children }) => {
    return (
        <Modal
            isOpen={modal}
            toggle={toggle}
            size="lg">
            <ModalHeader
                style={modalHeaderStyle}
                toggle={toggle}>
                Add New Tank
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
        </Modal>
    )
}

ModalComp.propTypes = {
    modal: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
}

export default ModalComp