export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQBpH82SgUve3I18zkYvXE1OZeNLgZTuhSg9G3ttJfnI15_CDeB5GfQ7esPGPbc8IYQgNgF1l9I14j5nEArX7pDNI5EcNsjFadYWtM45BcYTEKjFOLHICa4d5FCWVeomprH9wEciqu8Wc32DXDwhU97QuOEEDZMjdbXQ8V1pxDXtJfIJ",
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
