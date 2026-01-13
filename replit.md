# Haven Portfolio

## Overview

A personal portfolio website for "Haven," a Discord community specialist. The application is a full-stack TypeScript project featuring a React frontend with smooth animations and a contact form that sends messages to Discord via webhook integration. The site showcases Discord server management expertise with a dark, Discord-inspired theme.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with CSS variables for theming, using a dark Discord-inspired color palette
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for reveal animations and smooth transitions
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **Build Tool**: esbuild for server bundling, Vite for client
- **Development**: tsx for TypeScript execution during development

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: `shared/schema.ts` - contains a `messages` table for contact form submissions
- **Migrations**: Managed via `drizzle-kit push`

### API Structure
- RESTful API with typed routes defined in `shared/routes.ts`
- Single endpoint: `POST /api/messages` for contact form submissions
- Zod schemas for request/response validation shared between client and server

### Key Design Patterns
- **Monorepo Structure**: Client code in `client/`, server in `server/`, shared types in `shared/`
- **Type Safety**: Shared schemas between frontend and backend using Zod and drizzle-zod
- **Path Aliases**: `@/` maps to client source, `@shared/` maps to shared code

## External Dependencies

### Discord Integration
- Contact form messages are forwarded to Discord via webhook
- Requires `DISCORD_WEBHOOK_URL` environment variable
- Messages sent as Discord embeds with name, Discord ID, and content fields

### Database
- PostgreSQL database required
- Connection via `DATABASE_URL` environment variable
- Uses `connect-pg-simple` for session storage capability

### Third-Party Services
- Google Fonts: Outfit, Inter, Cairo (for Arabic support), and Fira Code
- No authentication system currently implemented (passport dependencies available but unused)

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string
- `DISCORD_WEBHOOK_URL`: Discord webhook for contact form notifications (optional but recommended)