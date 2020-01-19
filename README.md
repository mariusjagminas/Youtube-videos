[![Netlify Status](https://api.netlify.com/api/v1/badges/4575a6e6-1b11-476b-9683-4a44fe7ba463/deploy-status)](https://app.netlify.com/sites/kind-almeida-4db251/deploys)

# Youtube Videos

The user can search for their favorite YouTube videos, and watch them with this app.

Live [demo](https://youtube.mjagminas.com/)

This project was built with:

- Create React [App](https://github.com/facebook/create-react-app)
- YouTube Data [API(v3)](https://developers.google.com/youtube/v3/)
- [Material-ui](https://material-ui.com/) components

## How to run this application locally

### Prerequisites

This application fetches data from [YouTube Data v3 API](https://developers.google.com/youtube/v3/). To use it, you need to acquire your own [API key](https://developers.google.com/youtube/v3/getting-started) from Google.

### Instalation

1. Clone the application to the local machine.

   ```
   https://github.com/mariusjagminas/Youtube-videos.git
   ```

2. Navigate into Youtube-videos directory.

   ```
   cd Youtube-videos
   ```

3. Install all dependencies

   ```
   npm install
   ```

4. Create .env file in the project's root directory.

5. In .env file create variable `REACT_APP_YOUTUBE_KEY`, and set its value to your YouTube API key

   ```
   REACT_APP_YOUTUBE_KEY=[YouTube Data API key]
   ```

6. To run the application type in terminal

   ```
   npm start
   ```

## Test

This project uses [Jest](https://jestjs.io/en/) and [Enzyme](https://airbnb.io/enzyme/) for testing.

To run unit tests, open the terminal and type in:

```
npm run test
```
