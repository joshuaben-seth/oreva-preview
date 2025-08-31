# Claude Code Development Guidelines

This file contains essential guidelines for Claude Code when contributing to this project. Please follow these conventions to maintain consistency and code quality.

## 📦 Package Management
- **Always use `pnpm`** for package installations and management
- Run `pnpm add <package>` instead of `npm install <package>`
- Use `pnpm run <script>` for running scripts

## 🎨 Styling & Components
- Use the standardized styles from `@/lib/styles.ts` instead of writing inline Tailwind classes
- Import and use the centralized `Button` component from `@/components/Button.tsx`
- **Use `@/components/ImagePlaceholder.tsx` for sample images** instead of picking random images from the web
- Ensure all interactive elements have proper hover states and cursor styles
- Prefer framer-motion for animations when available
- **The app has dark and light modes** - theme details are in `@/components/ThemeProvider.tsx` and `@/components/ThemeTransition.tsx` and should always be factored in design choices
- **Dark mode must remain completely black** - no grays, slates, or other colors
- **NEVER add yellow outlines or borders** - all focus states should be outline-none

## 🏗️ Code Structure
- Follow existing file and folder conventions
- Use TypeScript for all new files
- Import utilities from the established lib folder structure
- Maintain component consistency by following existing patterns
- **Each file should be a maximum of 200 lines of code if possible** - break longer files into smaller, logical components
- **Properly separate functionality into logical files** - don't cram design and functionality into single files
- **Create dedicated directories** for related components when breaking files apart
- **Keep components focused and modular** for better maintainability and reusability

## 🔧 Development Practices
- Always read existing files before making changes to understand current patterns
- Use the existing component library and utilities before creating new ones
- Ensure proper accessibility with aria-labels and semantic HTML
- Test changes locally before committing
- **NEVER run `pnpm dev`** - the user will handle development server management
- **When writing copy or content, always reference ProductBrief.md** for accurate product information and messaging

## 🚀 Performance
- Use `'use client'` directive only when necessary for client-side features
- Optimize imports by using specific imports rather than barrel imports when possible
- Keep components focused and modular for better reusability