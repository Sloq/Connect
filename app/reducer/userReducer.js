import { updateUser } from '../actions/userActions';

const defaultState = {
  user: undefined,
};

const userReducer = (state=defaultState, action) => {
  switch(action.type){
    case 'GET_USER':
      return {
        user: action.user_id
      };
    case 'UPDATE_USER':
      return {
        user: action.user
      };

    default:
      return state;
  }
};

export default userReducer;
