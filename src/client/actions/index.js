import axios from "axios";

export const FETCH_USERS = 'fetch_users';

export const fetchUsers = () => async (dispatch,getState,api) => {
const res = await api.get('/users');
dispatch ({
    type : FETCH_USERS,
    payload : res
  });

};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');
console.log('res',res);
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  });
};

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');

  dispatch({
    type: FETCH_ADMINS,
    payload: res
  });
};