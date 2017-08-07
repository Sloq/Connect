## Component Hierarchy

**Auth/Form Container**
  - Signup Form
  - Login Form

**HomeContainer**

  - **Nav**
    + Map
    + User Profile
    + Home
    + Contacts

**MapContainer**
    + Map with filter function

**ProfileContainer**
    + User Detail
    + Tags (Other users)

**TagsContainer**
    + Single Tag (contains users)

## Routes

| Path                       | Component           |
|----------------------------|---------------------|
| "/signup"                  | "AuthContainer"     |
| "/login"                   | "AuthContainer"     |
| "/"                        | "NavContainer"      |
| "/users/:id"               | "HomeContainer"      |
| "/users/:id/map"           | "MapContainer"      |
| "/users/:id/tags"          | "ProfileContainer"  |
| "/users/:id/tags/:id"      | "TagsContainer"     |
