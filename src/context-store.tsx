import { createContext } from 'react';

export const CursorContext = createContext<{
  slug: string | null;
  updateSlug: (newSlug: string | null) => void;
}>({
  slug: null,
  updateSlug: () => {},
});

export const ModalContext = createContext<{
  zoomed: boolean;
  setZoomed: (zoomed: boolean) => void;
}>({
  zoomed: false,
  setZoomed: () => {},
});
