import uuid from 'uuid'; // for adding id to all the alert message

const defaultState = [];

const AlertReducer = (state=defaultState, action) => {
  switch(action.type){
    case 'ADD_ALERT':
      return [
        ...state,
      {
        text: action.text,
        id: uuid.v4() // id will come in 4 letters
      }];

    case 'REMOVE_ALERT':
    // state will filer for duplicate id
      return state.filter((alert) =>{
        if(alert.id === action.id) {
          return false;
        } else {
          return true;
        }
      });

    default:
      return state;
  }
};

export default AlertReducer;
