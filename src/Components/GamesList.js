import React, { Component } from 'react'
import { connect } from 'react-redux'

class GamesList extends Component {
    render() {
        return (
            <div id='games-list'>
                <h1>Games</h1 >
                {this.props.games.map((game, index) => {
                    return (
                        <div key={index} className='team'>
                            {game.team1.name} {' vs '} {game.team2.name}
                        </div>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('games state:', state);
    return {
        games: state.topLevelGamesStoreSpace.games
    }

}

function mapDispatchToProps() {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesList)