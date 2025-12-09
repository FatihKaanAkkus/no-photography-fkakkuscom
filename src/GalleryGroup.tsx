import { useContext } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ImageListItem from '@mui/material/ImageListItem';
import Masonry from '@mui/lab/Masonry';
import { motion } from 'motion/react';
import { type GalleryItems, type ImageItem } from './data';
import { useLocation } from 'wouter';
import { CursorContext } from './context-store';

export default function GalleryGroup({ images }: { images: GalleryItems }) {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Masonry
      columns={md ? 4 : sm ? 3 : 2}
      spacing={lg ? 3 : md ? 2.5 : sm ? 2 : 1.5}
      sx={{ mt: 0, overflow: 'visible' }}
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="shown"
    >
      {images.map((item) => (
        <GalleryItem key={item.slug} item={item} />
      ))}
    </Masonry>
  );
}

function GalleryItem({ item }: { item: ImageItem }) {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const [, navigate] = useLocation();

  const ctx = useContext(CursorContext);

  return (
    <ImageListItem
      className="gallery-item"
      component={motion.a}
      variants={itemVariants}
      whileHover={{
        opacity: 1,
        scale: 1.02,
        zIndex: 10,
        filter: 'grayscale(0%)',
      }}
      whileTap={{ filter: 'grayscale(0%)' }}
      whileFocus={{ filter: 'grayscale(0%)' }}
      viewport={{ once: true }}
      sx={{ position: 'relative', borderRadius: theme.spacing(0.75) }}
      href={`/p/${item.slug}`}
      onClick={(e) => {
        e.preventDefault();
        navigate(`/p/${item.slug}`);
      }}
      onMouseOver={md ? () => ctx.updateSlug(item.slug) : undefined}
      onMouseLeave={() => ctx.updateSlug(null)}
      onBlur={() => ctx.updateSlug(null)}
      role="link"
      aria-label={`View details for ${item.title}`}
    >
      <img
        srcSet={
          item.sizes
            ? `${item.sizes.xs} 300w, ${item.sizes.xs} 450w, ${item.sizes.xs} 600w, ${item.sizes.xs} 768w, ${item.sizes.xs} 1000w, ${item.sizes.xs} 2000w`
            : undefined
        }
        src={item.sizes ? item.sizes.xs : item.uri}
        sizes="(max-width: 300px) 300px, (max-width: 600px) 450px, (max-width: 900px) 600px, (max-width: 1200px) 768px, (max-width: 1536px) 1000px, 2000px"
        alt={item.title}
        loading="lazy"
        style={{ borderRadius: theme.spacing(0.75) }}
        width={item.size ? Math.round(kSize * item.size.width) : undefined}
        height={item.size ? Math.round(kSize * item.size.height) : undefined}
      />
    </ImageListItem>
  );
}

const kSize = 300 / 2000; // this component uses xs (300px) vs full (2000px) sizes

const containerVariants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 1, zIndex: 0, filter: 'grayscale(100%)' },
  shown: {
    opacity: 0.8,
    scale: 1,
    zIndex: 0,
    filter: 'grayscale(100%)',
    transition: { delay: 0.15, duration: 0.3 },
  },
};
