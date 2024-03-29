import { GET_SONG } from "../actions";

const initialState = {
  data: null,
};

const currentSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONG:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
export default currentSongReducer;
