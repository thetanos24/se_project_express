const router = require("express").Router();

const { login, createUser } = require("../controllers/users");

const userRouter = require("./users");
const itemRouter = require("./clothingitems");

const auth = require("../middlewares/auth");
const {
  validateUserBody,
  validateAuthentication,
} = require("../middlewares/validation");

const { NotFoundError } = require("../utils/errors/NotFoundError");

router.post("/signin", validateAuthentication, login);
router.post("/signup", validateUserBody, createUser);

router.use("/users", auth, userRouter);

router.use("/items", itemRouter);

router.use((req, res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

module.exports = router;
