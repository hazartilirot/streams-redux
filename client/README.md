## An app for video streaming
It's a straightforward app providing basic CRUD operations. A user creates a 
room for video streaming on the website, then places id's stream in OBS 
settings and consequently shares the room with other users so that anyone could
watch their stream.
The Project is taken from Modern React with Redux course by Stephen Grider


### Prerequisites
* [Node.js](https://nodejs.org/en/)
* [OBS Studio](https://obsproject.com/download) video streaming
* [Node-Media-Server](https://github.com/illuspas/node-media-server) a web 
  player
* [json-server](https://www.npmjs.com/package/json-server) a simple REST API

### Dependencies
REST API

`/streams-redux/api`

RTMP server

`/streams-redux/rtmpserver`

### Installation
There are two dependencies that should be installed and run prior to the main 
app. The first one serves as a REST API. The second is rtmp server. If you have
any issues please check if two ports are opened in the firewall:

`rtmp port 1935`

`http port 8000`

Open each directory and install dependencies
```
npm install
```
Once a dependency installed run it so that the process runs in the background.
Overall there is going to be three processes.
```
npm start
```
The last step is to create an OAuth 2.0 Client ID in Google so that a user could
log in using its credentials.
https://console.developers.google.com/apis/credentials
Once it's set create .env file in a main directory assigning Client ID to
`REACT_APP_OAUTH2_CLIENT_ID` variable.

### Usage
Having run all processes create a new stream, copy its id and run OBS studio. 
In the main menu go to

`Settings -> Stream -> Service -> Custom...`

Paste the id of your stream you've created.

**server**: `rtmp://localhost/live`

**key**: `id of your stream.`

Hit "Start streaming" at the same time you may press a play button in the video
player in the web page of your stream.