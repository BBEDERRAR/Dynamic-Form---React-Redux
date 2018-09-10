import React from 'react';
import From from './Form';
import ConfigurationManager from './ConfigurationManager';


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <ConfigurationManager/>
                    <From/>
                </div>
            </div>
        )
    }
}


export default App