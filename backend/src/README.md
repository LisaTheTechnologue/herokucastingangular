# Casting Agency Specifications

## Overview
The Casting Agency models a company that is responsible for creating movies and managing and assigning actors to those movies. You are an Executive Producer within the company and are creating a system to simplify and streamline your process.

## Models:
- Movies with attributes title and release date
- Actors with attributes name, age and gender

## Roles:
- Casting Assistant
    + Can view actors and movies GET /actors and /movies
- Casting Director
    + All permissions a Casting Assistant has and… GET /actors and /movies
    + Add or delete an actor from the database DELETE /actors/ and POST /actors/
    + Modify actors or movies  PATCH /actors/ and /movies/
- Executive Producer
    + All permissions a Casting Director has and…
    + Add or delete a movie from the database DELETE /movies/ and POST /movies

## Tests:
- One test for success behavior of each endpoint
- One test for error behavior of each endpoint
- At least two tests of RBAC for each role

## Auth0
https://jolisa.auth0.com/authorize?audience=castingagency&response_type=token&client_id=tqqrz85KWCsJYxHwTOLNd080tvOkDCv7&redirect_uri=http://localhost:5000/