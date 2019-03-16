import React from 'react'
import ReactDOM from  'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import Homepage from './Components/Homepage'
import TeamDetailPage from './Components/TeamDetailPage'
import GameDetailPage from "./Components/GameDetailPage";
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
            <div id='app-container'>
                <p>
                    <Link to='/'>Home</Link>
                </p>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/teams/:id' component={TeamDetailPage} />
                <Route exact path='/games/:id' component={GameDetailPage} />
            </div>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));