import { motion } from 'motion/react';
import { chipVariants } from './gallery-variants';
import IconButton from '@mui/material/IconButton';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LandspaceIcon from '@mui/icons-material/Landscape';
import StreetIcon from '@mui/icons-material/Signpost';

const iconComponents: Record<string, React.ReactElement> = {
  favorite: <FavoriteIcon />,
  explore: <ExploreIcon />,
  landscape: <LandspaceIcon />,
  street: <StreetIcon />,
} as const;

export default function Icons({ icons }: { icons: string[] }) {
  return icons.map(
    (name, i) =>
      iconComponents[name] && (
        <motion.div variants={chipVariants} key={`icon-${name}-${i}`}>
          <IconButton size="small" role="none">
            {iconComponents[name]}
          </IconButton>
        </motion.div>
      ),
  );
}
