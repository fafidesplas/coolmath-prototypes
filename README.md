# Game prototypes

A dashboard to present the playable prototypes one by one.

**Open it:** https://fafidesplas.github.io/coolmath-prototypes/

| # | Prototype | Repository |
|---|---|---|
| 1 | Groove Critters (music maker) | [coolmath-music-maker](https://github.com/fafidesplas/coolmath-music-maker) |
| 2 | Cable Calm (cozy job simulator) | [coolmath-cable-tidy](https://github.com/fafidesplas/coolmath-cable-tidy) |
| 3 | Turn Ball (turn-based basketball) | [coolmath-turn-ball](https://github.com/fafidesplas/coolmath-turn-ball) |
| 4 | Slowsteel (slow-motion arena) | [coolmath-slowmo-arena](https://github.com/fafidesplas/coolmath-slowmo-arena) |

## Presenting

- The home shows every prototype. Press its number, or click it, to open the brief.
- **Play** runs the game inside the page. **Next** goes to the following prototype and stops the current one.
- On the brief: `Enter` plays, left and right arrows change prototype, `Esc` goes home. While playing, every key belongs to the game; use the top bar.
- Turn Ball opens straight on its own mode menu. **Menu** in the top bar goes back to it from any mode.
- Link straight to one: `#groove-critters`, `#cable-calm`, `#turn-ball`, `#slowsteel`.

## How it works

Plain HTML, CSS and JavaScript, no build step. Each game is loaded from its own GitHub Pages, so the dashboard always shows whatever that repo has published, with its build date.

**Never copy a game build into this repo.** Turn Ball's art is licensed and may not be redistributed.

To change or add a prototype, edit `prototypes.js` and put a 1600x900 `.webp` screenshot in `img/`.

## Run locally

```bash
python3 -m http.server 8080
```
