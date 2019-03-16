export const CREATE_TEAM = 'CREATE TEAM';

export function createTeam(team) {
    team.id = Math.random();
    return {
        type: CREATE_TEAM,
        team
    }
}