import { useContext, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AnimatePresence, motion, MotionValue, useSpring } from 'motion/react';
import { imgGroup1, imgGroup2, slugToImageData } from './data';
import GalleryGroup from './GalleryGroup';
import { CursorContext } from './context-store';

export default function Gallery() {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));

  const [slug, setSlug] = useState<string | null>(null);
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
          slug,
          updateSlug: (slug) => setSlug(slug),
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
        {md && <CustomBackdrop />}
      </CursorContext.Provider>
    </div>
  );
}

function Popover({ x, y }: { x: MotionValue<number>; y: MotionValue<number> }) {
  const ctx = useContext(CursorContext);
  const item = ctx.slug ? slugToImageData.get(ctx.slug) : null;

  return (
    <AnimatePresence>
      {item && (
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
          <Typography variant="caption" component="p" className="popover-text">
            {item.title}
          </Typography>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CustomBackdrop() {
  const ctx = useContext(CursorContext);
  const item = ctx.slug ? slugToImageData.get(ctx.slug) : null;

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key={item.slug}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.7 } }}
          style={{
            ...overlayBackdropSx,
            backgroundColor: '#242424',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            ...(item.blurDataURL
              ? { backgroundImage: `url(${item.blurDataURL})` }
              : {}),
          }}
        />
      )}
      <div
        key="backdrop-filter"
        style={{
          ...overlayBackdropSx,
          backgroundColor: 'transparent',
          backdropFilter: 'blur(40px) brightness(17%)',
        }}
      />
    </AnimatePresence>
  );
}

const overlayBackdropSx: React.CSSProperties = {
  zIndex: -1,
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};
