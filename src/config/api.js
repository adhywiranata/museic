console.log(process.env.NODE_ENV);
export const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
export const SPOTIFY_USER_SCOPES = process.env.REACT_APP_SPOTIFY_USER_SCOPES;
export const SPOTIFY_CALLBACK_URL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_SPOTIFY_PROD_CALLBACK_URL : process.env.REACT_APP_SPOTIFY_DEV_CALLBACK_URL;