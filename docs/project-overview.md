# Project Overview

## Introduction

This document explains the application's goals, high-level architecture, UI components, data handling, accessibility and performance considerations, and rationale for major design decisions. It is intended for maintainers and contributors.

## Project Goals

### Primary Objective

Present a curated gallery experience that emphasizes content while avoiding direct photography references.

### User Experience

Fast, minimal, and distraction-free interface with clear hierarchy and easy exploration of grouped content.

### Developer Goals

Keep the codebase small, testable, typed (`TypeScript`), and easy to extend.

## High-Level Architecture

### Framework

Built with React + Vite for fast development and small production bundles. Uses MUI v7 component library for Material Design integration.

### State Management

Uses a lightweight context in `context-store.tsx` for cross-component state rather than adding a heavier solution like Redux.

### Routing

Single-page app; the current structure focuses on components rather than multiple routes. URL routing for image modals is handled using `wouter` for simplicity.

### Data Source

Local data files (`data.ts`, `data-blur.ts`) provide structured content and blurhash/placeholder data for progressive image loading. Placeholder blur data is generated separately by another project.

## Core Components

### `App.tsx`

- Top-level layout and orchestration. Initializes global providers (context), sets page-level styles, and renders the main gallery view.
- Keeps app-level concerns (theme, global state) centralized to avoid prop drilling.

### `Gallery.tsx`

- Renders groups of items and is responsible for list-level behaviors (virtualization or lazy-loading hooks can be added here).
- Separates item rendering from grouping and collection-level logic, simplifying testing and reuse.

### `GalleryGroup.tsx`

- Presents a named collection of gallery items (e.g., an album or topic) with a heading and grid of thumbnails.
- Groups are a primary navigation affordance; isolating them allows independent layout adjustments (responsive columns, gaps).

### `GalleryModal.tsx`

- Fullscreen/overlay viewer for a focused item; supports prev/next navigation, keyboard controls, and closing.
- Modal interaction isolates detailed viewing from browsing; good for accessibility when implemented with ARIA and focus trapping.

### `Playlist.tsx`

- Lightweight sequence control for ordered playthroughs or guided walks through selected items.
- Useful for presentation-like experiences without complex playback engines.

### `context-store.tsx`

- Central state container for selection, modal open/close state, and other global flags.
- Small, domain-specific state is simpler than a global store; context provides straightforward scoping and TypeScript typing.

### `data.ts` and `data-blur.ts`

- Static data for items and low-fidelity placeholders (e.g., blurhash or blurred images) to support progressive loading.
- Decoupling placeholder data from full assets improves perceived performance and allows graceful degradation.

## UI / UX Patterns

### Layout

- **Grid-first**: Visual hierarchy uses grids for groups with responsive breakpoints to adjust columns.
- **Spacing & Typography**: Minimal typographic scale and generous whitespace to reduce visual clutter.

### Thumbnails & Placeholders

- **Progressive Loading**: Thumbnails use a low-quality image in the `srcset` for fast initial display; no blur or placeholder is shown before the thumbnail loads.
- Improves perceived speed and reduces layout shifts.
- **Blur Placeholders**: TODO - Use blurred low-res images from `data-blur.ts` until full images load.

### Modal Viewer

- **Focus Management**: Trap focus within the modal while open, restore focus on close.
- **Accessibility**: Apply `role="dialog"`, descriptive `aria-label`, and ensure screen-reader semantics.
- **Keyboard Support**: TODO - Arrow keys for prev/next, `Esc` to close.

### Navigation

- **In-Page Exploration**: Groups act as milestone anchors; modals enable deep dives without route changes.
- **Playlist**: Playlist is purely visual and has no controls of any kind.

## Data Handling and Flow

### Source of Truth

- **Static Data Files**: `data.ts` defines the gallery model (groups, items, metadata). This keeps the app deterministic and easy to test.
- **Placeholder Data**: `data-blur.ts` pairs each item key with a blur placeholder (small base64/blurhash) to render as a backdrop background image.

### Loading Strategy

- **Lazy Image Loading**: Use native `loading="lazy"` for images.
- **Caching**: Leverage browser caching.
- **Prefetching**: TODO - When a modal opens, prefetch adjacent images to enable instant navigation.

### Data Shape (example)

- **Rationale**: Simple, serializable shape that decouples presentation (thumbnails/blur) from canonical src.

  ```ts
  export type ImageSizes = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  export type ExifData = {
    camera?: string;
    lens?: string;
    aperture?: string;
    exposureTime?: string;
    iso?: string;
    exposureComp?: string;
    focalLength?: string;
  };
  export type ImageItem = {
    title: string;
    slug: string;
    uri: string;
    sizes?: ImageSizes;
    size?: { width: number; height: number; aspect: number };
    location?: string;
    exif?: ExifData;
    icons?: string[];
    blurDataURL?: string;
  };
  export type GalleryItems = ImageItem[];
  export type GalleryItemsMap = Map<string, ImageItem>;
  export type PlaylistItem = {
    title: string;
    artist: string;
    image: string;
  };
  export type PlaylistItems = PlaylistItem[];
  ```

## Performance Considerations

### Bundle Size

Keep dependencies minimal. Use Vite’s tree-shaking and code-splitting for large modules.

### Image Optimization

Prefer optimized image sizes for thumbnails; use responsive `srcset` for full images.

### Avoid Over-Rendering

TODO - Memoize list items where appropriate; use virtualization for extremely large galleries.

### Perceived Performance

TODO - Use placeholder blur + skeletons to reduce perceived load time.

## Accessibility (A11y)

### Semantic HTML

Use headings, lists, and landmarks.

### Keyboard Navigation

Ensure all interactive elements are reachable and usable via keyboard.

### Aria Labels

Provide meaningful `aria-*` attributes for modals and controls.

### Contrast & Focus

Ensure focus states are visible and color contrast meets WCAG AA.

## Testing & Quality

### Type Safety

Leverage TypeScript for data shapes and component props to prevent runtime errors.

### Unit Tests

TODO - Component-level tests for `GalleryGroup`, `GalleryModal`, and `context-store` behaviors.

### E2E Tests

TODO - Simple flows: open modal, keyboard navigation, playlist playback.

## Design Rationale Summary

### Simplicity

Using context and local data keeps the app approachable and maintainable.

### Progressive Enhancement

Prioritize a robust baseline using semantic HTML and add JS features progressively.

### Performance-First UX

Placeholders, lazy loading, and prefetching target both real and perceived performance.

### Accessibility by Design

Modal and gallery controls are designed to work for keyboard and screen-reader users.

## Files & Responsibilities

- **`App.tsx`**: App shell and providers.
- **`main.tsx`**: Bootstrapping and mounting.
- **`context-store.tsx`**: Global state and hooks.
- **`Gallery.tsx`**: Collection-level UI logic.
- **`GalleryGroup.tsx`**: Group rendering and responsive grid.
- **`GalleryModal.tsx`**: Focused viewer with navigation.
- **`Playlist.tsx`**: Ordered playback controls.
- **`data.ts` / `data-blur.ts`**: Content and placeholders.

## Future Enhancements

- Add virtualization for extremely large galleries.
- Research navigation patterns to refine UX.
