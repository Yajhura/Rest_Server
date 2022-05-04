const Roles = require("../models/roles");
const Users = require("../models/user");

const isRoleValid = async (roles = "") => {
  const exiteRol = await Roles.findOne({ roles });
  if (!exiteRol) {
    throw new Error(`el rol ${roles} no esta registrado en la bd`);
  }
};

const emailExits = async (correo = "") => {
  const existeEmail = await Users.findOne({ correo });

  if (existeEmail) {
    throw new Error("el correo ya esta registrado");
  }
};
const idExits = async (id) => {
  const exitIDbyUser = await Users.findById( id );

  if (!exitIDbyUser) {
    throw new Error(`El  ${id} no existe`);
  }
};

module.exports = {
  isRoleValid,
  emailExits,
  idExits
};
