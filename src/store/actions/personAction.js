import { GET_PERSONS } from "./constants";
import { DELETE_PERSON } from "./constants";
import { ADD_PERSON } from "./constants";

import axios from "axios";

export const getPersonsWIthPromise = () => dispatch => {
  return axios
    .get("https://json-api-facker.herokuapp.com/products")
    .then(function(response) {
      dispatch({ type: GET_PERSONS, payload: response.data.data });
      console.log(response);
    });
};

export const getPersons = () => async dispatch => {
  try {
    //dispatch({ type: LOGIN_REQUEST });
    let response = await axios.get(
      "https://json-api-facker.herokuapp.com/products"
    );
    //await dispatch(loadUserData(data.uid));
    dispatch({ type: GET_PERSONS, payload: response.data.data });
  } catch (err) {
    console.log(err);
    //dispatch({ type: LOGIN_ERROR, error });
  }
};

export const deletePerson = id => {
  return {
    type: DELETE_PERSON,
    payload: id
  };
};

export const addPerson = id => {
  return {
    type: ADD_PERSON,
    payload: id
  };
};

//import request from 'axios';
//import { loadUserData } from './user';

// define constants
// define initial state
// export default reducer

/*export const login = (user, pass) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        let { data } = await request.post('/login', { user, pass });
        await dispatch(loadUserData(data.uid));
        dispatch({ type: LOGIN_SUCCESS, data });
    } catch(error) {
        dispatch({ type: LOGIN_ERROR, error });
    }
}*/

// user.js

/*import request from 'axios';

// define constants
// define initial state
// export default reducer

export const loadUserData = (uid) => async (dispatch) => {
    try {
        dispatch({ type: USERDATA_REQUEST });
        let { data } = await request.get(`/users/${uid}`);
        dispatch({ type: USERDATA_SUCCESS, data });
    } catch(error) {
        dispatch({ type: USERDATA_ERROR, error });
    }
}*/
