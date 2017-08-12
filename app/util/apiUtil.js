export const listAllContacts = () =>
  fetch('http://localhost:3000/v1/user')
  .then(res => res.json());

export const fetchUser = (userId) =>
  fetch(`http://localhost:3000/v1/user/${userId}`)
  .then(res => res.json());

export const fetchConnection = (connectionId) =>
  fetch(`http://localhost:3000/v1/connection/${connectionId}`)
  .then(res => res.json());

// fetch('http://localhost:3000/v1/user', {
// method: 'GET',
// headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//           }
//       })
//         .then((response) => response.json())
//         .then((responseData) => {
//            console.log('response object:',responseData);
//  }).catch((error) => {
//    console.error(error);
//  }).done();
