import { combineReducers } from "redux";

import personReducers from "./personReducers";

const reducer = combineReducers({
  persons: personReducers
});

export default reducer;
