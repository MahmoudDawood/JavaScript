const team = ['Harry', 'Ron']

const less = () => console.log('Team size: 3')
const more = () => console.log('Too many people on your team')

team.length <= 4 ? less() : more()

console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many players')