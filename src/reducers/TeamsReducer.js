// keeping track of teams, team names, and team members

const teamsReducer = (state, action) => {
    return {
        teams: [
            {
                name: 'Purple Parrots',
                members: [
                    'Beth', 'Roger', 'Alice'
                ]
            },
            {
                name: 'Blue Bears',
                members: [
                    'Kenny', 'Julie', 'Paul'
                ]
            }
        ]
    }
};

export default teamsReducer