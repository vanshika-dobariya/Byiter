/* eslint-disable prettier/prettier */
const environment = {
  production: false,
  graphqlServerUrl: {
    backendGraphqlPathUrl: 'https://backend.buyiteer.com.au:5000/graphql',
    interceptorGraphqlPathUrl: 'https://backend.buyiteer.com.au:4466',
    // graphqlPathUrl: "http://10.0.2.2:5000/graphql" // ip to run from emulator to connect to localhost
  },
  authServerUrl: {
    authority: 'https://backend.buyiteer.com.au:3000',
    forgotPasswordPath: '/merchant/forgot-password',
    resetPasswordPath: '/merchant/reset-password',
    loginPath: '/merchant/login',
    signUpPath: '/merchant/signup',
    logoutPath: '/merchant/logout',
    imageUploadPath: '/file/upload',
  },
};

export default environment;
