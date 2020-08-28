# covidtracker
unit 3 project: COVID-19 tracker react app.

## CRUD Routes
|User Story|Route|
|-|-|
|User can browse US Country and State COVID totals| GET /api/stats|
|User can select a US state and see more info| GET /api/stats/:id|
|User can save a US state to profile| POST /user/stats/:id|
|User can delete a US state from profile| DELETE /user/stats/:id|
|User can update email or password| PUT /user/profile/:id|
|User can click on a US state in profile to see more| GET /api/stats/:id|
|User can view their profile| GET /user/profile|
|Access create account page| GET /user/new|
|User can create account| POST /user|
|Access log in page| GET /auth/login|
|User can log in| POST /auth/login|
|User can log out| GET /auth/logout|