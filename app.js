(() => {
  const GAMES = window.PROTOTYPES;
  const app = document.getElementById('app');
  const builds = new Map(); // url -> { ok, date }

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const icon = (d) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg>`;
  const I = {
    home: icon('M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z'),
    prev: icon('M15 5l-7 7 7 7'),
    next: icon('M9 5l7 7-7 7'),
    restart: icon('M4 12a8 8 0 1 0 2.4-5.7M4 4v5h5'),
    keys: icon('M3 7h18v10H3zM7 11h.01M11 11h.01M15 11h.01M8 14h8'),
    open: icon('M14 4h6v6M20 4l-9 9M18 14v6H4V6h6'),
    full: icon('M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5'),
    stop: icon('M10 6L4 12l6 6M4 12h16'),
  };

  // ---- routes: "" is the home, "#slug" a game, "#slug/version" one of its versions
  let playing = false;

  function route() {
    const [slug, vid] = location.hash.replace(/^#\/?/, '').split('/');
    const index = GAMES.findIndex((g) => g.slug === slug);
    if (index < 0) return { index: -1 };
    const game = GAMES[index];
    const version = game.versions.find((v) => v.id === vid) || game.versions[0];
    return { index, game, version };
  }
  const link = (game, version) => `#${game.slug}${version && version.id && version !== game.versions[0] ? '/' + version.id : ''}`;
  const go = (index) => { location.hash = link(GAMES[(index + GAMES.length) % GAMES.length]); };

  // ---- when was each build published (read from the live page itself)
  async function checkBuild(url) {
    if (builds.has(url)) return builds.get(url);
    const info = { ok: true, date: null };
    builds.set(url, info);
    try {
      const res = await fetch(url, { method: 'HEAD', cache: 'no-cache' });
      info.ok = res.ok;
      const stamp = Date.parse(res.headers.get('last-modified') || '');
      if (!Number.isNaN(stamp)) info.date = new Date(stamp);
    } catch {
      info.ok = false;
    }
    return info;
  }
  const day = (d) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  function fillBuilds() {
    document.querySelectorAll('[data-build]').forEach(async (el) => {
      const info = await checkBuild(el.dataset.build);
      if (!info.ok) {
        el.textContent = 'Not reachable right now';
        const warn = document.querySelector('[data-warn]');
        if (warn) warn.hidden = false;
      } else if (info.date) el.textContent = `Build of ${day(info.date)}`;
    });
  }

  const controls = (version) => `<dl class="controls">${version.controls.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>`;

  // ---- home
  function renderHome() {
    document.title = 'Game prototypes';
    app.innerHTML = `<main class="home">
      <header class="home-head">
        <h1 class="wide">Game prototypes</h1>
        <p class="keys">Press ${GAMES.map((_, i) => `<kbd>${i + 1}</kbd>`).join(' ')} to open one</p>
      </header>
      <div class="grid">${GAMES.map((g, i) => `
        <a class="tile" href="${link(g)}" style="--accent:${g.accent}">
          <div class="pic"><img src="${g.versions[0].img}" alt="${esc(g.versions[0].alt)}" width="1600" height="900" style="object-position:${g.focus || '50% 50%'}"></div>
          <div class="tile-text">
            <kbd aria-hidden="true">${i + 1}</kbd>
            <h2 class="wide">${esc(g.name)}</h2>
            <p>${esc(g.hook)}</p>
            <p class="meta">${esc(g.kind)} <span data-build="${g.versions[0].url}">Playable</span></p>
          </div>
        </a>`).join('')}
      </div>
    </main>`;
    fillBuilds();
  }

  // ---- one game: brief, or the game itself
  function bar({ index, game, version }) {
    const seg = game.versions.length > 1
      ? `<div class="seg" role="group" aria-label="Version">${game.versions.map((v) => `<a class="btn" href="${link(game, v)}" aria-current="${v === version}">${esc(v.label)}</a>`).join('')}</div>` : '';
    const inGame = game.menu ? `
      <button class="btn" data-do="restart" title="Back to the mode menu">${I.stop}<span>Menu</span></button>` : playing ? `
      <button class="btn" data-do="stop" title="Back to the brief">${I.stop}<span class="label">Brief</span></button>
      <button class="btn hide-s" data-do="restart" title="Reload the game">${I.restart}<span class="label">Reload</span></button>
      <button class="btn" data-do="drawer" aria-pressed="false" title="Controls">${I.keys}<span class="label">Controls</span></button>` : '';
    return `<nav class="bar" aria-label="Presentation">
      <a class="btn" href="#" title="All prototypes" aria-label="All prototypes">${I.home}</a>
      <div class="now"><b class="wide">${esc(game.name)}</b><span>${index + 1} of ${GAMES.length}</span></div>
      ${seg}
      <div class="gap"></div>
      ${inGame}
      <a class="btn hide-s" href="${version.url}" target="_blank" rel="noopener" title="Open in a new tab" aria-label="Open in a new tab">${I.open}</a>
      <button class="btn hide-s" data-do="full" title="Full screen" aria-label="Full screen">${I.full}</button>
      <button class="btn" data-do="prev" title="Previous prototype" aria-label="Previous prototype">${I.prev}</button>
      <button class="btn" data-do="next" title="Next prototype"><span class="label">Next</span>${I.next}</button>
    </nav>`;
  }

  function renderGame(r) {
    const { game, version } = r;
    if (game.menu) playing = true;
    document.title = `${game.name} · Game prototypes`;
    const how = version.how || game.how;
    const note = game.note ? `<p class="try">${esc(game.note)}</p>` : '';
    const drawer = version.controls ? `<aside class="drawer" hidden aria-label="Controls"><h2 class="wide">Controls</h2>${controls(version)}${note}</aside>` : '';
    const body = playing ? `
      <section class="stage">
        <div class="loading"><p>Loading ${esc(game.name)}…</p></div>
        ${drawer}
      </section>` : `
      <main class="brief">
        <div class="pitch">
          <div><p class="kind">${esc(game.kind)}</p><h1 class="wide">${esc(game.name)}</h1></div>
          <p class="hook">${esc(game.hook)}</p>
          <button class="play" data-do="play"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4l14 8-14 8z"/></svg>Play</button>
          <p class="warn" data-warn hidden>This build is not reachable right now. Try opening it in a new tab.</p>
          <ul class="how">${how.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
          <p class="try"><b>Try first:</b> ${esc(game.tryFirst)}</p>
          ${note}
        </div>
        <div class="shot">
          <img src="${version.img}" alt="${esc(version.alt)}" width="1600" height="900">
          ${controls(version)}
          <p class="foot"><span data-build="${version.url}">Playable</span><a href="${version.url}" target="_blank" rel="noopener">Direct link</a><a href="${game.repo}" target="_blank" rel="noopener">Repository</a></p>
        </div>
      </main>`;
    app.innerHTML = `<div class="game" style="--accent:${game.accent}">${bar(r)}${body}</div>`;
    if (playing) loadGame(version);
    else fillBuilds();
  }

  // A new iframe every time: leaving a game really stops its sound and frees the mouse.
  function loadGame(version) {
    const stage = app.querySelector('.stage');
    stage.querySelector('iframe')?.remove();
    const frame = document.createElement('iframe');
    frame.title = document.title;
    frame.allow = 'autoplay; fullscreen; gamepad; clipboard-write; screen-wake-lock';
    frame.addEventListener('load', () => { frame.classList.add('ready'); frame.focus(); });
    frame.src = version.url;
    stage.append(frame);
  }

  function render() {
    const r = route();
    if (r.index < 0) renderHome();
    else renderGame(r);
    window.scrollTo(0, 0);
  }

  // ---- input
  const actions = {
    play() { playing = true; render(); },
    stop() { playing = false; render(); },
    restart() { loadGame(route().version); },
    prev() { go(route().index - 1); },
    next() { go(route().index + 1); },
    full() {
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen?.().catch(() => {});
      if (playing) app.querySelector('iframe')?.focus();
    },
    drawer(btn) {
      const d = app.querySelector('.drawer');
      d.hidden = !d.hidden;
      btn.setAttribute('aria-pressed', String(!d.hidden));
      if (d.hidden) app.querySelector('iframe')?.focus();
    },
  };
  app.addEventListener('click', (ev) => {
    const el = ev.target.closest('[data-do]');
    if (el) actions[el.dataset.do](el);
  });

  // Shortcuts work on the home and on the brief. While playing, every key belongs to the game.
  document.addEventListener('keydown', (ev) => {
    if (ev.metaKey || ev.ctrlKey || ev.altKey || playing) return;
    const n = Number(ev.key);
    const { index } = route();
    if (n >= 1 && n <= GAMES.length) go(n - 1);
    else if (index < 0) return;
    else if (ev.key === 'Enter' && document.activeElement === document.body) actions.play();
    else if (ev.key === 'ArrowRight') go(index + 1);
    else if (ev.key === 'ArrowLeft') go(index - 1);
    else if (ev.key === 'Escape' && !document.fullscreenElement) location.hash = '';
  });

  window.addEventListener('hashchange', () => { playing = false; render(); });
  render();
})();
