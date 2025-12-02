import { createContext } from 'react';

export const CursorContext = createContext<{
  text: string | null;
  updateText: (newText: string | null) => void;
}>({
  text: null,
  updateText: () => {},
});
