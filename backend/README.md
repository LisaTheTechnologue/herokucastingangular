# Casting Agency Specifications

## Overview
The Casting Agency models a company that is responsible for creating movies and managing and assigning actors to those movies. You are an Executive Producer within the company and are creating a system to simplify and streamline your process.

## Models:
- Movies with attributes title and release date
- Actors with attributes name, age and gender

## Endpoints:
- GET /actors and /movies
- DELETE /actors/ and /movies/
- POST /actors and /movies and
- PATCH /actors/ and /movies/

## Roles:
- Casting Assistant
    + Can view actors and movies
- Casting Director
    + All permissions a Casting Assistant has and…
    + Add or delete an actor from the database
    + Modify actors or movies
- Executive Producer
    + All permissions a Casting Director has and…
    + Add or delete a movie from the database

## Tests:
- One test for success behavior of each endpoint
- One test for error behavior of each endpoint
- At least two tests of RBAC for each role

## Auth0
https://jolisa.auth0.com/authorize?audience=castingagency&response_type=token&client_id=tqqrz85KWCsJYxHwTOLNd080tvOkDCv7&redirect_uri=http://localhost:5000/

Follow the instruction from https://auth0.com/docs/quickstart/spa/vanillajs 
./
auth_config.json
package.json
package.lock.json
server.js

./static/css
main.css

./static/js
app
ui

./static/templates
home.html