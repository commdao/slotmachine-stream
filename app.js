// areas to display selected game info 
let gameArea = document.getElementById('game-series');
let practiceArea = document.getElementById('practice-point');
let characterArea = document.getElementById('character-select');
let logoArea = document.getElementById('game-logo');
// button to spin
let spinBtn = document.getElementById('spin-button');


const games = [
    {
        name: "Soulcalibur VI",
        logo: 'imgs/scvi.png',
        characters: ["Cassandra", "Astaroth", "Seong-Mina", "Ivy"],
        practice: ["spacing", "guard impact", "interrupt"]
    },
    {
        name: "King of Fighters 2002 Unlimited Match",
        logo: 'imgs/kof02um.png',
        characters: ["Team Ballbusters", "Team Millifam", "Team Bangs", "YurKiDern"],
        practice: ["combos", "hops", "air throw"]
    },
    {
        name: "Dead or Alive 5: Last Round",
        logo: 'imgs/doa5lr.png',
        characters: ["Tina", "Rachel", "Nyotengu", "Sarah"],
        practice: ["spacing", "holds", "combos"]
    },
    {
        name: "Blazblue: Central Fiction",
        logo: 'imgs/bbcf.png',
        characters: ["Amane", "Platinum", "Litchi", "Nine"],
        practice: ["combos", "interrupt"],
    },
    {
        name: "Million Arthur: Arcana Blood",
        logo: 'imgs/maab.png',
        characters: ["Eternal Flame", "Bisclavret"],
        practice: ["combos", "anti-air"]
    }
]

// const games = {
//     5: {
//         games: ["SCVI", "KOF02UM", "DOA5LR", "BBCF", "MAAB"]
//     },
//     4: {
//         games: ["UNICLR", "GGACPR", "DBFZ", "Nitroplus"]
//     },
//     3: {
//         games: ["Tekken", "GGST"]
//     },
//     2: {
//         games: ["PRBFTG", "MvCi"]
//     },
//     1: {
//         games: ["TMNT x JL", "Granblue", "Arcana Heart 3"]
//     },
//     0: {
//         games: ["SFV", "Killer Instinct"]
//     }
// }


// Randomizer to pick game and stipulations
// THIS IS NOT WORKING CORRECTLY, not being collective, being separate randoms
spinBtn.addEventListener('click', () => {
        gameArea.innerHTML = games[Math.floor(Math.random() * 5) + 1].logo;
        practiceArea.innerHTML = games[Math.floor(Math.random() * 5) +1].practice[Math.floor(Math.random() * 2)];
});


// display explanation of rules
let lame = "Playing overwhelmingly defensively, with as few offensive risks as possible. The goal is to win long, grueling rounds, often by time out, where the opponent feels like they have no way to get close."

let antiAir = "Hitting someone who is jumping at you while you are on the ground."

let interrupt = "Prevent your opponent from finishing through with their combo turn."

let punish = "Attacking someone when they are unable to block, making the damage guaranteed."

let spacing = "The skill of putting yourself at a good range for your best attacks."

let fiveHitCombos = "A sequence of hits that are unavoidable once the first hit lands."