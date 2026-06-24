// ===== PAGE LOADER =====
(function () {
  const loader = document.getElementById('sv-loader');
  if (!loader) return;
  window.addEventListener('load', function () {
    setTimeout(function () {
      loader.classList.add('hidden');
    }, 600);
  });
  // Fallback: hide after 3s regardless
  setTimeout(function () {
    if (loader) loader.classList.add('hidden');
  }, 3000);
})();

// ===== SCROLL REVEAL (IntersectionObserver) =====
(function () {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(function (el) { observer.observe(el); });
})();

// ===== STAT COUNTER ANIMATION =====
(function () {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out: fast start, slow finish
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current + (progress < 1 ? '' : suffix);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(function (el) { observer.observe(el); });
})();

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', function () {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ===== TYPED.JS ANIMATION =====
if (document.querySelector('.multiple-text')) {
  new Typed('.multiple-text', {
    strings: ['Soccer Verse', 'Soccer Verse', 'Soccer Verse'],
    typeSpeed: 90,
    backSpeed: 60,
    backDelay: 1800,
    loop: true,
  });
}

// ===== COUNTDOWN TIMER =====
(function () {
  if (!document.getElementById('days')) return;

  function startCountdown() {
    const nextMatch = new Date('July 20, 2026 09:30:00 GMT+0').getTime();

    function update() {
      const now = Date.now();
      const dist = nextMatch - now;

      if (dist <= 0) {
        document.getElementById('days').innerText    = '00';
        document.getElementById('hours').innerText   = '00';
        document.getElementById('minutes').innerText = '00';
        document.getElementById('seconds').innerText = '00';
        return;
      }

      const d  = Math.floor(dist / (1000 * 60 * 60 * 24));
      const h  = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m  = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      const s  = Math.floor((dist % (1000 * 60)) / 1000);

      document.getElementById('days').innerText    = String(d).padStart(2, '0');
      document.getElementById('hours').innerText   = String(h).padStart(2, '0');
      document.getElementById('minutes').innerText = String(m).padStart(2, '0');
      document.getElementById('seconds').innerText = String(s).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  }

  startCountdown();
})();

// ===== MATCH INFO TABS =====
document.querySelectorAll('.match-tab-link').forEach(function (tab) {
  tab.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelectorAll('.match-tab-link').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    this.classList.add('active');
    const target = this.getAttribute('href');
    const pane = document.querySelector(target);
    if (pane) pane.classList.add('active');
  });
});

// ===== LEAGUE TABLE DATA =====
(function () {
  const body = document.getElementById('leagueTableBody');
  if (!body) return;

  const teams = [
    { pos: 1, name: 'Carolina Panthers', league: 'Premium League', played: 20, wins: 17, losses: 1, draws: 2, goals: 40 },
    { pos: 2, name: 'Detroit Lions',     league: 'Premium League', played: 20, wins: 15, losses: 2, draws: 3, goals: 36 },
    { pos: 3, name: 'Chicago Bears',     league: 'Premium League', played: 20, wins: 13, losses: 5, draws: 2, goals: 30 },
    { pos: 4, name: 'Dallas Cowboys',    league: 'Premium League', played: 20, wins: 10, losses: 5, draws: 5, goals: 25 },
    { pos: 5, name: 'Atlanta Falcons',   league: 'Premier League', played: 20, wins: 8,  losses: 7, draws: 5, goals: 22 },
    { pos: 6, name: 'Green Bay Packers', league: 'Premium League', played: 20, wins: 7,  losses: 9, draws: 4, goals: 19 },
  ];

  const posLabels = ['🥇', '🥈', '🥉'];

  body.innerHTML = teams.map(function (t) {
    const pts = t.wins * 3 + t.draws;
    const posDisplay = posLabels[t.pos - 1] || t.pos;
    return '<tr>' +
      '<td>' + posDisplay + '</td>' +
      '<td>' + t.name + '</td>' +
      '<td>' + t.league + '</td>' +
      '<td>' + t.played + '</td>' +
      '<td>' + t.wins + '</td>' +
      '<td>' + t.losses + '</td>' +
      '<td>' + t.draws + '</td>' +
      '<td>' + t.goals + '</td>' +
      '<td><strong style="color:var(--gold)">' + pts + '</strong></td>' +
      '</tr>';
  }).join('');
})();

// ===== LINEUP DATA =====
(function () {
  const body1 = document.getElementById('lineup1Body');
  const body2 = document.getElementById('lineup2Body');
  if (!body1 || !body2) return;

  const fteam1 = [
    { name: 'David Johnson',       formation: 'Goalkeeper' },
    { name: 'David Watson',        formation: 'Defender' },
    { name: 'Alex Mitchell',       formation: 'Midfielder' },
    { name: 'Sophie Williams',     formation: 'Forward' },
    { name: 'James Miller',        formation: 'Defender' },
    { name: 'Cristiano Ronaldo',   formation: 'Attacker' },
    { name: 'Bernardo Silva',      formation: 'Left Mid' },
    { name: 'Rúben Dias',          formation: 'Right Mid' },
    { name: 'Bruno Fernandes',     formation: 'Attacker' },
    { name: 'Alex Crumia',         formation: 'Right Attacker' },
  ];

  const fteam2 = [
    { name: 'Thomas Green',   formation: 'Goalkeeper' },
    { name: 'Laura Johnson',  formation: 'Defender' },
    { name: 'Ahmed Rahman',   formation: 'Midfielder' },
    { name: 'Chloe Wilson',   formation: 'Forward' },
    { name: 'Sophie Turner',  formation: 'Defender' },
    { name: 'Lionel Messi',   formation: 'Attacker' },
    { name: 'Paulo Dybala',   formation: 'Defender' },
    { name: 'L. Martínez',    formation: 'Attacker' },
    { name: 'E. Martínez',    formation: 'Left Mid' },
    { name: 'Nico González',  formation: 'Right Mid' },
  ];

  function posIcon(pos) {
    const p = pos.toLowerCase();
    if (p.includes('goal'))    return '🧤';
    if (p.includes('defend'))  return '🛡️';
    if (p.includes('mid'))     return '⚙️';
    return '⚡';
  }

  body1.innerHTML = fteam1.map(function (p, i) {
    return '<tr><td>' + (i + 1) + '</td><td>' + p.name + '</td><td>' + posIcon(p.formation) + ' ' + p.formation + '</td></tr>';
  }).join('');

  body2.innerHTML = fteam2.map(function (p, i) {
    return '<tr><td>' + (i + 1) + '</td><td>' + p.name + '</td><td>' + posIcon(p.formation) + ' ' + p.formation + '</td></tr>';
  }).join('');
})();

// ===== MATCH STATISTICS DATA =====
(function () {
  const grid = document.getElementById('statsGrid');
  if (!grid) return;

  const stats = [
    { team: 'Detroit Lions',      goals: 2, shots: 10, possession: 58, fouls: 12, corners: 5, redcards: 0 },
    { team: 'Green Bay Packers',  goals: 4, shots: 6,  possession: 38, fouls: 8,  corners: 2, redcards: 1 },
    { team: 'Minnesota Vikings',  goals: 3, shots: 43, possession: 23, fouls: 11, corners: 3, redcards: 0 },
    { team: 'Carolina Panthers',  goals: 4, shots: 18, possession: 59, fouls: 9,  corners: 1, redcards: 2 },
    { team: 'Atlanta Falcons',    goals: 3, shots: 60, possession: 38, fouls: 7,  corners: 2, redcards: 4 },
  ];

  grid.innerHTML = stats.map(function (s) {
    const rows = [
      { key: 'Goals',       icon: 'fas fa-futbol',    val: s.goals,       max: 6 },
      { key: 'Shots',       icon: 'fas fa-crosshairs',val: s.shots,       max: 70 },
      { key: 'Possession',  icon: 'fas fa-circle',    val: s.possession,  max: 100, suffix: '%' },
      { key: 'Fouls',       icon: 'fas fa-exclamation-triangle', val: s.fouls, max: 20 },
      { key: 'Corners',     icon: 'fas fa-flag',      val: s.corners,     max: 10 },
      { key: 'Red Cards',   icon: 'fas fa-square',    val: s.redcards,    max: 5 },
    ];

    const rowsHtml = rows.map(function (r) {
      const pct = Math.min(100, Math.round((r.val / r.max) * 100));
      return '<div class="stat-row">' +
        '<span class="stat-key"><i class="' + r.icon + '"></i>' + r.key + '</span>' +
        '<div class="stat-bar-wrap"><div class="stat-bar-fill" style="width:' + pct + '%"></div></div>' +
        '<span class="stat-val">' + r.val + (r.suffix || '') + '</span>' +
        '</div>';
    }).join('');

    return '<div class="stat-card">' +
      '<div class="stat-card-team"><i class="fas fa-shield-alt"></i>' + s.team + '</div>' +
      rowsHtml +
      '</div>';
  }).join('');
})();

// ===== STAR RATING =====
(function () {
  const stars = document.querySelectorAll('#starRating i');
  if (!stars.length) return;
  let selected = 0;

  stars.forEach(function (star) {
    star.addEventListener('mouseenter', function () {
      const val = +this.getAttribute('data-val');
      stars.forEach(function (s) {
        s.classList.toggle('active', +s.getAttribute('data-val') <= val);
      });
    });
    star.addEventListener('mouseleave', function () {
      stars.forEach(function (s) {
        s.classList.toggle('active', +s.getAttribute('data-val') <= selected);
      });
    });
    star.addEventListener('click', function () {
      selected = +this.getAttribute('data-val');
      stars.forEach(function (s) {
        s.classList.toggle('active', +s.getAttribute('data-val') <= selected);
      });
    });
  });
})();

// ===== FORM HANDLER =====
function handleForm(e, formId) {
  e.preventDefault();
  const form = document.getElementById(formId);
  const successId = formId === 'contactForm' ? 'contactSuccess' : 'feedbackSuccess';
  const success = document.getElementById(successId);
  if (form && success) {
    form.style.display = 'none';
    success.style.display = 'block';
  }
}

// ===== RESET FORM =====
function resetForm(formId, successId) {
  const form = document.getElementById(formId);
  const success = document.getElementById(successId);
  if (form && success) {
    form.reset();
    // Reset star rating if in feedback form
    if (formId === 'feedbackForm') {
      document.querySelectorAll('#starRating i').forEach(function (s) {
        s.classList.remove('active');
      });
    }
    success.style.display = 'none';
    form.style.display = 'block';
  }
}
