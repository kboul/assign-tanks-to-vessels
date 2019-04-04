import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap'
import FaAngle from './FaAngle'
import '../styles/Accordion.css'
import { allLabelsAbbreviation } from '../constants/tankLabels'

class Accordion extends Component {
    state = {
        collapse: false
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse })
    }

    render() {
        return (
            <div className="row no-gutters">
                <div className="col-6">
                    <Card id='card'>
                        <CardHeader
                            id='cardHeader'
                            onClick={this.toggle}>
                            <FaAngle isAccordionCollapsed={this.state.collapse} />
                            &nbsp; {this.props.header}
                        </CardHeader>
                        <Collapse isOpen={this.state.collapse}>
                            <CardBody>
                                <table className="table">
                                    <thead style={{ fontSize: '16px' }}>
                                        <tr>
                                            {allLabelsAbbreviation.map((label, key) => {
                                                return (
                                                    <th
                                                        key={key}
                                                        scope="col">
                                                        {label}
                                                    </th>
                                                )
                                            })}
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                    {this.props.children}
                                </table>
                            </CardBody>
                        </Collapse>
                    </Card>
                </div>
            </div>
        )
    }
}

FaAngle.propTypes = {
    isAccordionCollapsed: PropTypes.bool.isRequired,
    header: PropTypes.string,
    children: PropTypes.element
}

export default Accordion