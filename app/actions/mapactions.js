
export const { GET_CURRENT_LOCATION } = 'constants';


export function getCurrentLocation(){
  return(dispatch) => {
    navigator.gelocation.getCurrentPosition(
      (position) => {
        
      }

    );
  };
}
