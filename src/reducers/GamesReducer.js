// keep track of games teams are playing against each other
export const CREATE_GAME = 'CREATE_GAME';

export function createGame(team1, team2) {
    let id = Math.random();
    team1.points = 0;
    team2.points = 0;
    let game = {
        id, team1, team2
    }
    return {
        type: CREATE_GAME,
        game
    }
}

function initialState() {
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
}

const gamesReducer = (state, action) => {
    console.log('games reducer:', action);
    if (state === undefined) {
        return initialState()
    }

    switch(action.type) {
        case CREATE_GAME: {
            const games = [...state.games, action.game]
            return {games}
        }
        default: {
            return state
        }
    }
};

export default gamesReducer