import { CREATE_TEAM } from './TeamsActions';

function initialState() {
        return {
            teams: [
                {
                    id: 2345,
                    name: 'Purple Parrots',
                    members: [
                        'Beth', 'Roger', 'Alice'
                    ]
                },
                {
                    id: 3456,
                    name: 'Blue Bears',
                    members: [
                        'Kenny', 'Julie', 'Paul'
                    ]
                }
            ]
        }
}

const teamsReducer = (state, action) => {
    console.log('action', action);
    if (state === undefined) {
        return initialState()
    }

    switch(action.type) {
        case CREATE_TEAM: {
            const teams = [...state.teams, action.team];
            return {teams}
        }
        default: {
            return state
        }
    }
};

export default teamsReducer