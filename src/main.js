import React from 'react'
import ReactDOM from  'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import './style.css'
import Navbar from './Components/Navbar.js'
import Homepage from './Components/Homepage'
import TeamDetailPage from './Components/TeamDetailPage'
import TeamCreatePage from './Components/TeamCreatePage'
import GameDetailPage from "./Components/GameDetailPage";

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
            <div id='app-container'>
                <Navbar />
                <Route exact path='/' component={Homepage} />
                <Route exact path='/teams/create' component={TeamCreatePage} />
                <Route exact path='/teams/id/:id' component={TeamDetailPage} />
                <Route exact path='/games/id/:id' component={GameDetailPage} />

            </div>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));