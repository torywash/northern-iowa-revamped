# northern-iowa-revamped

A concept redesign of **MyUniverse**, the student portal for the University of Northern Iowa.
The goal is a cleaner, faster, more modern interface for the things students actually
use MyUniverse for day to day, starting with course scheduling and registration.

> **Status:** early work in progress. This is a personal learning/portfolio project.
> It is **not affiliated with, endorsed by, or connected to the University of Northern Iowa.**
> All data in the app is mock data. No real student records or university systems are involved.

## Why

The current MyUniverse portal works, but it's dated and slow to navigate. This project
is an experiment in what a ground-up redesign could look like: modern UI patterns,
responsive layout, keyboard-friendly navigation, and a focus on the high-traffic tasks
instead of burying them behind menus.

## Scope

Front-end only. The app runs entirely on mock data so the UI and interaction design can
be built and iterated on without any backend or university integration.

### Roadmap

- [ ] **Course schedule & registration** (in progress) — weekly calendar view, course
      search, add/drop flow, schedule planning with conflict detection
- [ ] Grades & academic records
- [ ] Financial aid & billing
- [ ] Campus info hub (announcements, events, dining, quick links)

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- React + TypeScript
- Mock data layer (no external services)

## Getting started

Requires [Node.js](https://nodejs.org/) 18.18+ and npm.

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Common scripts

| Command         | Description                       |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the local dev server       |
| `npm run build` | Production build                 |
| `npm start`     | Serve the production build       |
| `npm run lint`  | Run ESLint                       |

## Contributing

This is a solo project for now, but issues and suggestions are welcome. Open an issue
to discuss a change before sending a PR.

## License

To be determined.
