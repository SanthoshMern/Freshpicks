const express = require("express");
require("./config/database").connect();
const multer = require("multer");
const cors = require("cors")
const UserModel = require("./model/user-model");
const path = require('path');

const products_routes = require("./routes/products");

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())
app.use("/api/products", products_routes);


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },
  
  filename:(req, file , cb ) =>{
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({storage:storage});

app.post("/", upload.single("data"), async (req, res) => {

//   const newFile = new File({
//     filename: req.file.filename,
//     path: req.file.path
// });

// try {
//   await newFile.save();
//   res.json({ filename: req.file.filename, message: 'File uploaded successfully' });

// } catch (error) {
//   console.error(error);
//   res.status(500).json({ message: 'Error uploading file' });
// }

      UserModel.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.json(err)) 

  });

  app.get("/", (req, res) =>{
    res.send("hello node")
  })
  

app.listen(5000, () => {
    console.log('Server running ');
});

