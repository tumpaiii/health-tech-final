# HealthTech Founders Meetup — Next.js design preview

## Run in VS Code

1. Open **this folder** (the one containing `package.json`).
2. Run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000.

## Design
Preserves the approved full HTML preview: hero, overlapping About, image accordion, sticky Experience cards, speaker marquee, agenda, NYC collage, partners marquee, sticky registration + scrolling FAQ, and large teal footer reveal. Section source files are in `components/all-components`.

## Important limitations
This is a frontend design preview, not a production-ready registration service. Speaker names, partner identities, and the NYC venue are placeholders. The hero video and photos currently load from remote Pexels URLs because media files were not available to bundle locally. For a fully self-contained production deployment, download approved media into `src/assets/images` and `src/assets/videos`, import them, and replace remote sources. The existing interaction script preserves the HTML preview behavior and can later be refactored to React/Framer Motion. Do not upload `node_modules` or `.next` to GitHub.


## Content still awaiting confirmation
Speaker names and portraits are sample content, not a confirmed lineup. The New York City Center address is a proposed example and has not been verified as the event venue. Partner terms are not affiliated sponsors. Registration UI is frontend-only and does not collect or send entries. Social destinations require real links.


## Local media assets
Images and hero video supplied by the user are stored under `src/assets/images` and `src/assets/videos`. The Next.js components use `lib/local-media.ts` to import local assets. The standalone `preview/index.html` uses relative paths to the same assets; keep the preview folder inside the project.

Two photo IDs referenced in the original preview (2224861 and 3778876) were not present in the supplied image ZIP; they are replaced by supplied local photos 3184432 and 3184291 respectively. Speaker names remain illustrative, and the registration form has no backend.
