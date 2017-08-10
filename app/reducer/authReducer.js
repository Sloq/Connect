const defaultState = {
  user_id: undefined,
};
const AuthReducer = (state=defaultState, action) => {
  switch(action.type){
    case 'SIGN_IN':
      return {
        user_id: action.user_id
      };
    case 'SIGN_OUT':
      return {
        user_id: undefined
      };

    default:
      return state;
  }
};

export default AuthReducer;
