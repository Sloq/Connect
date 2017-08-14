# CONNEQT

[ConneQt][heroku]

[heroku]: https://conneqt.herokuapp.com/

ConneQt is an mobile application that is designed to improve the process of exchanging contact information. We created ConneQt to aid individuals in networking. The process is simple. To get ConneQted, simply scan another user's QR code.

With more and more social networking platforms are on the rise, it is ALREADY becoming a hassle to add/find another person via LinkedIn, Facebook, Twitter, Skype, etc. Although this app is still under development, we hope ConneQt can improve peoples lives by helping them borden their horizons through easier networking.

Our mobile application utilizes the MERN web stack. These frameworks stand for MongoDB, Express, React-Native, Node.js We also utilized Redux with React-Native.

## Features & Implementation

### User Authentication
Users can signup/log in. User Auth is implemented with Express backend. A User will have access to all the features of the app.

![gif of login](https://user-images.githubusercontent.com/26663031/29267799-2797d35a-809f-11e7-91d3-3b520d56c568.gif)

### Camera
Upon login, user will be automatically directed to the QR camera where one can immediately start networking with others by simply scanning another user's QR code.

![gif of camera](https://user-images.githubusercontent.com/26663031/29267858-586986e0-809f-11e7-9465-1237fb71d086.gif)

### QR Display Page
Each user will have their own unique QR component page for others to scan.

Each user's QR code contains an ID where upon scan, will access that specific user's contact information and all of contact info will be sent to the scanner's contacts page.

![pic of](https://user-images.githubusercontent.com/26663031/29267880-6a2cc8c4-809f-11e7-97b4-52a2f6735105.jpg)

### User Profile Page
Our mobile app's profile page is for personal use. Each user's profile page will contain a myriad of social networking platforms for the user to input their contact information into.

At each networking option, there will be a toggle to filter what others can see.

![gif of profile](https://user-images.githubusercontent.com/26663031/29267826-3c5a3760-809f-11e7-8404-2dd877959193.gif)

### Contacts Page
All of the user's scanned contacts will propagate here. Upon selection of a contact, a detail page will be rendered with that contact's permitted information. The detail page will consist of all the contact/ network information. Each item contains a clickable button that directs the user to the specific contact network platform.

![gif of contacts](https://user-images.githubusercontent.com/26663031/29267868-61098c14-809f-11e7-98d3-e22a37b2c7d6.gif)


### Map
Utilizing Airbnb's map API, all of your contacts will be mapped with pins that details the location where the sharing of each other's contact information happened. Over time, users will be able visualize their hotspots for social and business networking.

![gif of map](https://user-images.githubusercontent.com/26663031/29267848-4e84d288-809f-11e7-89a8-d98c49f3cd70.gif)

## Challenges
To attempt this mobile app in one week was a daunting task. The biggest challenge was learning five new technologies in the span of a week and utilizing what we learned to craft a mobile app that fit our initial goals for functionality. Debugging, learning frameworks and managing an efficient git workflow consumed a lot of our time at the beginning. Towards the end of the week, we were able to improve our time efficiency, cooperation, quality of code, in addition to, swiftly wrapping our components together and offering a presentable prototype.

## Future Improvements

### Implement functionality to application from backend
One big challenge for this application was connecting react-native properly to ExpressJS. We managed to set up User Authentication within one week's time, but was short on time in wiring the backend logic to the rest of our react components

### Phase2
Our secondary goal for this app is to send network requests automatically. This means upon scanning another user's QR code, based on that specific user's filtered information, ConneQt will submit add requests to all the social platforms for you. One of the problems we see right now is utilizing Facebook/Twitter/Instagram/Linkedin APIs to send add requests. There will be permission issues.

###### Credits
Developers: Tianyu Duan, Stephen Loquet, Leo Liao
<br />
App idea accredited to: Vivian Hsu
