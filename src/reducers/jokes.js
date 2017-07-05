import { FETCH_JOKE, FETCH_JOKE_SUCCESS, FETCH_JOKE_FAILURE } from '../actions/types';

const INITIAL_STATE = {
  id: '',
  icon_url: '',
  url: '',
  value: '',
  loading: false, 
  error: null
};

const jokes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_JOKE:
      return { ...state, loading: true, error: null }
    case FETCH_JOKE_SUCCESS:
      const { id, icon_url, url, value } = action.payload;

      return { ...state, id, icon_url, url, value, loading: false, error: null }
    case FETCH_JOKE_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
};

export default jokes;
