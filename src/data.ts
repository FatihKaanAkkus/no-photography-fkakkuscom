export type ImageItem = {
  title: string;
  slug: string;
  uri: string;
  sizes?: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  location?: string;
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
  },
  {
    title: 'Cat Moving to Target',
    slug: 'cat-moving-to-target',
    uri: 'https://d3fo8poitgfhx4.cloudfront.net/photos/cat-moving-to-target.jpg?ver=1',
    sizes: {
      xs: 'https://d3fo8poitgfhx4.cloudfront.net/photos/cat-moving-to-target-w_300.jpg',
      sm: 'https://d3fo8poitgfhx4.cloudfront.net/photos/cat-moving-to-target-w_450.jpg',
      md: 'https://d3fo8poitgfhx4.cloudfront.net/photos/cat-moving-to-target-w_600.jpg',
      lg: 'https://d3fo8poitgfhx4.cloudfront.net/photos/cat-moving-to-target-w_768.jpg',
      xl: 'https://d3fo8poitgfhx4.cloudfront.net/photos/cat-moving-to-target-w_1000.jpg',
      full: 'https://d3fo8poitgfhx4.cloudfront.net/photos/cat-moving-to-target.jpg?ver=1',
    },
    location: 'Istanbul, Turkey',
  },
  {
    title: 'Skating on Sidewalk',
    slug: 'skating-on-sidewalk',
    uri: 'https://d3fo8poitgfhx4.cloudfront.net/photos/skating-on-sidewalk.jpg?ver=1',
    sizes: {
      xs: 'https://d3fo8poitgfhx4.cloudfront.net/photos/skating-on-sidewalk-w_300.jpg',
      sm: 'https://d3fo8poitgfhx4.cloudfront.net/photos/skating-on-sidewalk-w_450.jpg',
      md: 'https://d3fo8poitgfhx4.cloudfront.net/photos/skating-on-sidewalk-w_600.jpg',
      lg: 'https://d3fo8poitgfhx4.cloudfront.net/photos/skating-on-sidewalk-w_768.jpg',
      xl: 'https://d3fo8poitgfhx4.cloudfront.net/photos/skating-on-sidewalk-w_1000.jpg',
      full: 'https://d3fo8poitgfhx4.cloudfront.net/photos/skating-on-sidewalk.jpg?ver=1',
    },
    location: 'Istanbul, Turkey',
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
  },
];

export const imgGroup2: ImageItem[] = [
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
  },
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
