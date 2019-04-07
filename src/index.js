import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'

import Root from './Rout'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <Root>
        <App />
    </Root>,
    document.getElementById('root')
)

serviceWorker.unregister()