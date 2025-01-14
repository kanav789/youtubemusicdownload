# Documentation

## Overview

This project is a web application that allows users to download audio from YouTube videos. Users can input a YouTube video link, and the application will extract the audio and provide a download link for the MP3 file.

## Endpoints

### GET /

Renders the main page where users can input the YouTube video link.

### POST /generate

Accepts the YouTube video link, processes it to extract the audio, and renders the download page.

### GET /download

Renders the download page where users can download the extracted audio.

### POST /download

Handles the download request and serves the MP3 file to the user.

## Files

### Views/index.ejs

The main page where users can input the YouTube video link.

### Views/Download.ejs

The download page where users can download the extracted audio.

### generatingmedia.js

Contains the logic for downloading and converting YouTube videos to audio using the `youtube-dl-exec` library.

### server.js

The main server file that handles routing and server logic.

## Dependencies

- `express`: Web framework for Node.js.
- `youtube-dl-exec`: Library for downloading and converting YouTube videos.
- `ejs`: Embedded JavaScript templating.

## License

This project is licensed under the MIT License.
