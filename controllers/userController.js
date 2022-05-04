const { response, request } = require("express");
const bcryptjs = require("bcryptjs");

//llammos al modelo
const Users = require("../models/user");

const usersGet = async (req = request, res = response) => {
  //limit = limite de datos que quieres que venga de la bd
  //desde = de donde quiere que empiece es decir si pones 5 entoces te traera del 5 para arriba
  const { limit = 5, desde = 0 } = req.query;

  //esto no tiene nada que ve rcon lo de arriba es para filtrar los estados false y que retorene lo true
  const query = { estado: true };

  // const user = await Users.find(query).limit(Number(limit)).skip(Number(desde));

  // const total = await Users.countDocuments(query);

  //aca hacemos un prommise all para ejecturar los dos al mismo tiempo y asi evitar que se esten bloqueando uno del otro
  const [total, usuarios] = await Promise.all([
    Users.countDocuments(query),
    Users.find(query).limit(Number(limit)).skip(Number(desde)),
  ]);

  res.json({ total, usuarios });
};

const usersPost = async (req, res = response) => {
  const { nombre, correo, password, rol } = req.body;
  //hacemos una instacia
  const user = new Users({ nombre, correo, password, rol });

  //encriptar la contraserña
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  //guardar el usuario en  la db
  await user.save();

  res.json({
    user,
  });
};

const usersPut = async (req, res = response) => {
  const { id } = req.params;
  const { _id, password, google, correo, ...resto } = req.body;

  //TODO: validar contra base de datos

  if (password) {
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const user = await Users.findByIdAndUpdate(id, resto);

  res.json({ user });
};

const usersDelete = async(req, res = response) => {
  const { id } = req.params;
 
  //fisicamente lo borramos

  // const user = await Users.findByIdAndDelete(id)

  const user = await Users.findByIdAndUpdate(id,{estado : false})

  res.json({ user, message : 'eliminado' });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
};
