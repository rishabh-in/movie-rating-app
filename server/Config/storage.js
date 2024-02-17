import multer from 'multer';
import {v4} from "uuid";

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Static/media/")
  },
  filename: (req, file, cb) => {
    cb(null, v4() + "-" + file.originalname);
  }
});

export const upload = multer({storage: storage});