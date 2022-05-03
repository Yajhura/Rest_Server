const { Router } = require("express");
const router = Router();

const { usersGet, usersPost, usersPut, usersDelete } = require("../controllers/users");


//GET
router.get("/", usersGet );

//POST
router.post("/", usersPost);

//PUT
router.put("/:id", usersPut);

//DELETE
router.delete("/", usersDelete);

module.exports = router;
