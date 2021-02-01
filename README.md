# rigex-project

## Instructions for starting the server

1. After pulling this repo, navigate to the /server folder and run `npm i` in the terminal to build your node modules.
2. Run `touch .env` to create your enviroment file.
3. Add the following to the new .env file you just created:

PORT=4000  
SQL_CONNECTION_URL=postgres://USER@HOST:PORT/DATABASE

4. Replace the all caps words with your credentials. We are using port 5432 for this project.
5. Run the command `npm run start-dev` and go to http://localhost:4000/graphql
