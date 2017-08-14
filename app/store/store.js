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
                profileImg: "http://res.cloudinary.com/djubcegxh/image/upload/v1502666889/panda-03_uvspyn.png",
                name: "Tianyu Duan",
                email: "tianyuduan@yahoo.com",
                birthday: "Sept 26",
                address: "735 Burnette Ave, SF, CA",
                phone: "5303121541",
                linkedin: "https://www.linkedin.com/in/tianyu-duan-96b289107/",
                facebook: 'https://www.facebook.com/tianyu.duan',
                github: 'https://github.com/tianyuduan',
                contacts: [],
                location: {
                  lattitude: 37.791305,
                  longitude: -122.393735,
                }
              },
              {
                profileImg: "http://res.cloudinary.com/djubcegxh/image/upload/v1502666889/panda-01_epa1ov.png",
                name: "Leo Liao",
                email: "ducleoliao@gmail.com",
                birthday: "Sept 26",
                address: "735 Burnette Ave, SF, CA",
                phone: "5303121541",
                linkedin: "https://www.linkedin.com/in/tianyu-duan-96b289107/",
                facebook: 'https://www.facebook.com/tianyu.duan',
                github: 'https://github.com/tianyuduan',
                contacts: [],
                location: {
                  lattitude: 37.760908,
                  longitude: -122.435004,
                }
              },
              {
              profileImg: "http://res.cloudinary.com/djubcegxh/image/upload/v1502666889/panda-02_fodhc3.png",
              name: "Stephen Loquet",
              email: "tianyuduan@yahoo.com",
              birthday: "Sept 26",
              address: "735 Burnette Ave, SF, CA",
              phone: "5303121541",
              linkedin: "https://www.linkedin.com/in/tianyu-duan-96b289107/",
              facebook: 'https://www.facebook.com/tianyu.duan',
              github: 'https://github.com/tianyuduan',
              contacts: [],
              location: {
                lattitude: 34.238424,
                longitude: -117.235801,
              }
            },
              {
              profileImg: "http://res.cloudinary.com/djubcegxh/image/upload/v1502666889/panda-04_bbfaeo.png",
              name: "Anastassia Bobokalonova",
              email: "tianyuduan@yahoo.com",
              birthday: "Sept 26",
              address: "735 Burnette Ave, SF, CA",
              phone: "5303121541",
              linkedin: "https://www.linkedin.com/in/tianyu-duan-96b289107/",
              facebook: 'https://www.facebook.com/tianyu.duan',
              github: 'https://github.com/tianyuduan',
              contacts: [],
              location: {
                lattitude: 37.791305,
                longitude: -122.393735,
              }
            },
            {
            profileImg: "http://res.cloudinary.com/djubcegxh/image/upload/v1502666889/panda-05_kanore.png",
            name: "Alex Park",
            email: "tianyuduan@yahoo.com",
            birthday: "Sept 26",
            address: "735 Burnette Ave, SF, CA",
            phone: "5303121541",
            linkedin: "https://www.linkedin.com/in/tianyu-duan-96b289107/",
            facebook: 'https://www.facebook.com/tianyu.duan',
            github: 'https://github.com/tianyuduan',
            contacts: [],
            location: {
              lattitude: 37.791305,
              longitude: -122.393735,
            }
          },
          {
          profileImg: "http://res.cloudinary.com/djubcegxh/image/upload/v1502666889/panda-06_wezx17.png",
          name: "Atom Crimi",
          email: "tianyuduan@yahoo.com",
          birthday: "Sept 26",
          address: "735 Burnette Ave, SF, CA",
          phone: "5303121541",
          linkedin: "https://www.linkedin.com/in/tianyu-duan-96b289107/",
          facebook: 'https://www.facebook.com/tianyu.duan',
          github: 'https://github.com/tianyuduan',
          contacts: [],
          location: {
            lattitude: 37.791305,
            longitude: -122.393735,
          }
        },    {
            profileImg: "http://res.cloudinary.com/djubcegxh/image/upload/v1502666890/panda-07_bqep0k.png",
            name: "Cherry Wing-Yu Lam",
            email: "tianyuduan@yahoo.com",
            birthday: "Sept 26",
            address: "735 Burnette Ave, SF, CA",
            phone: "5303121541",
            linkedin: "https://www.linkedin.com/in/tianyu-duan-96b289107/",
            facebook: 'https://www.facebook.com/tianyu.duan',
            github: 'https://github.com/tianyuduan',
            contacts: [],
            location: {
              lattitude: 37.791305,
              longitude: -122.393735,
            }
          },
          {
            profileImg: "http://res.cloudinary.com/djubcegxh/image/upload/v1502666890/panda-08_emgrtq.png",
          name: "Clare Hsu",
          email: "tianyuduan@yahoo.com",
          birthday: "Sept 26",
          address: "735 Burnette Ave, SF, CA",
          phone: "5303121541",
          linkedin: "https://www.linkedin.com/in/tianyu-duan-96b289107/",
          facebook: 'https://www.facebook.com/tianyu.duan',
          github: 'https://github.com/tianyuduan',
          contacts: [],
          location: {
            lattitude: 37.791305,
            longitude: -122.393735,
          }
        },
        {
        profileImg: "http://res.cloudinary.com/djubcegxh/image/upload/v1502666890/panda-09_wnkexq.png",
        name: "Sean O'Reilly",
        email: "tianyuduan@yahoo.com",
        birthday: "Sept 26",
        address: "735 Burnette Ave, SF, CA",
        phone: "5303121541",
        linkedin: "https://www.linkedin.com/in/tianyu-duan-96b289107/",
        facebook: 'https://www.facebook.com/tianyu.duan',
        github: 'https://github.com/tianyuduan',
        contacts: [],
        location: {
          lattitude: 37.791305,
          longitude: -122.393735,
        }
      },
      {
      profileImg: "http://res.cloudinary.com/djubcegxh/image/upload/v1502666889/panda-03_uvspyn.png",
      name: "Zachary Greathouse",
      email: "tianyuduan@yahoo.com",
      birthday: "Sept 26",
      address: "735 Burnette Ave, SF, CA",
      phone: "5303121541",
      linkedin: "https://www.linkedin.com/in/tianyu-duan-96b289107/",
      facebook: 'https://www.facebook.com/tianyu.duan',
      github: 'https://github.com/tianyuduan',
      contacts: [],
      location: {
        lattitude: 37.791305,
        longitude: -122.393735,
      }
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
