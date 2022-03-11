// areas to display selected game and selected rules
let gameArea = document.getElementById('game-series');
// area to display selected rules
let rulesArea = document.getElementById('rule-stipulation');
// button to spin
let spinBtn = document.getElementById('spin-button');

// array of game series
const games = ["SCVI", "KOF02UM", "DOA5LR", "BBCF", "MAAB"];
// what if I make nested arrays to store all games and rules

const gameTiers = {
    5: {
        games: ["SCVI", "KOF02UM", "DOA5LR", "BBCF", "MAAB"]
    },
    4: {
        games: ["UNICLR", "GGACPR", "DBFZ", "Nitroplus"]
    },
    3: {
        games: ["Tekken", "GGST"]
    },
    2: {
        games: ["PRBFTG", "MvCi"]
    },
    1: {
        games: ["TMNT x JL", "Granblue", "Arcana Heart 3"]
    },
    0: {
        games: ["SFV", "Killer Instinct"]
    }
}

// array of rule stipulations
const rules = ["anti-air", "5-hit combos", "punish", "spacing", "lame", "interrupt"];


// Randomizer to pick game and rules
spinBtn.addEventListener('click', () => {
        gameArea.innerHTML = games[Math.floor(Math.random() * games.length)];
        rulesArea.innerHTML = rules[Math.floor(Math.random() * rules.length)];
});

// pick a certain tier of game
// if tier 5, pick a random game from the array, using the full length of rules array
// if tier 4, pick a random game from the array, limited to the first 5 rules of the array
// if tier 3, pick a random game from the array, limited to the first 4 rules of the array
// if tier 2, pick a random game from the array, limited to the first 3 rules of the array
// if tier 1, pick a random game from the array, limited to the first 2 rule of the array

// display explanation of rules
let lame = "Playing overwhelmingly defensively, with as few offensive risks as possible. The goal is to win long, grueling rounds, often by time out, where the opponent feels like they have no way to get close."

let antiAir = "Hitting someone who is jumping at you while you are on the ground."

let interrupt = "Prevent your opponent from finishing through with their combo turn."

let punish = "Attacking someone when they are unable to block, making the damage guaranteed."

let spacing = "The skill of putting yourself at a good range for your best attacks."

let fiveHitCombos = "A sequence of hits that are unavoidable once the first hit lands."