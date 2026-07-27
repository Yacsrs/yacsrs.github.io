# YACSRS Website — Launch Instructions

This is a complete, mobile-friendly static website for:

**The Yemeni American Center for Strategic and Regional Studies (YACSRS)**

## Fastest completely free launch: GitHub Pages

1. Create a free account at GitHub.
2. Click **New repository**.
3. Name it `yacsrs`.
4. Set it to **Public**.
5. Upload every file and the `assets` folder from this package.
6. Open **Settings → Pages**.
7. Under “Build and deployment,” choose **Deploy from a branch**.
8. Select the `main` branch and `/root`, then save.
9. GitHub will give you an address similar to:
   `https://yourusername.github.io/yacsrs/`

No coding or paid hosting is required.

## Change the email and social links

Open `site-config.js` and replace:

    email: "yacsrs@gmail.com"

with the Gmail address you actually created.

Replace each `"#"` social link after the Center’s accounts are created.

## Update publications

Open `publications.html`. Replace “Planned publication” with links to your final PDF files only after review.

You can upload PDFs into a new folder named `publications`, then link them like:

    <a href="publications/report-name.pdf">Download PDF</a>

## Important credibility note

The website intentionally describes YACSRS as an **emerging online research initiative**. Do not claim staff, offices, partnerships, government recognition, peer review, or completed publications until they genuinely exist.

## Google Sites limitation

Google Sites cannot import this entire website from HTML/CSS. You could manually copy the text into Google Sites, but GitHub Pages preserves the professional design and remains free.

## Files

- `index.html` — homepage
- `about.html` — mission, vision, and principles
- `research.html` — research programs and methodology
- `publications.html` — first-year editorial agenda
- `contact.html` — inquiry page
- `styles.css` — all design styling
- `site-config.js` — email/social settings
- `script.js` — mobile menu and contact form
- `assets/yacsrs-logo.png` — logo
