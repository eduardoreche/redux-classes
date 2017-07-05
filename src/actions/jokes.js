import axios from 'axios';
import { FETCH_JOKE, FETCH_JOKE_SUCCESS, FETCH_JOKE_FAILURE } from './types';

export const fetchJoke = () => {
  return (dispatch) => {
    dispatch({ 
      type: FETCH_JOKE
    });


    axios.get('https://api.chucknorris.io/jokes/random', {})
      .then(response => fetchJokeSuccess(dispatch, response.data))
      .catch(error => fetchJokeFailure(dispatch, error));
  }
};

export const fetchJokeSuccess = (dispatch, joke) => {
  dispatch({
    type: FETCH_JOKE_SUCCESS,
    payload: joke
  });
};

export const fetchJokeFailure = (dispatch, error) => {
  dispatch({
    type: FETCH_JOKE_FAILURE, 
    payload: error
  });
};