import multer from "multer";

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // unique name
  },
});

export const upload = multer({ storage });
