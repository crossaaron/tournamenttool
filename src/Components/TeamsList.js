import React, { Component } from 'react'
import { connect } from 'react-redux'

class TeamsList extends Component {
    render() {
        return (
            <div id='teams-list'>
                <h1>Teams</h1 >
                {this.props.teams.map((team, index) => {
                    <div key={index} className='team'>
                        {team.name}
                    </div>
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('teams state:', state);
    return {
        teams: state.teams.teams
    }

}

function mapDispatchToProps() {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsList)