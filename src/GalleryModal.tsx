import { useState } from 'react';
import { useLocation, useParams } from 'wouter';
import { slugToImageData, type ImageItem } from './data';
import Modal from '@mui/material/Modal';
import Chip from '@mui/material/Chip';
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
    ? '2000px'
    : '(max-width: 300px) 300px, (max-width: 600px) 450px, (max-width: 900px) 600px, (max-width: 1200px) 768px, (max-width: 1536px) 1000px, 2000px';

  return (
    <Modal
      sx={(theme) => ({
        zIndex: theme.zIndex.drawer + 1,
        p: { xs: 0 },
        display: 'flex',
        alignItems: 'safe center',
        justifyContent: 'safe center',
        overflowY: 'scroll',
      })}
      slotProps={{
        backdrop: {
          sx: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
          onClick: () => navigate('/'),
        },
      }}
      open={true}
      onClose={() => navigate('/')}
    >
      <div
        style={{
          position: 'relative',
          outline: 'none',
          minWidth: 120,
          minHeight: 120,
        }}
      >
        <img
          sizes={sizes}
          srcSet={entry.sizes ? srcSet : undefined}
          src={entry.sizes ? entry.sizes.full : entry.uri}
          alt={entry.title}
          loading="eager"
          style={{
            display: 'block',
            maxHeight: zoomed ? 'none' : '80dvh',
            maxWidth: zoomed ? '100%' : '80dvw',
            cursor: zoomed ? 'zoom-out' : 'zoom-in',
            borderRadius: zoomed ? 0 : '0.5rem',
          }}
          tabIndex={0}
          onClick={() => setZoomed(!zoomed)}
        />
        {!zoomed && <ControlOverlay entry={entry} />}
      </div>
    </Modal>
  );
}

const overlayButtonSx: SxProps<Theme> = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  ':hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
  color: 'white',
};

function ControlOverlay({ entry }: { entry: ImageItem }) {
  const [, navigate] = useLocation();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        style={{ position: 'absolute', top: 8, left: 8 }}
      >
        <IconButton
          size="small"
          onClick={() => navigate('/')}
          sx={overlayButtonSx}
        >
          <CloseIcon />
        </IconButton>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        style={{ position: 'absolute', bottom: 8, right: 8 }}
      >
        <IconButton
          size="small"
          href={entry.uri}
          target="_blank"
          rel="noopener noreferrer"
          sx={overlayButtonSx}
        >
          <IconArrowOutward />
        </IconButton>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        style={{ position: 'absolute', bottom: 8, left: 8 }}
      >
        {entry.location && (
          <Chip
            variant="filled"
            label={entry.location}
            icon={<IconPlace fontSize="small" />}
            sx={overlayButtonSx}
            slotProps={{
              label: { sx: { pl: 1 } },
            }}
          />
        )}
      </motion.div>
    </>
  );
}
