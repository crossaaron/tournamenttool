import React, { Component } from 'react'
import TeamsList from './TeamsList'
import GamesList from './GamesList'


export default class Homepage extends Component {
    render() {
        return (
            <div id='app-container'>
               <TeamsList />
               <GamesList />
            </div>
        )
    }
}