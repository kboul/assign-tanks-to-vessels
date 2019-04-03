import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducer from './redux-local/reducers'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import App from './components/App'
import * as serviceWorker from './serviceWorker'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || compose

const store = createStore(reducer, composeEnhancers())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))

serviceWorker.unregister()