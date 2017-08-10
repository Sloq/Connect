export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const userSignIn = (user_id) => {
  return {
    type: SIGN_IN,
    user_id
  };
};

export const userSignOut = () => {
  return {
    type: SIGN_OUT,
  };
};
