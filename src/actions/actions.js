import {FETCH_DATA_SUCCESS, FETCH_DATA_ERROR} from "../constants/constants";

const fetchData = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: data
});

const fetchEror = data => ({
  type: FETCH_DATA_ERROR,
  payload: data
});

export const getData = values => async dispatch => {

}