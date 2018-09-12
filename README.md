# Educational App - Landmarks

## Up and Running
The app uses the Google Maps Embedded API and requires a key to be added before this feature will work as expected. Create the file `client/config/keys.js` and add the following

```javascript
  const keys = {
    gmaps: [YOUR_API_KEY]
  }

  module.exports = keys;
```

Clone the repo locally and ensure there is a running MongoDB session, then

```shell 
mongo < server/db/seeds.js
npm install
npm run build
npm run server:dev
```

Then open the app at `localhost:3000`


