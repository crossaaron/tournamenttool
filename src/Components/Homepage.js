import React, { Component, Fragment } from 'react'
import TeamsList from './TeamsList'
import GamesList from './GamesList'


export default class Homepage extends Component {
    render() {
        return (
            <Fragment>
               <TeamsList />
               <GamesList />
            </Fragment>
        )
    }
}