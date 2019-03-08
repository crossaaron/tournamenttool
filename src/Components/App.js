import React, { Component } from 'react'
import TeamsList from './TeamsList'
import GamesList from './GamesList'


export default class App extends Component {
    render() {
        return (
            <div id='app-container'>
               <TeamsList />
               <GamesList />
            </div>
        )
    }
}