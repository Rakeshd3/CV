# Rakesh Dash — Personal Portfolio

**Senior Data Engineer · Analytics Engineer · Course Creator · AstroVeda**

🌐 Live site: [rakeshd3.github.io/CV](https://rakeshd3.github.io/CV)

---

## Pages

| Page | URL | Description |
|---|---|---|
| Home | `/` | Hero, experience timeline, skills, projects |
| Courses | `/courses.html` | 100 Days of Data Engineering + upcoming courses |
| AstroVeda | `/astroveda.html` | Vedic astrology platform project |
| Resume | `/resume.html` | PIN-protected resume download (private) |

## Project Structure

```
CV/
├── index.html          → Main portfolio
├── courses.html        → Courses & content hub
├── astroveda.html      → AstroVeda Vedic astrology page
├── resume.html         → PIN-protected resume access
├── 404.html            → Custom 404 page
├── site.webmanifest    → PWA manifest
├── .nojekyll           → Disables Jekyll (plain HTML site)
├── css/
│   └── style.css       → All styles
├── js/
│   └── main.js         → All JavaScript + resume generators
└── images/
    ├── my_img.jpg      → Profile photo
    ├── rakesh.png      → Alt profile photo
    ├── favicon-*.png   → Favicon files
    ├── apple-touch-icon.png
    ├── android-chrome-*.png
    └── site.webmanifest
```

## Setup

1. Clone / download this repo
2. Add your photos to `images/` folder
3. Change the PIN in `js/main.js` line 5: `const SECRET_PIN = 'YOUR_PIN';`
4. Update course enrollment links in `courses.html`
5. Push to GitHub — GitHub Pages serves it automatically

## Resume Download

The `/resume.html` page is PIN-protected. After unlocking, it generates and downloads:
- **DE ATS Classic** — Senior Data Engineer, bank/enterprise ATS safe
- **DE Tech Modern** — Senior Data Engineer, startup/tech style
- **AE ATS Classic** — Analytics Engineer, ATS safe
- **AE Tech Modern** — Analytics Engineer, tech style

Open any downloaded `.html` file in Chrome → Ctrl+P → Save as PDF.

## Tech Stack

Pure HTML, CSS, JavaScript — no build step, no framework, no dependencies.
Works directly with GitHub Pages.

---

*Rakesh Dash · Bengaluru, India · rakeshdash6180@gmail.com*
