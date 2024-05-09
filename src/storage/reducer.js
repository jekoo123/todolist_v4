import { SET_CONTENTS } from "./actions";

const initialState = {
  contents: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONTENTS:
      return { ...state, contents: [...state.contents, action.payload] };

    default:
      return state;
  }
}
export default rootReducer;
