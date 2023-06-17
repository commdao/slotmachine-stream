let gameArea = document.getElementById('game-series');
let practiceArea = document.getElementById('practice-point');
let characterArea = document.getElementById('character-select');
let logoArea = document.getElementById('game-logo');
let resultArea = document.getElementById('results');
// button to spin
let spinBtn = document.getElementById('spin-button'); 


const games = [
    {
        name: "Soulcalibur VI",
        logo: 'imgs/scvi.png',
        type: '3D',
        characters: ["Cassandra", "Astaroth", "Seong-Mina", "Ivy"],
        practice: ["spacing", "guard impact", "interrupt"],
        status: "dead"
    },
    {
        name: "King of Fighters 2002 Unlimited Match",
        logo: 'imgs/kof02um.png',
        type: '2D',
        characters: ["Team Ballbusters", "Team Milifam", "Team Bangs", "Chopskick"],
        practice: ["combos", "hops", "air throw"],
        status: "rollback"
    },
    {
        name: "Dead or Alive 5: Last Round",
        logo: 'imgs/doa5lr.png',
        type: '3D',
        characters: ["Tina", "Rachel", "Nyotengu", "Sarah"],
        practice: ["spacing", "holds", "combos"],
        status: "dead"
    },
    {
        name: "Blazblue: Central Fiction",
        logo: 'imgs/BlazBlue_Centralfiction_(Logo).png',
        type: '2D',
        characters: ["Amane", "Platinum", "Litchi", "Nine"],
        practice: ["combos", "interrupt"],
        status: "rollback"
    },
    {
        name: "Million Arthur: Arcana Blood",
        logo: 'imgs/MAAB.png',
        type: '2D',
        characters: ["Eternal Flame", "Bisclavret"],
        practice: ["combos", "anti-air"],
        status: "poverty"
    },
    {
        name: "Under Night In-Birth Exe Late[cl-r]",
        logo: 'imgs/Uniclr-logo.png',
        type: '2D',
        characters: ["Phonon", "Mika", "Eltnum"],
        practice: ["combos", "interrupt"],
        status: "poverty"
    },
    {
        name: "Guilty Gear XX Accent Core Plus R",
        logo: 'imgs/Guilty_Gear_XX_Accent_Core_Plus_R_Logo.png',
        type: '2D',
        characters: ["Jam"],
        practice: ["combos", "interrupt"],
        status: "rollback"
    }
]

spinBtn.addEventListener('click', () => {
    // Clear out previous results
    gameArea.innerHTML = '';
    practiceArea.innerHTML = '';
    characterArea.innerHTML = '';
    resultArea.innerHTML = '';
    // Generate random game and practice point and character
    let game = games[Math.floor(Math.random() * games.length)];
    let practicePoint = game.practice[Math.floor(Math.random() * game.practice.length)];
    let characterChoice = game.characters[Math.floor(Math.random() * game.characters.length)];
    // Generate random animation durations for the spin
    let gameDuration = Math.floor(Math.random() * 0 + 1) * 1000; // Between 3 and 6 seconds
    let practiceDuration = Math.floor(Math.random() * 0 + 1) * 1000; // Between 3 and 6 seconds
    let characterDuration = Math.floor(Math.random() * 0 + 1) * 1000; 
    // Set the HTML for the spinning animation
    gameArea.innerHTML = '<div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>';
    practiceArea.innerHTML = '<div class="spinner-border text-secondary" role="status"><span class="sr-only">Loading...</span></div>';
    characterArea.innerHTML = '<div class="spinner-border text-secondary" role="status"><span class="sr-only">Loading...</span></div>';
    // Delay the reveal of the results to simulate spinning
    setTimeout(() => {
      // Set the HTML for the results
      gameArea.innerHTML = `<img src="${game.logo}" alt="${game.name}">`;
      practiceArea.innerHTML = `<h3>${practicePoint}</h3>`;
      characterArea.innerHTML = `<h3>${characterChoice}</h3>`;
      resultArea.innerHTML = `<h3>Use ${characterChoice} to practice ${practicePoint}</h3>`
    }, Math.max(gameDuration, practiceDuration, characterDuration));
  });


// display explanation of rules
let lame = "Playing overwhelmingly defensively, with as few offensive risks as possible. The goal is to win long, grueling rounds, often by time out, where the opponent feels like they have no way to get close."

let antiAir = "Hitting someone who is jumping at you while you are on the ground."

let interrupt = "Prevent your opponent from finishing through with their combo turn."

let punish = "Attacking someone when they are unable to block, making the damage guaranteed."

let spacing = "The skill of putting yourself at a good range for your best attacks."

let fiveHitCombos = "A sequence of hits that are unavoidable once the first hit lands."