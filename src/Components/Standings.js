import React, { Component } from 'react'
import { connect } from 'react-redux'



class Standings extends Component {
    constructor(props) {
        super(props);
        this.tallyStanding = this.tallyStanding.bind(this)
    }

    tallyStanding(team) {
        let wins = 0;
        let ties = 0;
        let losses = 0;
        this.props.games.forEach(game => {
            if (game.team1.id == team.id || game.team2.id == team.id) {
                if (game.team1.score === game.team2.score) {
                    ties++
                } else if (game.team1.id == team.id) {
                    if (game.team1.score > game.team2.score) {
                        wins++
                    } else {
                        losses++
                    }
                } else if (game.team2.id == team.id) {
                    if (game.team2.score > game.team1.score) {
                        wins++
                    } else {
                        losses++
                    }
                }

            }
        });
        return {team, wins, ties, losses}
    }

    render() {
        const standings = this.props.teams.map(this.tallyStanding);
        console.log('standings:', standings);
        return (
            <div id='standing'>
                <h1>Standings</h1>
                <table border='1'>
                    <tbody>
                        <tr>
                            <th>Teams</th>
                            <th>Wins</th>
                            <th>Ties</th>
                            <th>Losses</th>
                        </tr>
                        {standings.map((standing, index) => {
                            return (
                                <tr key={index}>
                                    <td>{standing.team.name}</td>
                                    <td>{standing.wins}</td>
                                    <td>{standing.ties}</td>
                                    <td>{standing.losses}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}



function mapStateToProps(state) {
    const games = state.topLevelGamesStoreSpace.games;
    const teams = state.topLevelTeamsStoreSpace.teams;
    return {
        games,
        teams
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Standings)