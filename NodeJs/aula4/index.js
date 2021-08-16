/* eslint-disable no-continue */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const fs = require('fs').promises;
const path = require('path');

/* fs.readdir(path.resolve(__dirname))
	.then(files => {
		console.log(files);
	})
	.catch(err => {
		console.log(err);
	}); */

async function readdir(raiz) {
	const rootDir = raiz || path.resolve(__dirname);
	const files = await fs.readdir(rootDir);
	walk(files, rootDir);
}

async function walk(files, rootDir) {
	for (const file of files) {
		const fileFullPath = path.resolve(rootDir, file);
		const stats = await fs.stat(fileFullPath);

		if (/\.git/g.test(fileFullPath)) continue;
		if (/node_modules/g.test(fileFullPath)) continue;

		if (stats.isDirectory()) {
			readdir(fileFullPath);
			continue;
		}

		if (/* !/\.css$/g.test(fileFullPath) &&  */ !/\.html$/g.test(fileFullPath)) continue;

		console.log(fileFullPath /* , stats.isDirectory() */);
	}
}

readdir('/home/daniel/www/cursojs/');
