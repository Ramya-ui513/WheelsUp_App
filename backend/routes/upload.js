import express from 'express';
import multer from 'multer';
import cloudinary from '../utils/cloudinary.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/image', upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    return res.json({ url: result.secure_url });
  } catch (err) {
    return res.status(500).json({ error: 'Upload failed' });
  }
});

export default router;
