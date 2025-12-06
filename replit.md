# Portfolio Website - Replit Configuration

## Overview

This is a personal portfolio website for Sidharth Sonar, a Senior Frontend Engineer specializing in Angular and UI/UX development. The portfolio showcases professional experience, technical skills, projects, and work approach with a "Flow of Nature" design theme featuring organic, flowing aesthetics with smooth curves and natural transitions.

The application is built as a single-page portfolio with smooth scrolling navigation, featuring sections for hero/intro, skills, projects, experience, approach, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, configured as a single-page application (SPA)

**Routing**: Uses `wouter` for lightweight client-side routing with two main routes:
- `/` - Main portfolio page
- Catch-all 404 page for undefined routes

**State Management**: React Query (@tanstack/react-query) for server state management with conservative defaults:
- No automatic refetching on window focus
- Infinite stale time
- Custom query function using fetch API with credential support

**UI Component Library**: Shadcn UI (based on Radix UI primitives) configured with:
- "new-york" style variant
- Tailwind CSS for styling with custom theme
- Component aliases configured for clean imports (@/components, @/lib, etc.)

**Design System**: 
- Custom "Flow of Nature" theme with organic, flowing aesthetics
- Soft dark theme or dark-on-light with premium feel
- Google Fonts integration: DM Sans and Inter for typography hierarchy
- 8px base grid spacing system
- Custom CSS variables for colors, shadows, and elevations
- Responsive breakpoints for mobile, tablet, and desktop

**Component Structure**:
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/` (Shadcn components)
- Feature components in `client/src/components/` (Navigation, ThemeToggle, WaveDivider)
- Section components in `client/src/components/sections/` (Hero, Skills, Projects, etc.)

**Custom Hooks**:
- `useInView` - Intersection Observer for scroll animations
- `useIsMobile` - Responsive breakpoint detection
- `useToast` - Toast notification system

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js

**Server Structure**:
- Development mode: Vite middleware for HMR (Hot Module Replacement)
- Production mode: Serves pre-built static files from dist/public
- HTTP server wrapped around Express for potential WebSocket support

**API Design**: RESTful API architecture with `/api` prefix for all application routes (currently minimal backend implementation)

**Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage):
- IStorage interface defines CRUD methods
- Currently implements basic user operations (getUser, getUserByUsername, createUser)
- Designed for easy migration to database-backed storage

**Build Process**:
- Custom build script using esbuild for server bundling
- Vite for client bundling with optimized production builds
- Server dependencies bundled with allowlist for specific packages
- Source maps support via @jridgewell/trace-mapping

**Development Features**:
- Request/response logging with timestamps
- Error overlay plugin for runtime errors in development
- Replit-specific plugins for development environment integration

### Data Architecture

**Database Configuration**: Drizzle ORM configured for PostgreSQL with:
- Schema definitions in `shared/schema.ts`
- Migration files output to `./migrations`
- Currently minimal schema (users table only)

**Type Safety**: Full TypeScript implementation with:
- Shared types between client and server via `shared/` directory
- Zod schemas for runtime validation (drizzle-zod integration)
- Strict TypeScript configuration with ESNext modules

**Session Management**: Infrastructure in place for express-session with connect-pg-simple for PostgreSQL-backed sessions

## External Dependencies

### UI Component Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives (@radix-ui/react-*)
- **Shadcn UI**: Component system built on top of Radix UI with Tailwind styling
- **Lucide React**: Icon library for consistent iconography
- **cmdk**: Command palette component for keyboard-driven interfaces

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Dynamic className composition
- **Google Fonts**: DM Sans and Inter for typography

### Form & Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation library
- **@hookform/resolvers**: Zod resolver for React Hook Form integration

### Backend Infrastructure
- **Express**: Web application framework
- **Drizzle ORM**: Type-safe ORM for database operations
- **PostgreSQL (pg)**: Database driver (configured but not actively used)
- **express-session**: Session middleware
- **connect-pg-simple**: PostgreSQL session store

### Development Tools
- **Vite**: Build tool and development server with HMR
- **esbuild**: Fast JavaScript bundler for server code
- **tsx**: TypeScript execution engine for development
- **TypeScript**: Type checking and compilation

### React Ecosystem
- **React 18**: UI library with concurrent features
- **React DOM**: DOM rendering
- **wouter**: Lightweight routing library

### Additional Utilities
- **date-fns**: Date manipulation library
- **nanoid**: Unique ID generation
- **embla-carousel-react**: Carousel component (available but not currently used in portfolio)

### Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development mode indicators