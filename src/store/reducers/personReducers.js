import { GET_PERSONS } from "../actions/constants";
import { DELETE_PERSON } from "../actions/constants";
import { ADD_PERSON } from "../actions/constants";

const initialState = {
  persons: []
};

const personReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSONS:
      return {
        ...state,
        persons: action.payload
      };

    case ADD_PERSON:
      return {
        ...state,
        persons: [action.payload, ...state.persons]
      };

    case DELETE_PERSON:
      return {
        ...state,
        persons: state.persons.filter(person => person.id !== action.payload)
      };
    default:
      return state;
  }
};

export default personReducers;
