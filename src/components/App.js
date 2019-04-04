import React from 'react'
import Container from './Container';

const App = () => {
    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <Container />
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}

export default App;