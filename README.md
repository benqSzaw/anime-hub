# Anime hub

## Tech stack

- Next.js
- Payload CMS
- Tailwind CSS
- TypeScript
- Shadcn UI
- PostgreSQL

## Starting the project

```bash
 # Clone the repository
 git clone https://github.com/benqSzaw/anime-hub.git
 cd anime-hub
 # Install dependencies
 npm install
 # Create a .env file in the root directory and add the following environment variables like in .env.example:
 DATABASE_URL=your_postgres_url
 PAYLOAD_SECRET=your_payload_secret
 URL=your_website_url
 # Start project
 npm run dev
```

## Customization

Do not change name of files or change variables in code.

- Colors
  - You can customize the colors of the app by modifying the `src/app/(app)/global.css` file
- Fonts
  - Replace next fonts in `src/app/(app)/layout.tsx` file, do not change variables.
- Images
  - Favicon - change files `public/favicon.ico` and `src/app/(app)/favicon.ico`
  - Logo - change file `public/logo-circle.png` and `public/logo-rectangle.png`

## License

MIT
