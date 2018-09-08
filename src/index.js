import React from 'react';
import ReactDOM from 'react-dom';
import From from './components/Form';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'


const store=createStore(reducer);

const App=()=>(
    <Provider store={store}>
        <From/>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
