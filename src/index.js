const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  await fs.writeFile(`${fileName}`, `${fileContent}`, (err) => {
    console.log(err);
  });
};

const myFileReader = async (fileName) => {
  let data = await fs.readFile(`${fileName}`, { encoding: "utf-8" });
  console.log(data);
};

const myFileUpdater = async (fileName, fileContent) => {
  await fs.appendFile(`${fileName}`, `${fileContent}`, (err) => {
    console.log(err);
  });
};

const myFileDeleter = async (fileName) => {
  await fs.unlink(`${fileName}`, (err) => {
    console.log(err);
  });
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
