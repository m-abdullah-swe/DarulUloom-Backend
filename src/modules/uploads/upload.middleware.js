const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const multer = require("multer");
const ApiError = require("../../utils/ApiError");

const UPLOAD_ROOT = path.join(__dirname, "..", "..", "..", "uploads");
const UPLOAD_FOLDER = "students";
const UPLOAD_DIR = path.join(UPLOAD_ROOT, UPLOAD_FOLDER);
const MAX_FILE_SIZE = 5 * 1024 * 1024;

// Extension comes from the mime type, never from the client file name.
const EXTENSION_BY_MIME = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/gif": ".gif"
};

fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const storage = multer.diskStorage({
  destination: UPLOAD_DIR,
  filename: (req, file, cb) => {
    cb(null, `${crypto.randomUUID()}${EXTENSION_BY_MIME[file.mimetype]}`);
  }
});

const handler = multer({
  storage,
  limits: { fileSize: MAX_FILE_SIZE, files: 1 },
  fileFilter: (req, file, cb) => {
    if (!EXTENSION_BY_MIME[file.mimetype]) {
      return cb(new ApiError(422, `Unsupported file type: ${file.mimetype}. Allowed: ${Object.keys(EXTENSION_BY_MIME).join(", ")}`));
    }
    cb(null, true);
  }
}).single("file");

const uploadSingle = (req, res, next) => handler(req, res, (error) => {
  if (error instanceof multer.MulterError) {
    const message = error.code === "LIMIT_FILE_SIZE"
      ? "File is larger than the 5 MB limit"
      : `Upload failed: ${error.message}`;
    return next(new ApiError(422, message));
  }
  next(error);
});

module.exports = { UPLOAD_ROOT, UPLOAD_FOLDER, uploadSingle };
