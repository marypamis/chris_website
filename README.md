# Chris Rohan Portfolio

A modern, responsive personal website built with Angularv 16+ for Chris Rohan, showcasing academic achievements, coding projects, and math tutoring services.

## Features
- **Responsive Design**: Blue Modern theme.
- **Dynamic Content**: Rotating quotes, grid layouts.
- **Math Tutoring Form**: Integrated with Netlify Forms.
- **Gallery**: Photo and Video sections.

## Development

1. **Install Dependencies**: `npm install`
2. **Run Locally**: `ng serve` (Access at `http://localhost:4200`)
3. **Build**: `ng build --configuration production`

## Deployment

This site is configured for automatic deployment on Netlify via GitHub.

1. **Push to GitHub**:
    ```bash
    git add .
    git commit -m "Initial commit"
    git push origin main
    ```
2. **Netlify**:
    - Connect the repository `marypamis/chris_website`.
    - Build settings are automatically detected via `netlify.toml`.

## Updating Content

- **Home Quote**: Edit `src/app/pages/home/home.ts`.
- **Achievements**: Edit `src/app/pages/achievements/achievements.html`.
- **Interests**: Edit `src/app/pages/interests/interests.html`.
- **Photos/Videos**: Edit `photos.html` or `videos.html`.
- **Tutoring Form Fields**: Edit `tutoring.html`.

## Design
- **Colors**: Defined in `src/styles.scss` (`--primary-color: #3A7AFE`).
- **Logo**: `src/assets/logo.svg`.
