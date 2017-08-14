const url = 'http://localhost:3000/';

export const fetchUser = (userId) =>
fetch(`${url}/user/${userId}`)
.then(res => res.json());

export const listAllContacts = (userId) =>
  fetch(`${url}/contacts/${userId}`)
  .then(res => res.json());

export const fetchConnection = (connectionId) =>
  fetch(`${url}/connection/${connectionId}`)
  .then(res => res.json());
