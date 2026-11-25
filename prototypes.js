// The only file to edit when a prototype changes or a new one is added.
// Games are loaded from their own GitHub Pages: never copy a build into this repo
// (Turn Ball's art is licensed and may not be redistributed).
window.PROTOTYPES = [
  {
    slug: 'groove-critters',
    focus: '50% 46%', // part of the screenshot kept in view on the home
    name: 'Groove Critters',
    kind: 'Music maker',
    accent: '#ff5c92',
    hook: 'Start a band of critters and shape a groove. No music knowledge needed.',
    how: [
      'The band starts with a beat and a bass line already playing.',
      'Tap a critter to add it, tap again to change its part. Changes land on the next bar.',
      'With three critters on stage you get jam pads and a build-up to hold and release.',
    ],
    tryFirst: 'Start the band, add Keys and Pip, then hold the build-up and let go.',
    repo: 'https://github.com/fafidesplas/coolmath-music-maker',
    versions: [
      {
        url: 'https://fafidesplas.github.io/coolmath-music-maker/',
        img: 'img/groove-critters.webp',
        alt: 'Four pink critters in yellow caps playing on a stage, with their cards and color pads below',
        controls: [
          ['Click or tap', 'Critters, pads and build-up'],
          ['1 to 4', 'Add a critter or change its part'],
          ['Shift + 1 to 4', 'Remove a critter'],
          ['Z X C V B N M ,', 'Jam pads'],
          ['Hold Space', 'Build up'],
          ['U / C', 'Undo / compare'],
          ['P', 'Pause'],
          ['A', 'Layer names and six styles'],
        ],
      },
    ],
  },
  {
    slug: 'cable-calm',
    focus: '50% 30%', // part of the screenshot kept in view on the home
    name: 'Cable Calm',
    kind: 'Cozy job simulator',
    accent: '#f5a623',
    hook: 'Untangle the mess, plug everything in and light every LED.',
    how: [
      'Drag each plug to the port with the same color and symbol.',
      'Cables behave like real rope: tame them with zip ties, velcro, reels, a comb and hooks.',
      'Seven jobs, from a home router to a datacenter. Power on, compare before and after, earn up to three stars.',
    ],
    tryFirst: "Play Grandma Rosa's Router and press Power on, then jump to Radio Luna: every job is unlocked here.",
    repo: 'https://github.com/fafidesplas/coolmath-cable-tidy',
    versions: [
      {
        url: 'https://fafidesplas.github.io/coolmath-cable-tidy/?all',
        img: 'img/cable-calm.webp',
        alt: 'A radio mixer on a wood wall with tangled white, black and orange cables hanging over two hooks',
        controls: [
          ['Drag', 'Move a plug or a cable'],
          ['Release near a port', 'Plug in, or swap a wrong plug'],
          ['Number keys', 'Pick a tool'],
          ['Esc', 'Back to the hand'],
          ['Click', 'Zip tie, velcro, reel, label'],
          ['Press and drag', 'Comb, spiral, duster, driver'],
          ['Click a yellow ring', 'Flick a crossing loose'],
          ['Touch', 'Same, with drag and tap'],
        ],
      },
    ],
  },
  {
    slug: 'turn-ball',
    focus: '50% 62%', // part of the screenshot kept in view on the home
    name: 'Turn Ball',
    kind: 'Turn-based basketball',
    accent: '#ff8a3d',
    hook: 'Turn-based hoops in several modes: 1v1 duels, a 5v5 playbook and 3x3.',
    // Opens straight on the game's own mode menu (no brief), so new modes show up here by themselves.
    menu: true,
    repo: 'https://github.com/fafidesplas/coolmath-turn-ball',
    versions: [
      {
        url: 'https://fafidesplas.github.io/coolmath-turn-ball/menu/',
        img: 'img/turn-ball.webp',
        alt: 'Pixel-art street court at dusk: a player takes a jump shot over a defender in a 1v1 duel',
      },
    ],
  },
  {
    slug: 'slowsteel',
    focus: '50% 60%', // part of the screenshot kept in view on the home
    name: 'Slowsteel',
    kind: 'Slow-motion arena',
    accent: '#ff5a56',
    hook: 'A first-person castle arena where time moves only when you move.',
    how: [
      'Stand still and the arrows hang in the air. Walk and the world wakes up.',
      "Every weapon breaks, so take the next one out of the air, off the ground or from a knight's hands.",
      'Split shields, throw fire, frost and storm flasks, and choose an upgrade every few kills.',
    ],
    tryFirst: 'Pick any weapon, throw it at a knight and grab what they drop with E.',
    note: 'The game captures the mouse. Press Esc to get it back.',
    repo: 'https://github.com/fafidesplas/coolmath-slowmo-arena',
    versions: [
      {
        url: 'https://fafidesplas.github.io/coolmath-slowmo-arena/',
        img: 'img/slowsteel.webp',
        alt: 'First-person view of a castle courtyard holding a war hammer while two red knights attack',
        controls: [
          ['WASD or arrows', 'Move'],
          ['Mouse', 'Look'],
          ['Left click', 'Attack or use'],
          ['Right click, F or Q', 'Throw what you hold'],
          ['E', 'Grab, swap or catch'],
          ['Click on a flask', 'Break it over your weapon'],
          ['1 2 3 or click', 'Choose an upgrade'],
          ['Touch', 'Left thumb moves, right side looks'],
        ],
      },
    ],
  },
];
