<a id="readme-top"></a>

<h1 align="center">Kaohut - Website for Quiz Tests</h1>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- Vite - ReactJS
- Tanstack Router
- TailwindCSS
- Shadcn/ui
- Lucide Icons
- Tanstack query
- Testing with: Vitest and Storybook

### Team

- [Thanh Phong](https://github.com/Pet3r1512) - Fullstack Developer
- [Linh Dan](https://github.com/nguyenholinhdan) - Frontend Developer | Content | Designer | Tester

### How to use this app?

## Step 1: Clone this Repo - Client Side

## Step 2: Install dependencies
- You can use any package manager but we recommend using pnpm to install dependencies.
- Run `pnpm install` to install all needed packages and dependencies.
- Create a file named `.env` and add following line: `ENV=development`

## Step 3: Run Client
- Use `pnpm dev` to start the client at localhost:5173

## Step 4: Clone Server Repo from [here](https://github.com/Pet3r1512/Kaohut-Server)

## Step 5: Install dependencies
- You can use any package manager but we recommend using pnpm to install dependencies.
- Run `pnpm install` to install all needed packages and dependencies.
- Create a file named `.env` and add following lines:
```
NODE_ENV=development
PORT=9999
LOG_LEVEL=silent
DATABASE_URL="postgresql://na9p0r:xau_xTTiCvYmHPg77NejfMEsRIOAOyvZ7Tbd2@us-east-1.sql.xata.sh:5432/kaohut:main?sslmode=require"
BETTER_AUTH_SECRET=JztP4VLWXPKRsAHpuMNDqrPzH3S3cpwh
BETTER_AUTH_URL=http://localhost:9999
```

## Step 6: Run Server
- Use `pnpm dev` to start the server at localhost:9999
