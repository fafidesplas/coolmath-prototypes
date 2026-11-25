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
    focus: '50% 24%', // part of the screenshot kept in view on the home
    name: 'Cable Calm',
    kind: 'Cozy job simulator',
    accent: '#f5a623',
    hook: 'Untangle the mess, plug everything in and light every LED.',
    how: [
      'Drag each plug to the port with the same color and symbol.',
      'Cables behave like real rope: they bend, hang, snag and cross.',
      'Tie matching cables together, then compare before and after for up to three stars.',
    ],
    tryFirst: "Play the first job, Grandma Rosa's Router, and slide the before and after at the end.",
    repo: 'https://github.com/fafidesplas/coolmath-cable-tidy',
    versions: [
      {
        url: 'https://fafidesplas.github.io/coolmath-cable-tidy/',
        img: 'img/cable-calm.webp',
        alt: 'A café router on a brick wall with tangled blue and black cables hanging from the wrong ports',
        controls: [
          ['Drag', 'Move a plug or a cable'],
          ['Release near a port', 'Plug in'],
          ['T', 'Cable tie, then click where it goes'],
          ['Click a tie', 'Remove it'],
          ['Esc', 'Put the tie away'],
          ['Touch', 'Drag with a finger, tap the Tie button'],
        ],
      },
    ],
  },
  {
    slug: 'turn-ball',
    focus: '50% 42%', // part of the screenshot kept in view on the home
    name: 'Turn Ball',
    kind: 'Turn-based basketball',
    accent: '#ff8a3d',
    hook: '3x3 street hoops, one move at a time.',
    how: [
      'Every possession is a short chain of choices: shoot, dribble, pass or run a play.',
      'You see the exact odds first, while the defense picks its answer without seeing yours.',
      'Win duels to fill the fire meter and unlock signature specials.',
    ],
    tryFirst: 'Press Play and follow the short guided tutorial of the first match.',
    repo: 'https://github.com/fafidesplas/coolmath-turn-ball',
    versions: [
      {
        id: 'pixel',
        label: 'Pixel edition',
        url: 'https://fafidesplas.github.io/coolmath-turn-ball/pixel/',
        img: 'img/turn-ball.webp',
        alt: 'Pixel-art half court with a score of 2 to 0 and the banner Score +2 next to the move menu',
        controls: [
          ['Click or tap', 'Pick a move, then OK'],
          ['Arrow keys', 'Move through the menu'],
          ['Enter, Space or Z', 'Confirm'],
          ['Esc, Backspace or X', 'Go back'],
          ['1 to 9', 'Pick a row, again to confirm'],
        ],
      },
      {
        id: '3d',
        label: 'Classic 3D',
        url: 'https://fafidesplas.github.io/coolmath-turn-ball/',
        img: 'img/turn-ball-3d.webp',
        alt: '3D outdoor half court seen from above with two teams of three and the four action buttons',
        controls: [
          ['Click or tap', 'Preview, again or GO to confirm'],
          ['S P D C', 'Shoot, pass, drive, play'],
          ['Q W E R', 'Techniques'],
          ['1 to 9', 'Targets and stances'],
          ['Enter', 'Confirm'],
          ['Esc', 'Go back'],
        ],
        how: [
          'Every possession is a short chain of choices: shoot, pass, drive or run a play.',
          'Select any option to see its route and the exact odds, then commit.',
          'Players level up and learn new techniques for a few equip slots.',
        ],
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
      'Slash, block and parry: a well-timed swing sends arrows back.',
      'One hit and you shatter. Clear five waves of crystal knights.',
    ],
    tryFirst: 'Stop in front of an archer, wait for the arrow to get close, then block to send it back.',
    note: 'The game captures the mouse. Press Esc to get it back.',
    repo: 'https://github.com/fafidesplas/coolmath-slowmo-arena',
    versions: [
      {
        url: 'https://fafidesplas.github.io/coolmath-slowmo-arena/',
        img: 'img/slowsteel.webp',
        alt: 'First-person view of a castle courtyard with two red low-poly knights and a raised sword',
        controls: [
          ['WASD or arrows', 'Move'],
          ['Mouse', 'Look'],
          ['Left click or F', 'Slash'],
          ['Right click or Shift', 'Block and parry'],
          ['Q', 'Fireball'],
          ['E', 'Force push'],
          ['R', 'Restart the wave'],
          ['Touch', 'Left thumb moves, right side looks'],
        ],
      },
    ],
  },
];
