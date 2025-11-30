import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { motion } from 'motion/react';
import { type ImageItem } from './data';
import { useLocation } from 'wouter';

export default function GalleryGroup({ images }: { images: ImageItem[] }) {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const [, navigate] = useLocation();

  return (
    <ImageList
      variant="masonry"
      cols={md ? 4 : sm ? 3 : 2}
      gap={16}
      sx={{ mt: 0, p: { xs: 0, lg: 0.5 }, overflow: 'visible' }}
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="shown"
    >
      {images.map((item) => (
        <ImageListItem
          component={motion.a}
          variants={itemVariants}
          whileHover={{
            opacity: 1,
            scale: 1.025,
            zIndex: 10,
            filter: 'grayscale(0%)',
          }}
          whileTap={{ filter: 'grayscale(0%)' }}
          viewport={{ once: true }}
          key={item.slug}
          style={{ position: 'relative' }}
          href={`/p/${item.title.toLowerCase().replaceAll(' ', '-')}`}
          onClick={(e) => {
            e.preventDefault();
            navigate(`/p/${item.title.toLowerCase().replaceAll(' ', '-')}`);
          }}
          role="link"
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
            style={{ borderRadius: theme.spacing(1) }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const containerVariants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, zIndex: 0, filter: 'grayscale(100%)' },
  shown: { opacity: 0.8, scale: 1, zIndex: 0, filter: 'grayscale(100%)' },
};
