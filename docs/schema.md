# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
fname           | string    | not null, indexed
lname           | string    | not null, indexed
phone           | string    | not null
email           | string    | not null
title           | string    | 
address         | string    | 
city            | string    | 
state           | string    | 
zipcode         | string    | 
company         | string    | 
tag_id          | string    | 
password_digest | string    | not null
session_token   | string    | not null

## maps

column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
location      | string    | not null
user_id       | integer   | not null, foreign key (references users), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
friends     | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user), indexed
tag_id      | integer   | not null, foreign key (references tag), indexed

