# Pesala Sri Akhil — Quantum Computing Portfolio

A responsive, dark quantum-inspired React portfolio built with Vite, Tailwind CSS v4, Framer Motion and Lucide React.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Personalise the content

Edit `src/data/portfolio.js`:
- Update the introduction and about text in `profile`.
- Keep only skills and concepts Akhil has actually studied in `skillGroups`.
- Add real projects to the `projects` array.
- Add a public email and a resume URL if desired.
- Update `learningJourney` as his academic journey progresses.

### Add a project

Add an object to `projects`:

```js
{
  number: "01",
  title: "Project title",
  category: "Quantum Computing",
  description: "What problem did you explore, how did you approach it, and what did you learn?",
  tags: ["Python", "Qiskit"],
  github: "https://github.com/username/repository",
  demo: "",
  documentation: "/documents/project-report.pdf"
}
```

For project documentation:
1. Create `public/documents/`.
2. Place the PDF report inside that folder.
3. Set `documentation` to `/documents/your-report.pdf`.

Do not add made-up project results, skill levels or credentials. The project section intentionally shows a placeholder until real projects are added.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the repository.
4. Framework preset: Vite.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Deploy.

`vercel.json` includes a simple SPA rewrite for client-side routes.

## Stack
- React
- Vite
- Tailwind CSS v4 using `@tailwindcss/vite`
- Framer Motion
- Lucide React
