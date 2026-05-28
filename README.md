# SpeakTech Technologies Website

Corporate website for SpeakTech Technologies LLP — IT Consulting & Digital Marketing, Jaipur, Rajasthan. Registered with Startup India and iStart (Government of Rajasthan).

## Pages

| Page | Path |
|------|------|
| Home | `index.html` |
| Services | `pages/services.html` |
| Projects | `pages/projects.html` |
| About | `pages/about.html` |
| Contact | `pages/contact.html` |

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — single stylesheet (`css/styles.css`), mobile-first
- **Vanilla JS** — navigation, form validation, hero animation (`js/main.js`, `js/hero-animation.js`)
- **Supabase** — contact form submissions stored in the `contacts` table
- **Vercel** — static hosting with automatic deploys from `main`

## Folder Structure

```
speaktech-website/
├── index.html              # Home page
├── pages/
│   ├── services.html
│   ├── projects.html
│   ├── about.html
│   └── contact.html
├── css/
│   └── styles.css          # All styles
├── js/
│   ├── config.js           # Supabase URL + key (never commit real secrets here)
│   ├── main.js             # Nav, contact form, Supabase POST
│   └── hero-animation.js   # Canvas particle animation (do not modify)
├── vercel.json             # Vercel rewrite rules
├── .gitignore
└── README.md
```

## Running Locally

Open `index.html` with the **Live Server** extension in VS Code (right-click → *Open with Live Server*).

No build step or package installation required.

## Deployment

The site deploys automatically on every `git push` to the `main` branch via Vercel.

1. Push the repo to GitHub
2. Import the repository in the Vercel dashboard
3. Leave all build settings at their defaults (static site, no framework)
4. Vercel assigns a production URL and rebuilds on every push to `main`
