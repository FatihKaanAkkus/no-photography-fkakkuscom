import { useState } from 'react';
import { useLocation, useParams } from 'wouter';
import { slugToImageData, type ImageItem } from './data';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import { motion } from 'motion/react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import IconArrowOutward from '@mui/icons-material/ArrowOutward';
import IconPlace from '@mui/icons-material/Place';
import type { Theme } from '@mui/material/styles';
import type { SxProps } from '@mui/material/styles';

export default function GalleryModal() {
  const [zoomed, setZoomed] = useState(false);

  const [, navigate] = useLocation();
  const params = useParams<{ slug: string }>();
  const entry = slugToImageData.get(params.slug);

  if (!entry) {
    navigate('/');
    return <></>;
  }

  const srcSet = entry.sizes
    ? zoomed
      ? `${entry.sizes.full}`
      : `${entry.sizes.xs} 300w, ${entry.sizes.sm} 450w, ${entry.sizes.md} 600w, ${entry.sizes.lg} 768w, ${entry.sizes.xl} 1000w, ${entry.sizes.full} 2000w`
    : entry.uri;

  const sizes = zoomed
    ? '100vw'
    : '(max-width: 600px) 100vw, (max-width: 900px) 70vw, 75vw';

  return (
    <Modal
      sx={{
        display: 'flex',
        alignItems: 'safe center',
        justifyContent: 'safe center',
      }}
      slotProps={{
        backdrop: { sx: { backgroundColor: 'rgba(0, 0, 0, 0.95)' } },
      }}
      open
      onClose={() => navigate('/')}
      role="dialog"
      aria-labelledby="image-modal-title"
    >
      <Box
        component="article"
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          maxWidth: '100vw',
          maxHeight: '100vh',
          display: 'flex',
          alignItems: { xs: 'safe center', xl: 'safe center' },
          justifyContent: { xs: 'safe center', xl: 'safe center' },
          overflow: { xs: 'auto' },
          pt: { xs: '3rem', xl: '0' },
          outline: 'none',
        }}
        role="main"
      >
        {/* Invisible Backdrop to close modal on click outside content */}
        <Backdrop
          sx={{ backgroundColor: 'transparent' }}
          open
          onClick={() => navigate('/')}
        />

        {/* Close Button */}
        {!zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              position: 'absolute',
              top: '0.5rem',
              left: '0.5rem',
              zIndex: 10,
            }}
          >
            <IconButton
              size="small"
              onClick={() => navigate('/')}
              sx={overlayButtonSx}
              aria-label="Close image modal"
            >
              <CloseIcon />
            </IconButton>
          </motion.div>
        )}

        {/* Wrapper groups image and sidebar */}
        <Box
          sx={{
            zIndex: 2,
            display: 'flex',
            maxWidth: '100%',
            maxHeight: '100%',
            flexDirection: { xs: 'column', xl: 'row' },
            alignItems: 'safe center',
          }}
        >
          {/* Image Container */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'safe center',
              justifyContent: 'safe center',
              maxHeight: '100vh',
              flex: '0 0 auto',
              maxWidth: '100%',
            }}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              sizes={sizes}
              srcSet={entry.sizes ? srcSet : undefined}
              src={entry.sizes ? entry.sizes.full : entry.uri}
              alt={entry.title}
              loading="eager"
              style={{
                cursor: zoomed ? 'zoom-out' : 'zoom-in',
                maxWidth: zoomed ? 'none' : '100%',
                maxHeight: zoomed ? 'none' : 'calc(100vh - 6rem)',
                width: zoomed ? '100%' : 'auto',
                height: zoomed ? 'auto' : 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
              tabIndex={0}
              onClick={() => setZoomed(!zoomed)}
            />
          </Box>

          {/* Sidebar */}
          {!zoomed && (
            <Box
              component="aside"
              sx={{
                zIndex: 1,
                width: { xs: '100%', xl: 270 },
                p: 4,
                overflowY: { xl: 'auto' },
                maxHeight: '100vh',
              }}
            >
              <ImageDetails entry={entry} />
            </Box>
          )}
        </Box>
      </Box>
    </Modal>
  );
}

const overlayButtonSx: SxProps<Theme> = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  ':hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
  color: 'white',
};

function ImageDetails({ entry }: { entry: ImageItem }) {
  return (
    <Box
      component={motion.div}
      variants={chipContainerVariants}
      initial="hidden"
      animate="shown"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        height: '100%',
      }}
    >
      <Stack spacing={1} justifyContent="flex-start">
        <Typography
          id="image-modal-title"
          component={motion.div}
          variants={chipVariants}
          variant="h4"
          sx={{ fontWeight: 300, color: 'text.secondary' }}
        >
          {entry.title}
        </Typography>
      </Stack>
      <Stack spacing={1} justifyContent="flex-start">
        {entry.exif?.camera && (
          <motion.div variants={chipVariants}>
            <Chip variant="filled" label={entry.exif?.camera} />
          </motion.div>
        )}
        {entry.exif?.lens && (
          <motion.div variants={chipVariants}>
            <Chip variant="filled" label={entry.exif?.lens} />
          </motion.div>
        )}
        {entry.exif?.focalLength && (
          <motion.div variants={chipVariants}>
            <Chip variant="filled" label={entry.exif?.focalLength} />
          </motion.div>
        )}
        {entry.exif?.aperture && (
          <motion.div variants={chipVariants}>
            <Chip variant="filled" label={entry.exif?.aperture} />
          </motion.div>
        )}
        {entry.exif?.exposureTime && (
          <motion.div variants={chipVariants}>
            <Chip variant="filled" label={entry.exif?.exposureTime} />
          </motion.div>
        )}
        {entry.exif?.exposureComp && (
          <motion.div variants={chipVariants}>
            <Chip variant="filled" label={entry.exif?.exposureComp} />
          </motion.div>
        )}
        {entry.exif?.iso && (
          <motion.div variants={chipVariants}>
            <Chip variant="filled" label={entry.exif?.iso} />
          </motion.div>
        )}
        {entry.location && (
          <motion.div variants={chipVariants}>
            <Chip
              variant="filled"
              label={entry.location}
              icon={<IconPlace fontSize="small" />}
              slotProps={{
                label: { sx: { pl: 1 } },
              }}
            />
          </motion.div>
        )}
      </Stack>
      <Stack direction="row" justifyContent="flex-start" sx={{ mt: 'auto' }}>
        <motion.div variants={chipVariants}>
          <IconButton
            size="small"
            href={entry.uri}
            target="_blank"
            rel="noopener noreferrer"
            sx={overlayButtonSx}
            aria-label="Open full resolution image in new tab"
          >
            <IconArrowOutward />
          </IconButton>
        </motion.div>
      </Stack>
    </Box>
  );
}

const chipContainerVariants = {
  hidden: {},
  shown: {
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
};

const chipVariants = {
  hidden: { opacity: 0, y: 10 },
  shown: { opacity: 1, y: 0 },
};
