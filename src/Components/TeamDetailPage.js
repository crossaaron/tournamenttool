import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'


class TeamDetailPage extends Component {
    render() {
        console.log('detail props:', this.props);
        return (
            <div id='app-container'>
                <h1>this.props.team.name</h1>
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

TeamDetailPage = withRouter(TeamDetailPage);

function mapStateToProps(state) {
    const id = 2345
    const teams = state.topLevelTeamsStoreSpace.teams;
    const team = teams.reduce((found, team) => {
        if (found) {
            return found
        }
        if (team.id === id) {
            return team
        }
        return false
    }, false);

    return {
        team
    }
}

function mapDispatchToProps(dispatch) {

}
export default connect(mapStateToProps, mapDispatchToProps)(TeamDetailPage)