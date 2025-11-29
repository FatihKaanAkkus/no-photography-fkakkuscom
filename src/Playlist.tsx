import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { motion } from 'motion/react';
import Stack from '@mui/material/Stack';
import { playlist } from './data';

export default function Playlist() {
  return (
    <Stack
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="shown"
      spacing={{ xs: 1, lg: 1.5 }}
    >
      {playlist.map((item) => (
        <PlaylistCard
          key={item.title + item.artist}
          title={item.title}
          artist={item.artist}
          image={item.image}
        />
      ))}
    </Stack>
  );
}

function PlaylistCard({
  title,
  artist,
  image,
}: {
  title: string;
  artist: string;
  image: string;
}) {
  const theme = useTheme();

  return (
    <Card
      component={motion.div}
      variants={itemVariants}
      whileHover={{ opacity: 1, scale: 1.033, filter: 'grayscale(0%)' }}
      viewport={{ once: true }}
      sx={{ display: 'flex', borderRadius: theme.spacing(1) }}
      tabIndex={0}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent sx={{ flex: '1 0 auto', pr: 0 }}>
          <Typography variant="caption" component="div">
            {title}
          </Typography>
          <Typography
            variant="caption"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            {artist}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{
          height: 54,
          width: 54,
          m: 1,
          alignSelf: 'center',
          borderRadius: theme.spacing(1),
        }}
        image={image}
        alt={`album cover for ${title}`}
        loading="lazy"
      />
    </Card>
  );
}

const containerVariants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, filter: 'grayscale(100%)' },
  shown: { opacity: 1, scale: 1, filter: 'grayscale(100%)' },
};
