# React Template with Vite, ShadCN, and Tailwind CSS

This is a modern React template setup using [Vite](https://vitejs.dev/), [ShadCN](https://github.com/shadcn/ui), and [Tailwind CSS](https://tailwindcss.com/) for fast development and a customizable UI.

## Features

- Fast development with Vite
- UI components using ShadCN
- Tailwind CSS for utility-first styling
- Preconfigured for React and TypeScript

## Getting Started

### 1. Clone the repository

Clone this repository to your local machine.

```bash
git clone https://github.com/prajwolpakka/react-template-vite-shadcn-tailwind.git
cd react-template-vite-shadcn-tailwind
```

### 2. Configure optional auth seed

To test authenticated flows while running the shared app in isolation, set the boolean `VITE_AUTH_SEED` environment variable. When `true`, the auth slice boots with the `development` preset defined in `src/store/auth-slice.ts`; when omitted or `false`, it falls back to the empty `shell` preset. The provided `.env` file enables the development preset for convenience.
