export type ImageSizes = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
};

export type ExifData = {
  camera?: string;
  lens?: string;
  aperture?: string;
  exposureTime?: string;
  iso?: string;
  exposureComp?: string;
  focalLength?: string;
};

export type ImageItem = {
  title: string;
  slug: string;
  uri: string;
  sizes?: ImageSizes;
  location?: string;
  exif?: ExifData;
  icons?: string[];
};

export type PlaylistItem = {
  title: string;
  artist: string;
  image: string;
};

export const imgGroup1: ImageItem[] = [
  {
    title: 'Warmth Lost Its Meaning',
    slug: 'warmth-lost-its-meaning',
    uri: 'https://d3fo8poitgfhx4.cloudfront.net/photos/warmth-lost-its-meaning.jpg?ver=1',
    sizes: {
      xs: 'https://d3fo8poitgfhx4.cloudfront.net/photos/warmth-lost-its-meaning-w_300.jpg',
      sm: 'https://d3fo8poitgfhx4.cloudfront.net/photos/warmth-lost-its-meaning-w_450.jpg',
      md: 'https://d3fo8poitgfhx4.cloudfront.net/photos/warmth-lost-its-meaning-w_600.jpg',
      lg: 'https://d3fo8poitgfhx4.cloudfront.net/photos/warmth-lost-its-meaning-w_768.jpg',
      xl: 'https://d3fo8poitgfhx4.cloudfront.net/photos/warmth-lost-its-meaning-w_1000.jpg',
      full: 'https://d3fo8poitgfhx4.cloudfront.net/photos/warmth-lost-its-meaning.jpg?ver=1',
    },
    location: 'Istanbul, Turkey',
    exif: {
      camera: 'FUJIFILM X-S10',
      lens: 'FUJINON XF 70-300mm F4-5.6',
      aperture: 'f/9',
      exposureTime: '1/180 sec',
      iso: 'ISO-160',
      exposureComp: '0 EV',
      focalLength: '127mm',
    },
  },
  {
    title: 'Tastes Lost Their Meaning',
    slug: 'tastes-lost-their-meaning',
    uri: 'https://d3fo8poitgfhx4.cloudfront.net/photos/tastes-lost-their-meaning.jpg?ver=1',
    sizes: {
      xs: 'https://d3fo8poitgfhx4.cloudfront.net/photos/tastes-lost-their-meaning-w_300.jpg',
      sm: 'https://d3fo8poitgfhx4.cloudfront.net/photos/tastes-lost-their-meaning-w_450.jpg',
      md: 'https://d3fo8poitgfhx4.cloudfront.net/photos/tastes-lost-their-meaning-w_600.jpg',
      lg: 'https://d3fo8poitgfhx4.cloudfront.net/photos/tastes-lost-their-meaning-w_768.jpg',
      xl: 'https://d3fo8poitgfhx4.cloudfront.net/photos/tastes-lost-their-meaning-w_1000.jpg',
      full: 'https://d3fo8poitgfhx4.cloudfront.net/photos/tastes-lost-their-meaning.jpg?ver=1',
    },
    location: 'Istanbul, Turkey',
    exif: {
      camera: 'FUJIFILM X-S10',
      lens: 'FUJINON XF 70-300mm F4-5.6',
      aperture: 'f/7.1',
      exposureTime: '1/900 sec',
      iso: 'ISO-320',
      exposureComp: '+0.3 EV',
      focalLength: '70mm',
    },
  },
  {
    title: 'Waves Lost Their Meaning',
    slug: 'waves-lost-their-meaning',
    uri: 'https://d3fo8poitgfhx4.cloudfront.net/photos/waves-lost-their-meaning.jpg?ver=1',
    sizes: {
      xs: 'https://d3fo8poitgfhx4.cloudfront.net/photos/waves-lost-their-meaning-w_300.jpg',
      sm: 'https://d3fo8poitgfhx4.cloudfront.net/photos/waves-lost-their-meaning-w_450.jpg',
      md: 'https://d3fo8poitgfhx4.cloudfront.net/photos/waves-lost-their-meaning-w_600.jpg',
      lg: 'https://d3fo8poitgfhx4.cloudfront.net/photos/waves-lost-their-meaning-w_768.jpg',
      xl: 'https://d3fo8poitgfhx4.cloudfront.net/photos/waves-lost-their-meaning-w_1000.jpg',
      full: 'https://d3fo8poitgfhx4.cloudfront.net/photos/waves-lost-their-meaning.jpg?ver=1',
    },
    location: 'Istanbul, Turkey',
    exif: {
      camera: 'FUJIFILM X-S10',
      lens: 'FUJINON XF 70-300mm F4-5.6',
      aperture: 'f/8',
      exposureTime: '1/1000 sec',
      iso: 'ISO-320',
      exposureComp: '+0.3 EV',
      focalLength: '114 mm',
    },
  },
  {
    title: 'Smells Lost Their Meaning',
    slug: 'smells-lost-their-meaning',
    uri: 'https://d3fo8poitgfhx4.cloudfront.net/photos/smells-lost-their-meaning.jpg?ver=1',
    sizes: {
      xs: 'https://d3fo8poitgfhx4.cloudfront.net/photos/smells-lost-their-meaning-w_300.jpg',
      sm: 'https://d3fo8poitgfhx4.cloudfront.net/photos/smells-lost-their-meaning-w_450.jpg',
      md: 'https://d3fo8poitgfhx4.cloudfront.net/photos/smells-lost-their-meaning-w_600.jpg',
      lg: 'https://d3fo8poitgfhx4.cloudfront.net/photos/smells-lost-their-meaning-w_768.jpg',
      xl: 'https://d3fo8poitgfhx4.cloudfront.net/photos/smells-lost-their-meaning-w_1000.jpg',
      full: 'https://d3fo8poitgfhx4.cloudfront.net/photos/smells-lost-their-meaning.jpg?ver=1',
    },
    location: 'Istanbul, Turkey',
    exif: {
      camera: 'FUJIFILM X-S10',
      lens: 'FUJINON XF 70-300mm F4-5.6',
      aperture: 'f/7.1',
      exposureTime: '1/160 sec',
      iso: 'ISO-640',
      exposureComp: '+0.3 EV',
      focalLength: '206mm',
    },
  },
  {
    title: 'Sounds Lost Their Meaning',
    slug: 'sounds-lost-their-meaning',
    uri: 'https://d3fo8poitgfhx4.cloudfront.net/photos/sounds-lost-their-meaning.jpg?ver=1',
    sizes: {
      xs: 'https://d3fo8poitgfhx4.cloudfront.net/photos/sounds-lost-their-meaning-w_300.jpg',
      sm: 'https://d3fo8poitgfhx4.cloudfront.net/photos/sounds-lost-their-meaning-w_450.jpg',
      md: 'https://d3fo8poitgfhx4.cloudfront.net/photos/sounds-lost-their-meaning-w_600.jpg',
      lg: 'https://d3fo8poitgfhx4.cloudfront.net/photos/sounds-lost-their-meaning-w_768.jpg',
      xl: 'https://d3fo8poitgfhx4.cloudfront.net/photos/sounds-lost-their-meaning-w_1000.jpg',
      full: 'https://d3fo8poitgfhx4.cloudfront.net/photos/sounds-lost-their-meaning.jpg?ver=1',
    },
    location: 'Istanbul, Turkey',
    exif: {
      camera: 'FUJIFILM X-S10',
      lens: 'FUJINON XF 70-300mm F4-5.6',
      aperture: 'f/4',
      exposureTime: '1/180 sec',
      iso: 'ISO-320',
      exposureComp: '0 EV',
      focalLength: '70mm',
    },
  },
  {
    title: 'Colors Lost Their Meaning',
    slug: 'colors-lost-their-meaning',
    uri: 'https://d3fo8poitgfhx4.cloudfront.net/photos/colors-lost-their-meaning.jpg?ver=1',
    sizes: {
      xs: 'https://d3fo8poitgfhx4.cloudfront.net/photos/colors-lost-their-meaning-w_300.jpg',
      sm: 'https://d3fo8poitgfhx4.cloudfront.net/photos/colors-lost-their-meaning-w_450.jpg',
      md: 'https://d3fo8poitgfhx4.cloudfront.net/photos/colors-lost-their-meaning-w_600.jpg',
      lg: 'https://d3fo8poitgfhx4.cloudfront.net/photos/colors-lost-their-meaning-w_768.jpg',
      xl: 'https://d3fo8poitgfhx4.cloudfront.net/photos/colors-lost-their-meaning-w_1000.jpg',
      full: 'https://d3fo8poitgfhx4.cloudfront.net/photos/colors-lost-their-meaning.jpg?ver=1',
    },
    location: 'Istanbul, Turkey',
    exif: {
      camera: 'FUJIFILM X-S10',
      lens: 'FUJINON XF 70-300mm F4-5.6',
      aperture: 'f/4',
      exposureTime: '1/160 sec',
      iso: 'ISO-400',
      exposureComp: '0 EV',
      focalLength: '70mm',
    },
  },
  {
    title: 'Hobbies Lost Their Meaning',
    slug: 'hobbies-lost-their-meaning',
    uri: 'https://d3fo8poitgfhx4.cloudfront.net/photos/hobbies-lost-their-meaning.jpg?ver=1',
    sizes: {
      xs: 'https://d3fo8poitgfhx4.cloudfront.net/photos/hobbies-lost-their-meaning-w_300.jpg',
      sm: 'https://d3fo8poitgfhx4.cloudfront.net/photos/hobbies-lost-their-meaning-w_450.jpg',
      md: 'https://d3fo8poitgfhx4.cloudfront.net/photos/hobbies-lost-their-meaning-w_600.jpg',
      lg: 'https://d3fo8poitgfhx4.cloudfront.net/photos/hobbies-lost-their-meaning-w_768.jpg',
      xl: 'https://d3fo8poitgfhx4.cloudfront.net/photos/hobbies-lost-their-meaning-w_1000.jpg',
      full: 'https://d3fo8poitgfhx4.cloudfront.net/photos/hobbies-lost-their-meaning.jpg?ver=1',
    },
    location: 'Istanbul, Turkey',
    exif: {
      camera: 'FUJIFILM X-S10',
      lens: 'FUJINON XF 70-300mm F4-5.6',
      aperture: 'f/7.1',
      exposureTime: '1/200 sec',
      iso: 'ISO-400',
      exposureComp: '0 EV',
      focalLength: '199mm',
    },
  },
  {
    title: 'Moving Lost Its Meaning',
    slug: 'moving-lost-its-meaning',
    uri: 'https://d3fo8poitgfhx4.cloudfront.net/photos/moving-lost-its-meaning.jpg?ver=1',
    sizes: {
      xs: 'https://d3fo8poitgfhx4.cloudfront.net/photos/moving-lost-its-meaning-w_300.jpg',
      sm: 'https://d3fo8poitgfhx4.cloudfront.net/photos/moving-lost-its-meaning-w_450.jpg',
      md: 'https://d3fo8poitgfhx4.cloudfront.net/photos/moving-lost-its-meaning-w_600.jpg',
      lg: 'https://d3fo8poitgfhx4.cloudfront.net/photos/moving-lost-its-meaning-w_768.jpg',
      xl: 'https://d3fo8poitgfhx4.cloudfront.net/photos/moving-lost-its-meaning-w_1000.jpg',
      full: 'https://d3fo8poitgfhx4.cloudfront.net/photos/moving-lost-its-meaning.jpg?ver=1',
    },
    location: 'Istanbul, Turkey',
    exif: {
      camera: 'FUJIFILM X-S10',
      lens: 'FUJINON XF 70-300mm F4-5.6',
      aperture: 'f/5.6',
      exposureTime: '1/105 sec',
      iso: 'ISO-400',
      exposureComp: '0 EV',
      focalLength: '300mm',
    },
  },
  {
    title: 'Clock Tower Bleeds',
    slug: 'clock-tower-bleeds',
    uri: 'https://d3fo8poitgfhx4.cloudfront.net/photos/clock-tower-bleeds.jpg?ver=1',
    sizes: {
      xs: 'https://d3fo8poitgfhx4.cloudfront.net/photos/clock-tower-bleeds-w_300.jpg',
      sm: 'https://d3fo8poitgfhx4.cloudfront.net/photos/clock-tower-bleeds-w_450.jpg',
      md: 'https://d3fo8poitgfhx4.cloudfront.net/photos/clock-tower-bleeds-w_600.jpg',
      lg: 'https://d3fo8poitgfhx4.cloudfront.net/photos/clock-tower-bleeds-w_768.jpg',
      xl: 'https://d3fo8poitgfhx4.cloudfront.net/photos/clock-tower-bleeds-w_1000.jpg',
      full: 'https://d3fo8poitgfhx4.cloudfront.net/photos/clock-tower-bleeds.jpg?ver=1',
    },
    location: 'Istanbul, Turkey',
    exif: {
      camera: 'FUJIFILM X-S10',
      lens: 'FUJINON XF 18-55mm F2.8-4',
      aperture: 'f/7.1',
      exposureTime: '0.8 sec',
      iso: 'ISO-200',
      exposureComp: '0 EV',
      focalLength: '26mm',
    },
  },
];

export const imgGroup2: ImageItem[] = [
  {
    title: 'Antique Shop with Red Door',
    slug: 'antique-shop-with-red-door',
    uri: 'https://d3fo8poitgfhx4.cloudfront.net/photos/antique-shop-with-red-door.jpg?ver=1',
    sizes: {
      xs: 'https://d3fo8poitgfhx4.cloudfront.net/photos/antique-shop-with-red-door-w_300.jpg',
      sm: 'https://d3fo8poitgfhx4.cloudfront.net/photos/antique-shop-with-red-door-w_450.jpg',
      md: 'https://d3fo8poitgfhx4.cloudfront.net/photos/antique-shop-with-red-door-w_600.jpg',
      lg: 'https://d3fo8poitgfhx4.cloudfront.net/photos/antique-shop-with-red-door-w_768.jpg',
      xl: 'https://d3fo8poitgfhx4.cloudfront.net/photos/antique-shop-with-red-door-w_1000.jpg',
      full: 'https://d3fo8poitgfhx4.cloudfront.net/photos/antique-shop-with-red-door.jpg?ver=1',
    },
    location: 'Ayvalık, Turkey',
    exif: {
      camera: 'FUJIFILM X-S10',
      lens: 'FUJINON XF 70-300mm F4-5.6',
      aperture: 'f/7.1',
      exposureTime: '1/55 sec',
      iso: 'ISO-400',
      exposureComp: '0 EV',
      focalLength: '70mm',
    },
  },
  {
    title: 'Antique Shop Entrance with Red Door',
    slug: 'antique-shop-entrance-with-red-door',
    uri: 'https://d3fo8poitgfhx4.cloudfront.net/photos/antique-shop-entrance-with-red-door.jpg?ver=1',
    sizes: {
      xs: 'https://d3fo8poitgfhx4.cloudfront.net/photos/antique-shop-entrance-with-red-door-w_300.jpg',
      sm: 'https://d3fo8poitgfhx4.cloudfront.net/photos/antique-shop-entrance-with-red-door-w_450.jpg',
      md: 'https://d3fo8poitgfhx4.cloudfront.net/photos/antique-shop-entrance-with-red-door-w_600.jpg',
      lg: 'https://d3fo8poitgfhx4.cloudfront.net/photos/antique-shop-entrance-with-red-door-w_768.jpg',
      xl: 'https://d3fo8poitgfhx4.cloudfront.net/photos/antique-shop-entrance-with-red-door-w_1000.jpg',
      full: 'https://d3fo8poitgfhx4.cloudfront.net/photos/antique-shop-entrance-with-red-door.jpg?ver=1',
    },
    location: 'Ayvalık, Turkey',
    exif: {
      camera: 'FUJIFILM X-S10',
      lens: 'FUJINON XF 70-300mm F4-5.6',
      aperture: 'f/7.1',
      exposureTime: '1/400 sec',
      iso: 'ISO-320',
      exposureComp: '0 EV',
      focalLength: '70mm',
    },
  },
  {
    title: 'Old Soda Factory in Narrow Street',
    slug: 'old-soda-factory-in-narrow-street',
    uri: 'https://d3fo8poitgfhx4.cloudfront.net/photos/old-soda-factory-in-narrow-street.jpg?ver=1',
    sizes: {
      xs: 'https://d3fo8poitgfhx4.cloudfront.net/photos/old-soda-factory-in-narrow-street-w_300.jpg',
      sm: 'https://d3fo8poitgfhx4.cloudfront.net/photos/old-soda-factory-in-narrow-street-w_450.jpg',
      md: 'https://d3fo8poitgfhx4.cloudfront.net/photos/old-soda-factory-in-narrow-street-w_600.jpg',
      lg: 'https://d3fo8poitgfhx4.cloudfront.net/photos/old-soda-factory-in-narrow-street-w_768.jpg',
      xl: 'https://d3fo8poitgfhx4.cloudfront.net/photos/old-soda-factory-in-narrow-street-w_1000.jpg',
      full: 'https://d3fo8poitgfhx4.cloudfront.net/photos/old-soda-factory-in-narrow-street.jpg?ver=1',
    },
    location: 'Ayvalık, Turkey',
    exif: {
      camera: 'FUJIFILM X-S10',
      lens: 'FUJINON XF 70-300mm F4-5.6',
      aperture: 'f/7.1',
      exposureTime: '1/450 sec',
      iso: 'ISO-320',
      exposureComp: '0 EV',
      focalLength: '171mm',
    },
  },
  {
    title: 'Rafts in a Valley',
    slug: 'rafts-in-a-valley',
    uri: 'https://d3fo8poitgfhx4.cloudfront.net/photos/rafts-in-a-valley.jpg?ver=1',
    sizes: {
      xs: 'https://d3fo8poitgfhx4.cloudfront.net/photos/rafts-in-a-valley-w_300.jpg',
      sm: 'https://d3fo8poitgfhx4.cloudfront.net/photos/rafts-in-a-valley-w_450.jpg',
      md: 'https://d3fo8poitgfhx4.cloudfront.net/photos/rafts-in-a-valley-w_600.jpg',
      lg: 'https://d3fo8poitgfhx4.cloudfront.net/photos/rafts-in-a-valley-w_768.jpg',
      xl: 'https://d3fo8poitgfhx4.cloudfront.net/photos/rafts-in-a-valley-w_1000.jpg',
      full: 'https://d3fo8poitgfhx4.cloudfront.net/photos/rafts-in-a-valley.jpg?ver=1',
    },
    location: 'Skopje, North Macedonia',
    exif: {
      camera: 'FUJIFILM X-S10',
      lens: 'FUJINON XF 18-55mm F2.8-4',
      aperture: 'f/10',
      exposureTime: '1/105 sec',
      iso: 'ISO-320',
      exposureComp: '+0.7 EV',
      focalLength: '20mm',
    },
    icons: ['favorite'],
  },
  {
    title: 'Lake by the Mountains',
    slug: 'lake-by-the-mountains',
    uri: 'https://d3fo8poitgfhx4.cloudfront.net/photos/lake-by-the-mountains.jpg?ver=1',
    sizes: {
      xs: 'https://d3fo8poitgfhx4.cloudfront.net/photos/lake-by-the-mountains-w_300.jpg',
      sm: 'https://d3fo8poitgfhx4.cloudfront.net/photos/lake-by-the-mountains-w_450.jpg',
      md: 'https://d3fo8poitgfhx4.cloudfront.net/photos/lake-by-the-mountains-w_600.jpg',
      lg: 'https://d3fo8poitgfhx4.cloudfront.net/photos/lake-by-the-mountains-w_768.jpg',
      xl: 'https://d3fo8poitgfhx4.cloudfront.net/photos/lake-by-the-mountains-w_1000.jpg',
      full: 'https://d3fo8poitgfhx4.cloudfront.net/photos/lake-by-the-mountains.jpg?ver=1',
    },
    location: 'Ohrid, North Macedonia',
    exif: {
      camera: 'FUJIFILM X-S10',
      lens: 'FUJINON XF 18-55mm F2.8-4',
      aperture: 'f/9',
      exposureTime: '1/140 sec',
      iso: 'ISO-400',
      exposureComp: '+0.7 EV',
      focalLength: '55mm',
    },
    icons: ['favorite'],
  },
  {
    title: 'Boardwalk by the Mountain Lake',
    slug: 'boardwalk-by-the-mountain-lake',
    uri: 'https://d3fo8poitgfhx4.cloudfront.net/photos/boardwalk-by-the-mountain-lake.jpg?ver=1',
    sizes: {
      xs: 'https://d3fo8poitgfhx4.cloudfront.net/photos/boardwalk-by-the-mountain-lake-w_300.jpg',
      sm: 'https://d3fo8poitgfhx4.cloudfront.net/photos/boardwalk-by-the-mountain-lake-w_450.jpg',
      md: 'https://d3fo8poitgfhx4.cloudfront.net/photos/boardwalk-by-the-mountain-lake-w_600.jpg',
      lg: 'https://d3fo8poitgfhx4.cloudfront.net/photos/boardwalk-by-the-mountain-lake-w_768.jpg',
      xl: 'https://d3fo8poitgfhx4.cloudfront.net/photos/boardwalk-by-the-mountain-lake-w_1000.jpg',
      full: 'https://d3fo8poitgfhx4.cloudfront.net/photos/boardwalk-by-the-mountain-lake.jpg?ver=1',
    },
    location: 'Ohrid, North Macedonia',
    exif: {
      camera: 'FUJIFILM X-S10',
      lens: 'FUJINON XF 18-55mm F2.8-4',
      aperture: 'f/9',
      exposureTime: '1/105 sec',
      iso: 'ISO-320',
      exposureComp: '-0.7 EV',
      focalLength: '34mm',
    },
    icons: ['favorite'],
  },
  {
    title: 'Sunlight Through Stained Glass',
    slug: 'sunlight-through-stained-glass',
    uri: 'https://d3fo8poitgfhx4.cloudfront.net/photos/sunlight-through-stained-glass.jpg?ver=1',
    sizes: {
      xs: 'https://d3fo8poitgfhx4.cloudfront.net/photos/sunlight-through-stained-glass-w_300.jpg',
      sm: 'https://d3fo8poitgfhx4.cloudfront.net/photos/sunlight-through-stained-glass-w_450.jpg',
      md: 'https://d3fo8poitgfhx4.cloudfront.net/photos/sunlight-through-stained-glass-w_600.jpg',
      lg: 'https://d3fo8poitgfhx4.cloudfront.net/photos/sunlight-through-stained-glass-w_768.jpg',
      xl: 'https://d3fo8poitgfhx4.cloudfront.net/photos/sunlight-through-stained-glass-w_1000.jpg',
      full: 'https://d3fo8poitgfhx4.cloudfront.net/photos/sunlight-through-stained-glass.jpg?ver=1',
    },
    location: 'Ayvalık, Turkey',
    exif: {
      camera: 'FUJIFILM X-S10',
      lens: 'FUJINON XF 18-55mm F2.8-4',
      aperture: 'f/3.2',
      exposureTime: '1/3200 sec',
      iso: 'ISO-640',
      exposureComp: '-2 EV',
      focalLength: '22mm',
    },
  },
  {
    title: 'Crane Sunset Skyline',
    slug: 'crane-sunset-skyline',
    uri: 'https://d3fo8poitgfhx4.cloudfront.net/photos/crane-sunset-skyline.jpg?ver=1',
    sizes: {
      xs: 'https://d3fo8poitgfhx4.cloudfront.net/photos/crane-sunset-skyline-w_300.jpg',
      sm: 'https://d3fo8poitgfhx4.cloudfront.net/photos/crane-sunset-skyline-w_450.jpg',
      md: 'https://d3fo8poitgfhx4.cloudfront.net/photos/crane-sunset-skyline-w_600.jpg',
      lg: 'https://d3fo8poitgfhx4.cloudfront.net/photos/crane-sunset-skyline-w_768.jpg',
      xl: 'https://d3fo8poitgfhx4.cloudfront.net/photos/crane-sunset-skyline-w_1000.jpg',
      full: 'https://d3fo8poitgfhx4.cloudfront.net/photos/crane-sunset-skyline.jpg?ver=1',
    },
    location: 'Istanbul, Turkey',
    exif: {
      camera: 'FUJIFILM X-S10',
      lens: 'FUJINON XF 70-300mm F4-5.6',
      aperture: 'f/8',
      exposureTime: '1/3500 sec',
      iso: 'ISO-320',
      exposureComp: '-1.3 EV',
      focalLength: '185mm',
    },
  },
  {
    title: 'Two Ducks Preening',
    slug: 'two-ducks-preening',
    uri: 'https://d3fo8poitgfhx4.cloudfront.net/photos/two-ducks-preening.jpg?ver=1',
    sizes: {
      xs: 'https://d3fo8poitgfhx4.cloudfront.net/photos/two-ducks-preening-w_300.jpg',
      sm: 'https://d3fo8poitgfhx4.cloudfront.net/photos/two-ducks-preening-w_450.jpg',
      md: 'https://d3fo8poitgfhx4.cloudfront.net/photos/two-ducks-preening-w_600.jpg',
      lg: 'https://d3fo8poitgfhx4.cloudfront.net/photos/two-ducks-preening-w_768.jpg',
      xl: 'https://d3fo8poitgfhx4.cloudfront.net/photos/two-ducks-preening-w_1000.jpg',
      full: 'https://d3fo8poitgfhx4.cloudfront.net/photos/two-ducks-preening.jpg?ver=1',
    },
    location: 'Istanbul, Turkey',
    exif: {
      camera: 'FUJIFILM X-S10',
      lens: 'FUJINON XF 70-300mm F4-5.6',
      aperture: 'f/6.4',
      exposureTime: '1/250 sec',
      iso: 'ISO-400',
      exposureComp: '0 EV',
      focalLength: '300mm',
    },
  },
];

const slugToImageData = new Map<string, ImageItem>();
imgGroup1.forEach((item) => {
  slugToImageData.set(item.slug, item);
});
imgGroup2.forEach((item) => {
  slugToImageData.set(item.slug, item);
});

export { slugToImageData };

export const playlist = [
  {
    title: 'Toz',
    artist: 'Jakuzi',
    image:
      'https://d3fo8poitgfhx4.cloudfront.net/playlist/toz-jakuzi-cover.jpg',
  },
  {
    title: 'Koca Bir Saçmalık',
    artist: 'Jakuzi',
    image:
      'https://d3fo8poitgfhx4.cloudfront.net/playlist/koca-bir-sacmalik-jakuzi-cover.jpg',
  },
  {
    title: "Don't You Remember",
    artist: 'Adele',
    image:
      'https://d3fo8poitgfhx4.cloudfront.net/playlist/dont-you-remember-adele-cover.jpg',
  },
  {
    title: 'I Belong to You',
    artist: 'Brandi Carlile',
    image:
      'https://d3fo8poitgfhx4.cloudfront.net/playlist/i-belong-to-you-brandi-carlile-cover.jpg',
  },
  {
    title: 'Melt My Heart to Stone',
    artist: 'Adele',
    image:
      'https://d3fo8poitgfhx4.cloudfront.net/playlist/melt-my-heart-to-stone-adele-cover.jpg',
  },
];
