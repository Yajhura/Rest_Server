const { Router } = require("express");
const { check } = require("express-validator");

const {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
} = require("../controllers/userController");
const {
  isRoleValid,
  emailExits,
  idExits,
} = require("../helpers/db-validators");

const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

//GET
router.get("/", usersGet);

//POST
router.post(
  "/",
  [
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    check("password", "el password debe ser mas de 6 letras").isLength({
      min: 6,
    }),
    check("correo", "el correo no es valido").isEmail(),
    // check('rol','No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check("rol").custom(isRoleValid),
    check("correo").custom(emailExits),
    validarCampos,
  ],
  usersPost
);

//PUT
router.put(
  "/:id",
  [
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom(idExits),
    check("rol").custom(isRoleValid),
    validarCampos,
  ],
  usersPut
);

//DELETE
router.delete(
  "/:id",
  [
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom(idExits),
    validarCampos,
  ],
  usersDelete
);

module.exports = router;
