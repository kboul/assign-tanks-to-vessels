import React from 'react'
import Container from './Container';

const App = () => {
    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <Container />
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    )
}

export default App;