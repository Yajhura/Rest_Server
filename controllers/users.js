const { response,request } = require("express");

const usersGet = (req = request, res = response) => {
      
   const {nombre ='no name'} = req.query
   
  res.status(403).json({ ok: true, message: "get",nombre });
};

const usersPost = (req, res = response) => {
  const { id, edad } = req.body;

  res.json({ ok: true, id, edad });
};
const usersPut = (req, res = response) => {
  const { id } = req.params;

  res.json({ ok: true, message: "put-controlers", id });
};
const usersDelete = (req, res = response) => {
  res.json({ ok: true, message: "delete" });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
};
