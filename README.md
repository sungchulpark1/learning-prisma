# Learning Prisma

## Prisma Commands

`npx prisma generate` generates the Prisma Client.

Run this command:
- After installing `@prisma/client` for the first time.
- After changing your Prisma schema. (Note: migrate commands run it automatically.)
- After upgrading Prisma.

`npx prisma migrate reset` to reset the database.

`npx prisma migrate dev --name init` to create the initial migration and set up the database.

## Project Commands

`npm run build` to compile TypeScript files.

`npm run type-check` to type-check the project without generating files.

`npm start` to run the compiled JavaScript code.

`npm run dev` to run the TypeScript code directly using `tsx`.
