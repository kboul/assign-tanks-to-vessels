import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import { createStore, compose } from 'redux'
import reducer from './redux-local/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || compose

const store = createStore(reducer, composeEnhancers())

const Root = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

Root.propTypes = {
    children: PropTypes.element.isRequired
}

export default Root