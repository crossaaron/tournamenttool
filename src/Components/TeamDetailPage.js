import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'


class TeamDetailPage extends Component {
    getTeam() {
    const id = this.props.match.params.id;
    const team = this.props.teams.reduce((found, team) => {
        if (found) {
            return found
        }
        if (team.id == id) {
            return team
        }
        return false
    }, false);
        return team
    }

    render() {
        console.log('detail props:', this.props);
        let team = this.getTeam();
        return (
            <div id='app-container'>
                <h1>{team.name}</h1>
                <ul>
                    {team.members.map((member, index) => {
                        return (
                            <li key={index}>
                                {member}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}



function mapStateToProps(state) {
    const teams = state.topLevelTeamsStoreSpace.teams;
    return {
        teams
    }
}

function mapDispatchToProps(dispatch) {

}
export default connect(mapStateToProps, mapDispatchToProps)(TeamDetailPage)