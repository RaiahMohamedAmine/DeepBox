import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import App from './App/index';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer';
import ReduxToastr from 'react-redux-toastr'
import config from './config';
import {reducer as toastsReducer} from 'react-redux-toastr';

const reducers = {
    reducer,
    toastr : toastsReducer
};
const TR = combineReducers(reducers);
const store = createStore(TR);

const app = (
    <Provider store={store}>
        <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="bottom-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick/>
        <BrowserRouter basename={config.basename}>
            {/* basename="/datta-able" */}
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
