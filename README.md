# ⚽ Soccer Verse

A complete static soccer fan website featuring live match results, upcoming fixtures, player profiles, and a photo gallery — all wrapped in a sleek dark-and-gold design.

---

**🔗 Live Demo:** [https://daniyal-khan-soccer-verse.netlify.app/](https://daniyal-khan-soccer-verse.netlify.app/)

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/daniyal-khan-dev/soccer-verse.git

# Navigate to project directory
cd soccer-verse
```

## 🌐 Live Pages

| Page | Description |
|------|-------------|
| `index.html` | Home — hero, stats bar, match result, about, top players, highlights, gallery, contact & feedback |
| `matches.html` | Matches — result card, countdown to next match, upcoming fixtures, league table, lineups & stats |
| `gallery.html` | Gallery — filterable photo grid with full lightbox viewer |
| `players.html` | Top Players — searchable, filterable roster of 24 players |

---

## ✨ Features

- **Page Loader** — animated soccer ball spinner that fades out on load
- **Scroll Reveal Animations** — elements slide and fade in as you scroll using IntersectionObserver
- **Animated Stat Counters** — numbers count up from 0 when the stats bar enters the viewport
- **Match Countdown** — live countdown timer to the next match
- **Gallery Lightbox** — click any photo to open a full-screen viewer with keyboard navigation
- **Player Search & Filter** — search by name/position and filter by role (GK, DEF, MID, FWD, ATK)
- **Contact & Feedback Forms** — with star rating, validation, and success/reset flow
- **Fully Responsive** — mobile-first layout using Bootstrap 5

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Page structure |
| CSS3 + custom `stylle.css` + `animations.css` | Styling & animations |
| Vanilla JavaScript (`script.js`) | Interactivity, counters, countdown, forms |
| Bootstrap 5 | Grid & UI components |
| Font Awesome 6 | Icons |
| Google Fonts — Poppins & Nunito | Typography |
| Python `http.server` | Local development server |

---

## 📁 Project Structure

```
soccer-verse/
│
├── assets 
│    ├── css /
│    │    ├── stylle.css          # Main stylesheet
│    │    └── animations.css      # Loader & scroll animations
│    ├── img /
│    │    ├── logo/           # Site logo
│    │    ├── banner/         # Hero banner images
│    │    ├── players/        # Player photos (player-1.jpg … player-24.jpg)
│    │    ├── team/           # Team & match action photos
│    │    ├── card/           # Team badge images
│    │    ├── about/          # About section images
│    │    └── website-ss/     # Website Home Screen shot
│    └── js /
│        └──  script.js           # All JavaScript logic
│ 
├── index.html          # Home page
├── matches.html        # Matches page
├── gallery.html        # Gallery page
└── players.html        # Top Players page

```

---

## 📋 Pages Overview

### Home (`index.html`)
- Full-screen hero section with call-to-action buttons
- Animated stats bar: **128+ Matches**, **48 Teams**, **320+ Players**, **12 Leagues**
- Today's match result card with scores and team logos
- About section with highlights
- Season stats banner
- Top 6 featured players
- Photo gallery preview
- Contact form (name, email, subject, message)
- Feedback form with 5-star rating

### Matches (`matches.html`)
- Full-time result card
- Countdown timer to next match (July 20, 2026)
- 4 upcoming fixture cards
- Tabbed match info panel:
  - **League Table** — standings with points, goals, form
  - **Lineups** — starting XI for both teams
  - **Statistics** — animated stat bars (possession, shots, passes, etc.)

### Gallery (`gallery.html`)
- Masonry-style photo grid with 16 images
- Filter buttons: All Photos / Match Action / Teams / Stadium
- Lightbox with prev/next navigation and keyboard support (← → Esc)

### Top Players (`players.html`)
- 24 player cards with photo, jersey number, team, position, goals, assists, rating
- Live search bar
- Position filter: All / Goalkeeper / Defender / Midfielder / Forward / Attacker

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary background | `#111418` |
| Secondary background | `#1a1e24` |
| Gold accent | `#c9a227` |
| Gold light | `#f0c84a` |
| Primary font | Poppins |
| Body font | Nunito |

---

## 👨‍💻 Author

**M. Daniyal**
- GitHub: https://github.com/daniyal-khan-dev
- LinkedIn: www.linkedin.com/in/m-daniyal-khan
- Email: daniyalkhan0445@gmail.com

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact via email
- Connect on LinkedIn

<div align="center">
  <h3>🌟 If you found this project helpful, please give it a star! 🌟</h3>
  
  [![Live Demo](https://img.shields.io/badge/View%20Live%20Demo-Soccer%20Verse-orange?style=for-the-badge&logo=netlify)](https://daniyal-khan-soccer-verse.netlify.app/)
  
  <img src="assets/img/website-ss/soccerVerse.png" alt="Pearl Fast Food Website Preview" width="400px" style="border-radius: 10px; margin-top: 20px;">
</div>
