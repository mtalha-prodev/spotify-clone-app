export const initialState = {
  user: null,
  plalists: [],
  playing: false,
  item: null,
  token:
    "BQAjmznDn95FED1_sBPakiOy1bELQRCoKijDPyUIgZ_AUAQsrTQDtL11s1vkL4l4rteae7oOM0fT6krOUA6x6p5rojMAZGif0c4JEmJjL_QheQVTC0GTjQ-8m2TA7itqjKBwhsq8qU_emVJCF7zSPaeYw-cshI37mcoaKlj4J4qUgrgB",
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

    default:
      return state;
  }
};

export default reducer;
