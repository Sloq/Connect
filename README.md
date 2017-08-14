# CONNEQT

[ConneQt][heroku]

[heroku]: https://conneqt.herokuapp.com/

ConneQt is an mobile application that is designed to improve the process of exchanging contact information. We created ConneQt to aid individuals in networking. The process is simple. To get ConneQted, simply scan another user's QR code.

We are living in the digital era where more and more social networking platforms are on the rise. It is already becoming a hassle to add or(find) the same person via LinkedIn, Facebook, Twitter, Skype, etc. Although this app is still under development, we hope ConneQt can improve people’s lives by helping them borden their horizons through an mobile app that makes making new acquaintances easier.

Our Mobile Application utilizes the MERN web stack. These frameworks stand for MongoDB, Express, React-Native, Node.js

## Features & Implementation

### Home Page
Splash Screen to be rendered on app boot

### User Authentication
Users can signup/log in. User Auth is implemented with Express backend. A User will have access to all the features of the app.

![gif of login](https://user-images.githubusercontent.com/26663031/29267799-2797d35a-809f-11e7-91d3-3b520d56c568.gif)

### Camera
Upon login, User will be automatically directed to the QR camera where one can immediately start networking with others by simply scanning another user's QR code.

![gif of camera](https://user-images.githubusercontent.com/26663031/29267858-586986e0-809f-11e7-9465-1237fb71d086.gif)

### QR Display Page
Each user will have their own unique QR component page for others to scan.

Each user's QR code contains an ID where upon scan, will access that specific user's contact information and be sent to the scanner's contacts page.

![pic of](https://user-images.githubusercontent.com/26663031/29267880-6a2cc8c4-809f-11e7-97b4-52a2f6735105.jpg)

### User Profile Page
Our mobile app's profile page is for personal use. Each user's profile page will contain a myriad of social networking platforms for the user to input their contact information into.

At each networking option, there will be a toggle to filter what others can see.

![gif of profile](https://user-images.githubusercontent.com/26663031/29267826-3c5a3760-809f-11e7-8404-2dd877959193.gif)

### Contacts Page
All of the user's scanned contacts will propagate here. Upon selection of a contact, a detail page will be rendered with that contact's permitted information. The detail page will consist of all the contact/ network information. Each item contains a clickable button that directs the user to the specific contact network platform.

![gif of contacts](https://user-images.githubusercontent.com/26663031/29267868-61098c14-809f-11e7-98d3-e22a37b2c7d6.gif)


### Map
Utilizing Airbnb's map API, all of your contacts will be mapped with a pin that details the location of sharing each other's contact information. Over time, users will be able visualize their hotspots for social and business networking.

![gif of map](https://user-images.githubusercontent.com/26663031/29267868-61098c14-809f-11e7-98d3-e22a37b2c7d6.gif)


## Future Improvements

### Phase2
