# Nadia Farah Dhiba

Personal resume site. Static HTML, CSS, and one JavaScript file. No build step.

Live page: https://nadiafarahdhiba.github.io/work-resume/

A push to `main` also updates the Netlify site.

## Edit the page

All of the copy is in `js/main.js`, inside the `RESUME` object.

- Email, city, and phone: `contact.email`, `contact.city`, `contact.phone`. Leave the phone empty and that row stays hidden.
- School: `education.degree`, `education.school`, `education.years`.
- A job's details are its `bullets` array.
- Tools: add a name to the matching `items` list. A name with a side note is `{ name, note }`.
- Certifications: add a line to `certifications`. An empty list stays hidden.
- Portrait: replace `images/nadia.jpg`.

Open `index.html` in a browser, or from this folder run:

```bash
python3 -m http.server
```

## Files

- `index.html` — the page
- `css/styles.css` — layout
- `js/main.js` — the words
- `images/nadia.jpg` — the portrait
