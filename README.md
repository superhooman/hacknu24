# hacknu24

Track: BTSDigital
Team: ThatCouple
Title: Binoculars. Найди лучший кэшбэк

# Getting started

0. Make sure that you have nodejs (18.17.0 and up) and Docker installed
1. Clone the repository
2. Install dependencies: `npm ci`
3. Run `./start-database.sh` (it will create docker instance of postgres and update your .env file)
4. Add `.env` variables according to `.env.example`
5. Push DB schema: `npm run db:push`
6. Build the project: `npm run build`
7. Start the project: `npm run start`
