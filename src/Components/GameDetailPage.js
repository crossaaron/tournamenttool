import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'


class GameDetailPage extends Component {
    getGame() {
    const id = this.props.match.params.id;
    const game = this.props.games.reduce((found, game) => {
        if (found) {
            return found
        }
        if (game.id == id) {
            return game
        }
        return false
    }, false);
        return game
    }

    render() {
        const game = this.getGame();
        return (
            <div id='game-detail'>
                <h1>{game.team1.name} {' vs '} {game.team2.name}</h1>
                <h3>{game.team1.name} {': '} {game.team1.points}</h3>
                <h3>{game.team2.name} {': '} {game.team2.points}</h3>
            </div>
        )
    }
}



function mapStateToProps(state) {
    const games = state.topLevelGamesStoreSpace.games;
    return {
        games
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GameDetailPage)