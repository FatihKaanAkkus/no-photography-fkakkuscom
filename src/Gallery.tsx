import { useContext, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AnimatePresence, motion, MotionValue, useSpring } from 'motion/react';
import { imgGroup1, imgGroup2 } from './data';
import GalleryGroup from './GalleryGroup';
import { CursorContext } from './context-store';

export default function Gallery() {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));

  const [text, setText] = useState<string | null>(null);
  const x = useSpring(0, { stiffness: 225, damping: 15, mass: 0.1 });
  const y = useSpring(0, { stiffness: 225, damping: 15, mass: 0.1 });

  return (
    <div
      className="gallery"
      onMouseMove={
        md
          ? (e) => {
              x.set(e.clientX + 16);
              y.set(e.clientY + 16);
            }
          : undefined
      }
    >
      <CursorContext.Provider
        value={{
          text,
          updateText: (text) => setText(text),
        }}
      >
        <Box
          sx={{
            mb: { xs: 8, lg: 12 },
            mr: { xs: -1, sm: -1.25, md: -1.5 }, // masonry fix
          }}
        >
          <GalleryGroup images={imgGroup1} />
        </Box>
        <Box
          sx={{
            mb: { xs: 8, lg: 12 },
            mr: { xs: -1, sm: -1.25, md: -1.5 }, // masonry fix
          }}
        >
          <GalleryGroup images={imgGroup2} />
        </Box>
        <Popover x={x} y={y} />
      </CursorContext.Provider>
    </div>
  );
}

function Popover({ x, y }: { x: MotionValue<number>; y: MotionValue<number> }) {
  const ctx = useContext(CursorContext);

  return (
    <>
      <AnimatePresence>
        {ctx.text && (
          <motion.div
            className="popover"
            initial={{ opacity: 0, transition: { delay: 0.1 } }}
            animate={{ opacity: 1, transition: { delay: 0.1 } }}
            exit={{ opacity: 0, transition: { delay: 0.1 } }}
            style={{ x, y }}
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <Typography
              variant="caption"
              component="p"
              className="popover-text"
            >
              {ctx.text}
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
