const asyncHandler = require("../../utils/asyncHandler");
const ApiError = require("../../utils/ApiError");
const { UPLOAD_FOLDER } = require("./upload.middleware");

exports.create = asyncHandler(async (req, res) => {
  if (!req.file) throw new ApiError(422, "A file is required in the \"file\" field");

  res.status(201).json({
    success: true,
    data: {
      fileName: req.file.filename,
      fileUrl: `/uploads/${UPLOAD_FOLDER}/${req.file.filename}`,
      mimeType: req.file.mimetype,
      fileSize: req.file.size
    }
  });
});
