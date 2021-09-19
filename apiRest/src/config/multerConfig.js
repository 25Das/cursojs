import multer from 'multer';

import { extname, resolve } from 'path';

const aleatorio = () => {
	return Math.floor(Math.random() * 10000 + 10000);
};
console.log('🚀 ~ file: multerConfig.js ~ line 8 ~ aleatorio ~ aleatorio', aleatorio());

export default {
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, resolve(__dirname, '..', '..', 'uploads'));
		},
		filename: (req, file, cb) => {
			cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
		},
	}),
};
