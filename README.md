# Water Festival
### Setup
1. Clone the repo
2. install packages: `npm install`.

### Viewing the app
* Download the "Expo" app from the app store
* Plug your phone into your computer and run `npm run ios` or `npm run android` depending on your phone
* If running iOS, you need to install watchman: `brew install watchman`.
* If running on Android, you need to set the server URL in order for the front end to talk to the backend.  You should see `exp://{url}:19000` in your terminal when you ran `npm run android`.  Copy the server URL (_not_ the port) and replace the value of `LOCAL_SERVER` with that server URL.
