import rootReducer from '../reducer/index';
import thunk from 'redux-thunk'; // for async action
import {createStore, compose, applyMiddleware} from 'redux';
import {AsyncStorage} from 'react-native';
import {persistStore, autoRehydrate} from 'redux-persist';

const defaultState = {
  user: {_id: "1233456677id",
      name: "Stephen",
      email: "stephen@hotmail.com",
      birthday: "April 1st",
      address: "1234 Cherry Lane",
      phone: "555-5555",
      linkedin: "mylinkedin",
      facebook: "myFace",
      instagram: "myInsta",
      twitter: "twitinator",
      github: "gitpocolypse",
      pic: 'https://s-media-cache-ak0.pinimg.com/736x/63/0f/0e/630f0ef3f6f3126ca11f19f4a9b85243--dachshund-puppies-weenie-dogs.jpg',
      contacts: [{
                name: "Tianyu Duan",
                email: "tianyuduan@yahoo.com",
                birthday: "Sept 26",
                address: "735 Burnette Ave, SF, CA",
                phone: "5303121541",
                linkedin: "https://www.linkedin.com/in/tianyu-duan-96b289107/",
                facebook: 'https://www.facebook.com/tianyu.duan',
                github: 'https://github.com/tianyuduan',
                contacts: []
              },
              {
                name: "Leo Liao",
                email: "ducleoliao@gmail.com",
                birthday: "Sept 26",
                address: "735 Burnette Ave, SF, CA",
                phone: "5303121541",
                linkedin: "https://www.linkedin.com/in/tianyu-duan-96b289107/",
                facebook: 'https://www.facebook.com/tianyu.duan',
                github: 'https://github.com/tianyuduan',
                contacts: []
              },
              {
              name: "Stephen Loquet",
              email: "tianyuduan@yahoo.com",
              birthday: "Sept 26",
              address: "735 Burnette Ave, SF, CA",
              phone: "5303121541",
              linkedin: "https://www.linkedin.com/in/tianyu-duan-96b289107/",
              facebook: 'https://www.facebook.com/tianyu.duan',
              github: 'https://github.com/tianyuduan',
              contacts: []
            },
              {
              name: "Anastassia Bobokalonova",
              email: "tianyuduan@yahoo.com",
              birthday: "Sept 26",
              address: "735 Burnette Ave, SF, CA",
              phone: "5303121541",
              linkedin: "https://www.linkedin.com/in/tianyu-duan-96b289107/",
              facebook: 'https://www.facebook.com/tianyu.duan',
              github: 'https://github.com/tianyuduan',
              contacts: []
            },
            {
            name: "Alex Park",
            email: "tianyuduan@yahoo.com",
            birthday: "Sept 26",
            address: "735 Burnette Ave, SF, CA",
            phone: "5303121541",
            linkedin: "https://www.linkedin.com/in/tianyu-duan-96b289107/",
            facebook: 'https://www.facebook.com/tianyu.duan',
            github: 'https://github.com/tianyuduan',
            contacts: []
          },
          {
          name: "Atom Crimi",
          email: "tianyuduan@yahoo.com",
          birthday: "Sept 26",
          address: "735 Burnette Ave, SF, CA",
          phone: "5303121541",
          linkedin: "https://www.linkedin.com/in/tianyu-duan-96b289107/",
          facebook: 'https://www.facebook.com/tianyu.duan',
          github: 'https://github.com/tianyuduan',
          contacts: []
        },    {
            name: "Cherry Wing-Yu Lam",
            email: "tianyuduan@yahoo.com",
            birthday: "Sept 26",
            address: "735 Burnette Ave, SF, CA",
            phone: "5303121541",
            linkedin: "https://www.linkedin.com/in/tianyu-duan-96b289107/",
            facebook: 'https://www.facebook.com/tianyu.duan',
            github: 'https://github.com/tianyuduan',
            contacts: []
          },
          {
          name: "Clare Hsu",
          email: "tianyuduan@yahoo.com",
          birthday: "Sept 26",
          address: "735 Burnette Ave, SF, CA",
          phone: "5303121541",
          linkedin: "https://www.linkedin.com/in/tianyu-duan-96b289107/",
          facebook: 'https://www.facebook.com/tianyu.duan',
          github: 'https://github.com/tianyuduan',
          contacts: []
        },
        {
        name: "Sean O'Reilly",
        email: "tianyuduan@yahoo.com",
        birthday: "Sept 26",
        address: "735 Burnette Ave, SF, CA",
        phone: "5303121541",
        linkedin: "https://www.linkedin.com/in/tianyu-duan-96b289107/",
        facebook: 'https://www.facebook.com/tianyu.duan',
        github: 'https://github.com/tianyuduan',
        contacts: []
      },
      {
      name: "Zachary Greathouse",
      email: "tianyuduan@yahoo.com",
      birthday: "Sept 26",
      address: "735 Burnette Ave, SF, CA",
      phone: "5303121541",
      linkedin: "https://www.linkedin.com/in/tianyu-duan-96b289107/",
      facebook: 'https://www.facebook.com/tianyu.duan',
      github: 'https://github.com/tianyuduan',
      contacts: []
      }
    ]
  }
};

export const configureStore = (state=defaultState) => {
  const store = createStore(rootReducer, state, compose(
    applyMiddleware(thunk),
    autoRehydrate()
  ));
  persistStore(store, {storage: AsyncStorage});
  return store;
};
