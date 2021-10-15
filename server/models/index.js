const fs = require("fs");

const getData = (filename) => {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      fs.readFile(`./files/${filename}.txt`, function (err, buf) {
        if (err) console.log("errrr", err);
        if (buf.toString()) resolved(JSON.parse(buf));
        else rejected(`No data`);
      });
    }, 100);
  });
};
const saveData = (filename, users) => {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      fs.writeFile(`./files/${filename}.txt`, JSON.stringify(users), (err) => {
        if (err) rejected(err);
        resolved(users);
      });
    }, 100);
  });
};
module.exports = { getData, saveData };
