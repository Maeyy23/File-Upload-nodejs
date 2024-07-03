const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");
const uploadRoutes = require("./routes/upload.routes.js");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));
app.use("/file-upload", uploadRoutes);

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is running good at port ${PORT}`);
});
