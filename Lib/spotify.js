import SpotiyWebApi from "spotify-web-api-node";
const scopes = [
  // "user-read-email",
  "playlist-read-private",
  "streaming",
  // "user-read-private",
  "user-library-read",
  // // "user-top-read",
  "user-read-playback-state",
  // "user-notify-playback-state",
  // "user-read-current-playing", //creates problem
  // "user-read-recently-played",
  // // "user-follow-read",
  "app-remote-control",
  // // "user-library-modify",
  // "user-read-playback-position",
  // "user-modify-playback-state",
  "user-read-currently-playing",
  "playlist-read-collaborative",
].join(",");

const params = {
  scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL =
  "https://accounts.spotify.com/authorize?" + queryParamString.toString();

const spotifyApi = new SpotiyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export default spotifyApi;

export { LOGIN_URL };
