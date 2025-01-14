# YouTube Music Downloader

This project allows users to download audio from YouTube videos by providing a link. The application extracts the audio and provides a download link for the user.

## Features

- Extract audio from YouTube videos.
- Download the extracted audio in MP3 format.
- Simple and user-friendly interface.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/youtubemusicdownload.git
    ```
2. Navigate to the project directory:
    ```bash
    cd youtubemusicdownload
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    node server.js
    ```
2. Open your browser and navigate to `http://localhost:8081`.
3. Enter the YouTube video link and click "Generate".
4. Once the audio is ready, click "Download" to save the MP3 file.

## Project Structure

- `Views/`: Contains the EJS templates for the web pages.
- `public/`: Contains the static files, including the downloaded audio.
- `server.js`: The main server file.
- `generatingmedia.js`: Contains the logic for downloading and converting YouTube videos to audio.

## License

This project is licensed under the MIT License.
