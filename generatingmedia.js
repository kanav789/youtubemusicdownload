const youtubedl = require("youtube-dl-exec");
const downloadMedia = async (url) => {

  try {
    console.log("Generating audio...");
    await youtubedl(url, {
      output: "./public/audio.mp3",
      format: "bestaudio",
      audioFormat: "mp3",
    });
    console.log("Generating completed");
  } catch (error) {
    console.log(error);
  }
};
module.exports = downloadMedia;
