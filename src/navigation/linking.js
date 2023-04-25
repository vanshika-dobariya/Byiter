const config = {
  screens: {
    FeaturedDetails: {
      path: 'AppNavigator/FeaturedDetails/:id',
      parse: {
        id: id => `${id}`,
      },
    },
    Splash: 'Splash',
  },
};

const linking = {
  prefixes: ['https://buyiteer.com'],
  config,
};

export default linking;

