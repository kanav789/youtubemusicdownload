const youtubedl = require("youtube-dl-exec");
const downloadMedia = async (url) => {
  try {
    console.log("Downloading audio...");
    await youtubedl(url, {
      output: "./audio.mp3",
      format: "bestaudio",
      audioFormat: "mp3",
    });

    console.log("Audio download complete ✅");
  } catch (error) {
    console.log(error);
  }
};
downloadMedia("https://youtu.be/KOiJwIFCAEw?si=M8J6H2LBdv03SDX1");
