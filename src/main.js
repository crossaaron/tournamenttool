import React, { Component, Fragment } from 'react'
import ReactDOM from  'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import Homepage from './Components/Homepage'
import TeamDetailPage from './Components/TeamDetailPage'
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
        <BrowserRouter>
            <Fragment>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/teams/:id' component={TeamDetailPage} />
            </Fragment>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));