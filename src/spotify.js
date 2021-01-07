// set main location to set user authentication
export const authEndPoint = "https://accounts.spotify.com/authorize";

// after login spotify developer to create user client id to use auth
const clientId = "76e302acd9094319b7162343e21db4ea";
// after agree btn click to redirect lovation like home page user authorize
const redirectUri = "http://localhost:3000/";

// set to access these scopes
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// set after click agree btn to get token from url location "access_token"
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

// click btn to set location this farmula to seting url user authentication
export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true `;
