import React from 'react';
import From from './Form';
import ConfigurationManager from './ConfigurationManager';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from '../reducers'


const store = createStore(reducer);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <div className="row">
                        <ConfigurationManager/>
                        <From/>
                    </div>
                </div>
            </Provider>
        )
    }
}


export default App