const router = require("express").Router();
const Video = require("../model/Video");

router.get("/getVideo/", async (req, res) => {
  try {
    const getAdv = await Video.find({});
    res.send(getAdv);
  } catch (err) {
    res.send(err);
  }
});
