# COVID tracker
COVID tracker empowers users with easy-access, accurate, and up-to-date information about Covid-19 in the United States.

## Deployed App
- https://uscovidtracker.herokuapp.com/user/profile

## Technologies Used
- Stack: React, Express, PSQL
- COVID tracker leverages React for the front end, Express on the backend and PSQL for the database.
- The app also leverages `react-chartjs-2` and `chart.js` for data visualization and `moment` for date manipulation.
- The data behind our visualizations and statistics is provided by [The COVID Tracking Project](https://covidtracking.com/) and has been used by news outlets such as The New York Times, FiveThirtyEight, and The Wall Street Journal.

## Approach
- This app was split into areas of ownership with two team members on the backend and two on the frontend.
- While each team member worked on the frontend, owners acted as points for any bugs and deeper understanding of expected behavior.
- User stories, wireframes, and ERDs were created as a team to align overall vision and direction.
- The MOSCOW method was used to prioritize user stories.
- Riskiest pieces of the project, particularly charts, were vetted first to ensure project success.
- Express routes and expected json returns were designed up front to allow front end development to take place in-parallel.
- Similarly, the React frontend diagram was designed up front to allow members to pick up frontend tasks with clear understanding of the client structure and state. 
- Zoom standups were held every morning to track overall progress and identify potential blockers towards the MVP.

## Use
- A simple `yarn install` or `npm install` for both the express app and client will provide all package dependencies.

## Diagrams & Wireframes
- [Database](./client/public/database_design.png)
- [React State Flow](./client/public/readme-assets/react_state_flow.png)
- [Wireframes](./client/public/wireframes)

## Express API Routes
|User Story|Route|
|-|-|
|User can browse US Country and State COVID totals| `GET /api/stats`|
|User can select a US state and see more info| `GET /api/stats/:id`|
|User can save a US state to profile| `POST /api/user/stats/:id`|
|User can delete a US state from profile| `DELETE /api/user/stats/:user_id/:state_id/`|
|User can update email or password| `PUT /api/user/profile/:id`|
|User can click on a US state in profile to see more| `GET /api/stats/:id`|
|User can view their profile| `GET /api/user/profile`|
|Access create account page| `GET /api/user/new`|
|User can create account| `POST /api/user`|
|Access log in page| `GET /api/auth/login`|
|User can log in| `POST /api/auth/login`|
|User can log out| `GET /api/auth/logout`|

## Future Opportunities
- Further analytics, paritcularly racial and ethnic data, should be implemented.
- Historical data could be stored in our database to improve performance. Due to time contstraint, this was not implemented in the intial release.
