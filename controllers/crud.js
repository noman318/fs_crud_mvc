const fs = require("fs");

const create = (req, res) => {
  res.render("create", { title: "File created", errmsg: "", succmsg: "" });
};

const postData = (req, res) => {
  let filename = req.body.filename;
  let message = req.body.message;
  if (fs.existsSync(`./users/${filename}.txt`)) {
    res.render("create", { errmsg: "File is Already registred", succmsg: "" });
  } else {
    fs.writeFile(`./users/${filename}.txt`, `${message}`, (err) => {
      if (err) {
        res.render("create", { errmsg: "Something went wrong", succmsg: "" });
      } else {
        res.render("create", {
          succmsg: "Created sucessfully!!!!",
          errmsg: "",
        });
      }
    });
  }
};

const read = (req, res) => {
  res.render("read", { title: "read file", content: "" });
};

const readData = (req, res) => {
  let filename = req.body.filename;
  let data = fs.readFileSync(`./users/${filename}.txt`);
  res.render("read", { title: "read page", content: data });
};

const update = (req, res) => {
  res.render("update", { title: "update file", Fname: "", content: "" });
};

const updateData = (req, res) => {
  let filename = req.body.filename;
  let data = fs.readFileSync(`./users/${filename}.txt`);
  let updated = req.body.message;
  fs.appendFileSync(`./users/${filename}.txt`, updated);
  fs.readFileSync(`./users/${filename}.txt`);
  res.render("update", {
    title: "update page",
    content: data,
    Fname: filename,
  });
};

const deleteFun = (req, res) => {
  res.render("delete", { title: "", Fname: "" });
};

const deleteFile = (req, res) => {
  let filename = req.body.filename;
  fs.unlinkSync(`./users/${filename}.txt`);
  res.render("delete", {
    title: `${filename}.txt file is deleted successfully`,
    Fname: filename,
  });
};

module.exports = {
  create,
  postData,
  read,
  readData,
  update,
  updateData,
  deleteFun,
  deleteFile,
};
