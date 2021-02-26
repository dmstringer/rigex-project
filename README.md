# rigex-project

## Instructions for starting the server

1. This project requires node version 12.20.1
2. After pulling this repo, navigate to the /server folder and run `npm i` in
   the terminal to build your node modules.
3. Run `touch .env` to create your enviroment file.
4. Add the following to the new .env file you just created:

PORT=4000  
SQL_CONNECTION_URL=postgres://USER@HOST:PORT/rigex-project

5. Replace the all caps words with your credentials. The default postgres port
   is 5432.
6. Run the command `npm run start-dev` and go to http://localhost:4000/graphql

## Accessing Google Maps for testing/development

1. Create a .env file in '/rigex-front-end'
2. Add REACT_APP_GOOGLE_MAPS_KEY=API-KEY-HERE
3. contact McRae for API key
4. Restart dev server
