export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQDw1HjYcr2fskAneB_onEoQaxb7LmsXsI11XSqmXvMYStJ5N8tPRHRfKy6lB6MW4weQFAxDlEPtNp7NcnQeWKOmwnl8lAHVfmqhxsZkF6DYj5acLhXPvOJQ-DE7Ga-ujGv4fuJKRtKl4DlSjuMpkW8Cd4-f3Dvh6f3Z5DTZln3e42bA",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DiSCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
