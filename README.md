# Mehaa Eswaran — Personal Portfolio

A responsive single-page personal portfolio built with **HTML5, CSS3 and Vanilla JavaScript**. The site intentionally uses no frontend frameworks or third-party UI libraries.

## 1. Project structure

```text
mehaa-portfolio/
├── index.html
├── css/
│   ├── theme.css
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── portrait-placeholder.svg
│   ├── family-placeholder.svg
│   ├── hobby-placeholder.svg
│   └── favicon.svg
├── scripts/
│   └── validate.js
└── .github/
    └── workflows/
        ├── validate.yml
        ├── deploy.yml
        ├── pr-checks.yml
        ├── lighthouse.yml
        └── notify.yml
```

## 2. Run locally

No installation or build step is required.

1. Extract the ZIP.
2. Open the `mehaa-portfolio` folder in Visual Studio Code.
3. Open `index.html` in a browser. You can also use VS Code Live Server if it is already installed.
4. Edit the HTML, CSS and JavaScript files and refresh the browser.

To run the built-in project checks (Node.js required):

```bash
node scripts/validate.js
node --check js/main.js
```

## 3. Personalise before publishing

Search in `index.html` for these placeholders and replace them:

- `YOUR_EMAIL@example.com` — your real email address.
- `YOUR_GITHUB_USERNAME` — your GitHub username.
- Replace `images/portrait-placeholder.svg` with your portrait. Keep the same filename or update the image path in `index.html`.
- Replace `images/family-placeholder.svg` with your family photo. Keep the same filename or update the path.
- Replace `images/hobby-placeholder.svg` if you prefer your own hobby photograph.

The portfolio currently uses only the personal information shared in the supplied conversation. Confirm every detail before making the site public.

## 4. Included interactions

- Responsive navigation menu for smaller screens.
- Light/dark theme toggle; preference is saved in browser local storage.
- Scroll-triggered entrance animations using `IntersectionObserver`.
- Click/tap expandable interest cards.
- Accessible dialog panels for hobby and family-image descriptions.
- Reduced-motion support for visitors who request less animation.

## 5. GitHub repository and branching workflow

Suggested branch model:

- `main` — stable, deployable portfolio.
- `develop` — integration branch.
- `feature/<short-name>` — one change at a time, for example `feature/family-gallery`.

Suggested commands:

```bash
git init
git add .
git commit -m "Create personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/mehaa-portfolio.git
git push -u origin main

git checkout -b develop
git push -u origin develop
```

For a change, create a feature branch from `develop`, commit your work, push the branch and open a pull request into `develop`. After review and successful checks, merge to `develop`; when the site is ready to publish, merge `develop` into `main`.

## 6. GitHub Pages deployment

1. Create a GitHub repository named `mehaa-portfolio`.
2. Push this project to the `main` branch.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions** as the source.
5. Open **Actions** and allow the workflows to run.
6. The `Deploy portfolio to GitHub Pages` workflow publishes the site. The deployed URL appears in the workflow run and in **Settings → Pages**.

The Lighthouse workflow audits the repository's GitHub Pages URL after a successful deployment. If you use a custom domain or a different repository setup, update the URL in `.github/workflows/lighthouse.yml`.

## 7. GitHub Actions workflows

| Workflow | Purpose |
|---|---|
| `validate.yml` | Checks that key files exist and validates basic HTML hooks. |
| `deploy.yml` | Validates and deploys the static site to GitHub Pages. |
| `pr-checks.yml` | Runs structural checks and JavaScript syntax checks for pull requests. |
| `lighthouse.yml` | Runs a Lighthouse CI audit against the deployed Pages URL. |
| `notify.yml` | Writes workflow status to the GitHub Actions summary. Supports an optional webhook secret. |

### Optional webhook notification

The notification workflow always writes a result summary. To send a message to a compatible webhook endpoint as well, add a repository secret named `PORTFOLIO_NOTIFY_WEBHOOK` under **Settings → Secrets and variables → Actions**.

## 8. Accessibility and compatibility notes

- Semantic landmarks, navigation labels and image alternative text are included.
- Interactive elements are buttons or links and can be reached with a keyboard.
- The site includes a skip link and visible focus treatment.
- `prefers-reduced-motion` is respected.
- Test the finished site in current desktop and mobile browsers before submission.

## 9. Important notes

- The included SVGs are original visual placeholders, not personal photographs.
- Email and GitHub links are intentionally placeholders until you provide the real values.
- The CI workflows are included as project files; their successful execution and the published Pages URL can only be confirmed after the repository is pushed to your GitHub account.
- No private family photos or personal contact details are included in this ZIP.
