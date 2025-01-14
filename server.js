const express = require("express");

const path = require("path");
const app = express();

const fs = require("fs");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add this line
const PORT = process.env.PORT || 8081;
app.use("/public", express.static(path.join(__dirname, "public")));

const downloadMedia = require("./generatingmedia");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/download", (req, res) => {
  res.render("Download");
});
app.post("/generate", async (req, res) => {
  try {
    const { Link } = req.body;
    if (Link === "") {
      res.send("Please enter a  link");
      return;
    }
    await downloadMedia(Link)
      .then(() => {
        res.render("Download");
      })
      .catch((err) => {
        res.send("please enter a valid link ");
        console.log(err);
      });
  } catch (error) {
    res.send("please enter a valid link ");
    console.log(error);
  }
});

app.post("/download", async (req, res) => {
  try {
    console.log("Download request received");
    const filePath = path.join(__dirname, "public", "audio.mp3");

    setTimeout(() => {
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
          res.redirect("/");
        } else {
          console.log("File deleted successfully");
        }
      });
    }, 10000);

    res.download(filePath, "audio.mp3", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File download successfully");
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
