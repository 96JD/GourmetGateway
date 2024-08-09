# Gourmet Gateway

.NET, React, TypeScript, and Tailwind web application that aims at enabling users to keep track of their grocery and cooking needs.

## Getting started

1. Clone the repository to your local machine: `git clone https://github.com/96JD/GourmetGateway.git`.
2. Run the MySQL database script: [development.sql](Databases/development.sql).
3. Start the Redis server.
4. Navigate to the [Src](Backend/Src) folder inside the [Backend](Backend) folder.
5. Start the Backend: `dotnet watch`.
6. Navigate to the [Frontend](Frontend) folder.
7. Add your own Sentry auth token to [.env.sentry-build-plugin](Frontend/.env.sentry-build-plugin).
8. Install the dependencies: `pnpm i`.
9. Start the Frontend: `pnpm dev`.

## Deployment

Frontend: [https://jacob-dolorzo-gourmet-gateway.vercel.app](https://jacob-dolorzo-gourmet-gateway.vercel.app)

Backend: [https://jacob-dolorzo-gourmet-gateway.onrender.com/swagger/index.html](https://jacob-dolorzo-gourmet-gateway.onrender.com/swagger/index.html)
