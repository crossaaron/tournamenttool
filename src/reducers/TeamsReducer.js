// keeping track of teams, team names, and team members

const teamsReducer = (state, action) => {
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
                id: 2345,
                name: 'Blue Bears',
                members: [
                    'Kenny', 'Julie', 'Paul'
                ]
            }
        ]
    }
};

export default teamsReducer