import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { Route, Switch, useLocation } from 'wouter';
import { imgGroup1, imgGroup2 } from './data';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GalleryGroup from './GalleryGroup';
import Playlist from './Playlist';
import GalleryModal from './GalleryModal';

// breakpoints [px]: 600, 900, 1200, 1536, 2000-max; -
// image srcset [px]: 300, 450, 600, 768, 1000-max; 2000 (original in modal)

let theme = createTheme({
  defaultColorScheme: 'dark',
  colorSchemes: {
    dark: true,
  },
});

theme = responsiveFontSizes(theme);

export default function App() {
  const [location] = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ p: { xs: 2, md: 3, lg: 4 } }} maxWidth={2000} mx="auto">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, lg: 10 }} offset={{ lg: 2 }}>
            <Typography variant="h1" sx={{ fontWeight: 700, my: 5 }}>
              No Photography
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          sx={{ mb: 4, position: { lg: 'relative' } }}
        >
          <Grid size={{ xs: 12, sm: 7, lg: 2 }}>
            <Box sx={{ mb: 4, position: { lg: 'sticky' }, top: 32 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                About Me
              </Typography>
              <Typography variant="caption" component="p" sx={{ mb: 2 }}>
                These photos are simply moments I’ve captured—nothing special,
                nothing planned, nothing focused on. Just light, shadow, and
                scenes from everyday life collected along the way, on the
                streets, sometimes traveling.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, lg: 7, xl: 8 }}>
            <Box sx={{ mb: 8 }}>
              <GalleryGroup images={imgGroup1} />
            </Box>
            <Box sx={{ mb: 8 }}>
              <GalleryGroup images={imgGroup2} />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 10, md: 6, lg: 3, xl: 2 }}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Playlist n/a
              </Typography>
              <Typography variant="caption" component="p" sx={{ mb: 2 }}>
                This playlist is not available.
              </Typography>
              <Playlist />
            </Box>
          </Grid>
        </Grid>
        <Typography
          variant="caption"
          component="div"
          sx={{ textAlign: 'center', mb: 2 }}
        >
          Photos by Fatih Kaan Akkuş. All rights reserved.
        </Typography>
      </Box>
      <Switch>
        <Route path="/p/:slug">
          <GalleryModal key={location} />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}
