// areas to display selected game and selected rules
let gameArea = document.getElementById('game-series');
let rulesArea = document.getElementById('rule-stipulation');
// area to display selected rules

// array of game series
const games = ["SCVI", "KOF02UM", "DOA5LR", "BBCF", "MAAB"];
// array of games only allowing rules anti-air and 5-hit combos
// const fGames = ["SFV", "Killer Instinct"];

// array of rule stipulations
const rules = ["punish", "interrupt", "spacing", "anti-air", "5-hit combos", "lame"];

// Randomizer to pick game and rules
function spin() {
    gameArea.innerHTML =
        games[Math.floor(Math.random() * games.length)];
    rulesArea.innerHTML =
        rules[Math.floor(Math.random() * rules.length)];
}
// display explanation of rules
