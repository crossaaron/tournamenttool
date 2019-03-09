import React from 'react'
import ReactDOM from  'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './Components/App'
import './style.css'

import teamsReducer from './reducers/TeamsReducer'
import gamesReducer from './reducers/GamesReducer'

const reducer = combineReducers({
    topLevelTeamsStoreSpace: teamsReducer,
    topLevelGamesStoreSpace: gamesReducer,
});

const store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));