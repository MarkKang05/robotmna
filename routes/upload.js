const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// const multer = require('multer');
// const GridFsStorage = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream');
// const app = require('../app');
// let gfs;
// const conn = mongoose.connection;

// conn.once('open', () => {
//   // Init stream
//   gfs = Grid(conn.db, mongoose.mongo);  
//   gfs.collection('uploads');
// });

// // Create storage engine
// const storage = new GridFsStorage({
//   url: process.env.DB_ADR,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//         const filename = file.originalname;
//         const fileInfo = {
//           filename: filename,
//           bucketName: 'uploads'
//         };
//         resolve(fileInfo);
//     });
//   }
// });

// const uploadfile = multer({ storage })

// router.get('/', (req, res) => {
//     res.render('feed/upload');
// });

// router.post('/', uploadfile.single('file'), (req, res) => {
//     // res.json({file: req.file});
//     res.redirect('/');
// });

// router.get('/files', (req, res) => {
//     gfs.files.find().toArray((err, files) => {
//         //check if files
//         if(!files || files.length ===0 ){
//             return res.status(404).json({
//                 err: 'No files exist'
//             });
//         }

//         return res.json(files);
//     })
// });

// router.get('/files/:filename', (req, res) => {
//     gfs.files.findOne({filename: req.params.filename}, (err, file) => {
//         if(!file || file.length ===0 ){
//             return res.status(404).json({
//                 err: 'No file exist'
//             });
//         }

//         //files exist
//         return res.json(file);
//     });
// });

// router.get('/image/:filename', (req, res) => {
//     gfs.files.findOne({filename: req.params.filename}, (err, file) => {
//         if(!file || file.length ===0 ){
//             return res.status(404).json({
//                 err: 'No file exist'
//             });
//         }

//         //check if image
//         if(file.contentType === 'image/jpeg' || file.contentType === 'image/png'){
//             //Read output to browser
//             const readstream = gfs.createReadStream(file.filename);
//             readstream.pipe(res);
//         } else{
//             res.status(404).json({
//                 err: 'Not an image'
//             });
//         }
//     });
// });

module.exports = router;