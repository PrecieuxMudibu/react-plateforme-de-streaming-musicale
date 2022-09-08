This project is made with React and Vite.

1. Clone the project on your desktop with git clone.

2. Install the following dependancies with :
- react-icons : npm i react-icons
- react-router-dom : npm i react-router-dom
- react-spotify-web-playback : npm i react-spotify-web-playback
- spotify-web-api-js : npm i spotify-web-api-js

3. Create an environnement file.
- Name it ".env.local"
- Create your environnement variables like that :
    VITE_CLIENT_ID = "yourClientId"
    VITE_REDIRECT_URI_DEV = "http://localhost:5173/accueil"
    VITE_REDIRECT_URI_PROD = "https://musiker.vercel.app/accueil"
    VITE_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    VITE_RESPONSE_TYPE = "token"

4. Run the project with : npm run dev