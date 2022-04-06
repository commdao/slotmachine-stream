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
        logo: 'imgs\scvi.png',
        type: '3D',
        characters: ["Cassandra", "Astaroth", "Seong-Mina", "Ivy"],
        practice: ["spacing", "guard impact", "interrupt"],
        status: "dead"
    },
    {
        name: "King of Fighters 2002 Unlimited Match",
        logo: 'imgs\kof02um.png',
        type: '2D',
        characters: ["Team Ballbusters", "Team Milifam", "Team Bangs", "Chopskick"],
        practice: ["combos", "hops", "air throw"],
        status: "rollback"
    },
    {
        name: "Persona 4 Arena Ultimax",
        logo: 'imgs\p4a.png',
        type: '2D',
        characters: ["Elizabeth", "Rise", "Yukari", "Mitsuru"],
        practice: ["combos", "interrupt", "anti-air"],
        status: "rollback"
    },
    {
        name: "Dead or Alive 5: Last Round",
        logo: 'imgs\doa5lr.png',
        type: '3D',
        characters: ["Tina", "Rachel", "Nyotengu", "Sarah"],
        practice: ["spacing", "holds", "combos"],
        status: "dead"
    },
    {
        name: "Blazblue: Central Fiction",
        logo: 'imgs\BlazBlue_Centralfiction_(Logo).png',
        type: '2D',
        characters: ["Amane", "Platinum", "Litchi", "Nine"],
        practice: ["combos", "interrupt"],
        status: "rollback"
    },
    {
        name: "Million Arthur: Arcana Blood",
        logo: 'imgs\MAAB.png',
        type: '2D',
        characters: ["Eternal Flame", "Bisclavret"],
        practice: ["combos", "anti-air"],
        status: "poverty"
    },
    {
        name: "Under Night In-Birth Exe Late[cl-r]",
        logo: 'imgs\Uniclr-logo.png',
        type: '2D',
        characters: ["Phonon", "Mika", "Eltnum"],
        practice: ["combos", "interrupt"],
        status: "poverty"
    },
    {
        name: "Guilty Gear XX Accent Core Plus R",
        logo: 'imgs\Guilty_Gear_XX_Accent_Core_Plus_R_Logo.png',
        type: '2D',
        characters: ["Jam"],
        practice: ["combos", "interrupt"],
        status: "rollback"
    }
]

// const games = {
//     5: {
//         games: ["SCVI", "P4AU", "KOF02UM", "DOA5LR", "MAAB"]
//     },
//     4: {
//         games: ["UNICLR", "GGACPR", "BBCF"]
//     },
//     3: {
//         games: ["Tekken", "GGST", "Nitroplus"]
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