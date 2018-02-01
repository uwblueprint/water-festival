# Water Festival
### Setup
1. Clone the repo
2. Go into the client directory and install packages: `cd client && npm install`
3. Go back up to the root directory, into the backend directory and install packages: `cd ../backend && npm install`
4. Create a `.env` file within the _backend_ directory which will hold any sensitive information (i.e. MongoDB info) and input the appropriate information.

### Starting the backend server
1. Go into the backend directory: `cd backend`
2. In a terminal window, run `mongod` to start mongoDB
3. Open a new terminal window in that same "backend" directory and run `npm start` or `nodemon` if you have it (if not, run `npm install -g nodemon`.

### Viewing the app
* Download the "Expo" app from the app store
* Plug your phone into your computer and run `npm run ios` or `npm run android` depending on your phone
* If running on Android, you need to set the server URL in order for the front end to talk to the backend.  You should see `exp://{url}:19000` in your terminal when you ran `npm run android`.  Copy the server URL (_not_ the port) and replace the value of `LOCAL_SERVER` with that server URL.
