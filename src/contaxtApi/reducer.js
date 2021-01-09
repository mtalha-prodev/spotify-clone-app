export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQApvfxBmg0-Lh0jvBllpeKEnLXrI5JZOTmlFmwhZkecxzaa7mWJVgBmENwCzsl3FskWdIbNhzCXbVZY6o7T1qkTHXZwV1Y066rh6m67EIRKl45krjQiOnnp1Ms8oQY90WzIt9wxXXdBVWHurRI1e57n9vCswcsIbMFhp8K_Y_zvvQeu",
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

    default:
      return state;
  }
};

export default reducer;
