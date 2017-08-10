const ADD_ALERT = 'ADD_ALERT';
const REMOVE_ALERT = 'REMOVE_ALERT';

export const addAlert = (text) => ({
  type: ADD_ALERT,
  text
});

export const removeAlert = (id) => ({
  type: REMOVE_ALERT,
  id
});
