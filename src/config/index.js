// run "npm test" or "npm start" for development
// --------------------or-----------------------
// simply run "npm run build" for production

const APP = {
  API_URL:
    // process.env.NODE_ENV === "development"
    //   ? process.env.REACT_APP_API_URL_DEV
    //   : process.env.REACT_APP_API_URL_PROD,
    // "http://localhost:3001"
    "http://universities.hipolabs.com/search?country=Indonesia"
};

export default APP;
