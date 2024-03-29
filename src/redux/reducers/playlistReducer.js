import { ADD_TO_FAVOURITE } from "../actions";

const initialState = {
  playlist: [],
};

const PlaylistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        playlist: action.payload,
      };

    default:
      return state;
  }
};
export default PlaylistReducer;
