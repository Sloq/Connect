```js

{
  session: {
    currentUser: {
      id: 1,  
      username: "iamusername"
    },
    errors: []
  },

  users: {
    1: {
      id: 1,
      username: "iamusername",
      fname: "Luke",
      lname: "Skywalker",
      phone: "3425331089",
      email: "luke@skywalker.com",
      title: "Jedi Master",
      address: "160 Spear St"
      tag_id: [ 1, 2, 3, 5, 6 ... ]
      ...
    },
    2: {
      id: 2,
      username: "Stanley",
      ...
    },
    errors: []
  },

  maps: {
    1: {
      id: 1,
      location: { latitude: 2131.21321, longitude: 21212.21312 }
      user_id: 4
    },
    2: {
      id: 2 
      ...
    }
    errors: []
  }

  tags: {
    tags: {
      1: {
        id: 2,
        title: "Recruiters",
        friends: [ 1, 2, ,3 ,4 ]
        user_id: 5
      },
      2: {
        id 2:,
        ...
      },
      3: {
        ...
      }
    },
    errors: []
  },

  taggings: {
    1: {
      id: 1,
      tag_ids: 4
      user_id: 5
    },
    2: {
      ...
    },
    errors: []
  }
}
```
