# Connect

[Heroku Link]

## Minimum Viable Product/ Functionality

Connect is a mobile application built to make networking easier. Inspired by the idea of having an mobile business card, Connect allows Users to network with one another by simply scanning their QR code.

Connect is built with React-Native, Node.js and MongoDB.

By the start of Week 11, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

### Main MVPs

- [ ] New account creation, login
- [ ] Users able to Scan each other's QR codes
- [ ] Use Google Maps API to display the time and location of networking
- [ ] Be able to search for specific contacts
- [ ] Use categories to organize your contacts
- [ ] Production README

### Auxiliary Functionality

- [ ] Hosting on Heroku/ Database
- [ ] Website to explain the application and to contain an emulator
- [ ] Be able to view your contacts on a web browser
- [ ] Application needs to include toggle to filter what the user wants to be abled upon networking

## Design Docs
* [View Wireframes][wireframes]
* [Component hierarchy][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ./wireframes
[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Group Members & Work Breakdown

Our group consists of three members, Tianyu Duan, Leo Liao and Stephen Loquet

Tianyu's primary responsibilities will be:
  - Figure out the logistics of using a phone QR scanner and sending it to the DB
  - Frontend development of the mobile App
  - Create the Landing, Login, Home, Camera, and Geolocation page
  - Learn React-Native

Leo's primary responsibilities will be:
  - Manage the backend development for the mobile app
  - Learn Node.Js and MongoDB

Stephen's primary responsibilities will be:
  - Learn React-Native
  - Frontend development of the mobile App
  - Create the Contacts, User Profile and Geolocation page


## Technologies

The mobile app, Connect, will be implemented with: JavaScript, HTML, CSS, React-Native, Redux, Node.Js and MongoDB

The primary technical challenges will be:

  - Generating User specific QR codes upon account creation

  - Scanning and displaying new contact information on own contact log

  - Utilizing all new frameworks and technologies

## Things accomplished over the weekend

 - Attempted to learn new technologies, went through tutorials

 - Decided and allocated what type of work to each individual

 - Set up a basic landing page and login page with React-Native

 - Team created proposal and started the skeleton of the project


## Implementation Timeline

### Phase 1: Backend Auth and Front End Setup(2 days)

**Objective:**
  - Implement auth using node.js with MongoDB as the Database (Leo)
  - Setup Middleware (Leo)
  - A completed series of frontend pages completed without functionality(Tianyu and Stephen)

### Phase 2:  (1 day)

**Objective:**
  - Set up state, tags, create Sample state(Leo)
  - Set up seeds(Leo)
  - Set up functionality for login page(Tianyu)
  - Set up functionality for contacts page(Stephen)

### Phase 3:  (2 days)

**Objective:**
  -  Set up Heroku, have a database to store all the user info (Stephen)
  -  Add functionality to Login, Camera, Home page(Tianyu)
  -  Add functionality to Contacts Screen, User Profile(Stephen)

### Phase 4:  (2 days)
  -  Have a functional website to explain application (Leo)
  -  Set up emulator( Leo )
  - Work on Geolocation Google API (Stephen, Tianyu)
  - Polish frontend with smooth, bug-free navigation and sufficient CSS styling


### Bonus Features (TBD)
- [ ] Works without Internet Connection
- [ ] Automatically add contact based on toggles
- [ ] Authorize to work with Facebook, Linkedin and Snapchat
- [ ] Email/Phone followup


## Plan for getting users and reviews
- All team members will share the app with at least 20 friends and ask for feed and reviews
- Friend/entrepreneur, Vivian Hsu, will attend pitching events to promote application to potential investors
