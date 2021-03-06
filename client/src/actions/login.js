import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';



export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post('https://usemytechstuff.herokuapp.com/api/tech/119', creds)
    .then(res => {


      // localStorage.setItem('token', res.data.payload);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.user_id);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.payload     //



      });
    })
    .catch(err => console.log(err));
};
