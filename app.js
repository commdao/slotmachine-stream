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
        characters: ["Cassandra", "Tira", "Taki", "Ivy"],
        practice: ["spacing", "guard impact", "juggle combo"],
        status: "dead"
    },
    {
        name: "King of Fighters XV",
        logo: '', // update
        type: '2D',
        characters: ["Team Ballbusters", "Team Milifam", "Team Bangs", "Chopskick"],
        practice: ["combos", "hops", "air throw"],
        status: "rollback"
    },
    {
        name: "Dead or Alive 5: Last Round", // Bonus split for DOA5LR or DOA6
        logo: 'imgs/doa5lr.png',
        type: '3D',
        characters: ["Leifang", "Kokoro", "Helena", "Rachel"],
        practice: ["spacing", "holds", "juggle combo"],
        status: "dead"
    },
    {
        name: "Street Fighter 6",
        logo: '', //update
        type: '2D',
        characters: ["Chun Li", "Cammy", "A.K.I."],
        practice: ["combos", "interrupt"],
        status: "rollback"
    },
    {
        name: "Tekken 7",
        logo: '', //update
        type: '3D',
        characters: ["Heihachi", "Nina", "Anna", "Eliza", "Xiaoyu", "Julia", "Katarina", "Zafina", "Lili"], // divide between T8 confirmed
        practice: ["shimmy", "backdash", "interrupt"],
        status: ""
    },
    {
        name: "Granblue Fantasy Versus: Rising",
        logo: '', //update
        type: '2D',
        characters: ["Zeta", "Anila", "Vira", "Narmaya"],
        practice: ["spot dodge", "roll", "anti-air", "combo extended from ex"],
        status: "rollback"
    },
    {
        name: "Mortal Kombat 1",
        logo: '', // update
        type: '2D',
        characters: ["Sindel", "Mileena", "Nitara", "Kitana", "Ashrah", "Li Mei"],
        practice: ["double kameo call combo", "turn retake"],
        status: "rollback"
    }
]

let carousel = document.querySelector('.carousel');

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
      resultArea.innerHTML = `<h3>Use ${characterChoice} in ${game.logo} to practice ${practicePoint}</h3>`;

      carousel.querySelector('img').src = game.logo;
    }, Math.max(gameDuration, practiceDuration, characterDuration));
  });


// display explanation of rules
let lame = "Playing overwhelmingly defensively, with as few offensive risks as possible. The goal is to win long, grueling rounds, often by time out, where the opponent feels like they have no way to get close."

let antiAir = "Hitting someone who is jumping at you while you are on the ground."

let interrupt = "Prevent your opponent from finishing through with their combo turn."

let punish = "Attacking someone when they are unable to block, making the damage guaranteed."

let spacing = "The skill of putting yourself at a good range for your best attacks."

let fiveHitCombos = "A sequence of hits that are unavoidable once the first hit lands."