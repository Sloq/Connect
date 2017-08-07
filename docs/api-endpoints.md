# API Endpoints

## HTML API

### Root

- `GET /` - Initiate the Mobile App

## JSON API

### Users

- `POST /api/users` - Create new user
- `GET /api/users/:id` - Get user information
- `PATCH /api/users/:id` - Edit user information

### Session

- `POST /api/session` - Sign In
- `DELETE /api/session` - Sign Out

### Tags

- `GET /api/tags` - Index - see all users on the contact list
- `POST /api/tags` - Form - create new tags (add user into contact list)
- `DELETE /api/tags/:id` - Delete - remove user in the contact list

### Taggings

- `GET /api/taggings` - Index - see other users' contact list

