// areas to display selected game and selected rules
let gameArea = document.getElementById('game-series');
let rulesArea = document.getElementById('rule-stipulation');
// area to display selected rules

// array of game series
const games = ["SCVI", "KOF02UM", "DOA5LR", "BBCF", "MAAB"];
// array of aTier games
// const aGames = ["UNICLR", "GGACPR", "DBFZ", "Nitroplus"];

// array of bTier games
// const bGames = ["Tekken", "GGST"];

// array of cTier games
// const cGames = ["PRBFTG", "MvCi"];

// array of dTier games
// const dGames = ["TMNT x JL", "Granblue", "Arcana Heart 3"];

// array of games only allowing rules anti-air and 5-hit combos
// const eGames = ["SFV", "Killer Instinct"];

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
let lame = "Playing overwhelmingly defensively, with as few offensive risks as possible. The goal is to win long, grueling rounds, often by time out, where the opponent feels like they have no way to get close."

let antiAir = "Hitting someone who is jumping at you while you are on the ground."

let interrupt = "Prevent your opponent from finishing through with their combo turn."

let punish = "Attacking someone when they are unable to block, making the damage guaranteed."

let spacing = "The skill of putting yourself at a good range for your best attacks."

let fiveHitCombos = "A sequence of hits that are unavoidable once the first hit lands."