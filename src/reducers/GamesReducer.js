// keep track of games teams are playing against each other

const gamesReducer = (state, action) => {
    return {
        games: [
            {
                id: 2222,
                team1: {
                    points: 4,
                    name: 'Purple Parrots'
                },
                team2: {
                    points: 2,
                    name: 'Blue Bears'
                }
            }
        ]
    }
};

export default gamesReducer