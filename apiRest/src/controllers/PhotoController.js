import multer from 'multer';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('photo');

class PhotoController {
	store(req, res) {
		return upload(req, res, async error => {
			if (error) {
				console.log(error);
				return res.status(400).json({
					errors: [error.code],
				});
			}

			return res.json(req.file);
		});
	}
}

export default new PhotoController();
