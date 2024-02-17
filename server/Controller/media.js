import {v4} from "uuid";
import MediaModel from '../Model/MediaModel.js'
import fs from 'fs'
import UserModel from "../Model/UserModel.js";

export const uploadMedia = async (req, res) => {
  try {
    let { mediaName } = req.body;
    let media = req.files;

    // check for duplicate files
    let duplicateObject = {};
    let mediaArray =[];
    media.forEach((m) => {
      if(duplicateObject.hasOwnProperty(`${m.originalname}_${m.size}`)) {
        fs.unlink(m.path, (err) => {
          if(err) {
            console.log(err)
          }
        })
      } else {
          duplicateObject[`${m.originalname}_${m.size}`] = 1;

          // push mediaDetails into an array for DB operation
          let obj = {
            filename: m.filename,
            path: m.path,
            size: m.size,
            type: m.mimetype,
          }
          mediaArray.push(obj)
      }
    })

    // Store media info in DB
    await MediaModel.create({mediaId: v4(), mediaName, media: mediaArray, uploadedBy: req.tokenId, timestamp: Date.now()})

    res.status(200).json({
      message: "Media uploaded"
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({message: "Error in uploading media"})
  }
}