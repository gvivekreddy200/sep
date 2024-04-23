require("dotenv").config()
const express = require("express");
const http = require("http");
const { selectAQoutation } = require("./db-access");

const PORT = process.env.PORT;
const FILE_STORAGE_HOST = process.env.FILE_STORAGE_HOST;
const FILE_STORAGE_PORT = parseInt(process.env.FILE_STORAGE_PORT);

const app = express();

app.get("/image", async (req, res) => {
  const imagePath = req.query.path;
  const forwardRequest = http.request(
    {
      host: FILE_STORAGE_HOST,
      port: FILE_STORAGE_PORT,
      path: `/image?path=${imagePath}`,
      method: "GET",
    },
    (forwardResponse) => {
      res.writeHead(forwardResponse.statusCode, forwardResponse.headers);
      forwardResponse.pipe(res);
    }
  );
  req.pipe(forwardRequest);
});

app.get("/quotation", async (req, res) => {
  let quotation = await selectAQoutation();
  res.status(200).json(quotation);
});

app.listen(PORT, () => {
  console.log(`Quotation service listening on port ${PORT}`);
});
