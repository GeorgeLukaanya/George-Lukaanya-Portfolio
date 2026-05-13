# George Lukaanya — Portfolio Website

A personal portfolio website showcasing projects, skills, and experience as a Software Engineer & ML Researcher.

## Quick Start

No build tools required. Just open `index.html` in any modern browser.

```bash
# Option 1: Open directly
open index.html

# Option 2: Serve locally (Python)
python3 -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Serve locally (Node.js)
npx serve .
```

## Deployment

### GitHub Pages (Free)
1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages → Source** → select `main` branch.
3. Your site will be live at `https://georgelukaanya.github.io/<repo-name>`.

### Netlify (Free)
1. Go to [netlify.com](https://www.netlify.com/) and sign in with GitHub.
2. Click **"Add new site" → "Deploy manually"**.
3. Drag and drop this entire folder.
4. Your site goes live instantly with a free `.netlify.app` URL.

### Vercel (Free)
1. Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
2. Import your repository or drag and drop the folder.
3. Done — live at a `.vercel.app` URL.

## File Structure

```
portfolio/
├── index.html          # Main HTML page
├── assets/
│   ├── style.css       # All styles & responsive design
│   ├── data.js         # Projects, skills, experience data
│   └── main.js         # Terminal animation, scroll effects, rendering
└── README.md           # This file
```

## Customisation

- **Edit your info**: Update `assets/data.js` to change projects, skills, and experience.
- **Change colours**: Edit the CSS variables at the top of `assets/style.css`.
- **Add a project**: Add an object to `PROJECTS_DATA` in `data.js`.
- **Add a photo**: Place an image in `assets/` and add an `<img>` tag in `index.html`.

## Tech Stack

- Pure HTML, CSS, JavaScript — no frameworks, no build step
- Google Fonts (Outfit + JetBrains Mono)
- CSS custom properties for theming
- Intersection Observer API for scroll animations

## License

This portfolio is personal to George Lukaanya. Feel free to use the structure as a template for your own portfolio.
