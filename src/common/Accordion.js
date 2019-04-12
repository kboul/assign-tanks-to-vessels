import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap'
import FaAngle from './FaAngle'
import {card, cardHeader} from '../styles/accordion.module.css'

class Accordion extends Component {
    state = {
        collapse: true
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse })
    }

    render() {
        const { header, children } = this.props
        const { collapse } = this.state
        return (
            <div className="row no-gutters">
                <div className="col">
                    <Card className={card}>
                        <CardHeader
                            className={cardHeader}
                            onClick={this.toggle}>
                            <FaAngle isAccordionCollapsed={collapse} />
                            &nbsp; {header}
                        </CardHeader>
                        <Collapse isOpen={collapse}>
                            <CardBody>
                                {children}
                            </CardBody>
                        </Collapse>
                    </Card>
                </div>
            </div>
        )
    }
}

Accordion.propTypes = {
    isAccordionCollapsed: PropTypes.bool,
    header: PropTypes.string,
    children: PropTypes.object.isRequired
}

export default Accordion