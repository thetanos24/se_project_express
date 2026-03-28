const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { JWT_SECRET } = require("../utils/config");

const BadRequestError = require("../utils/errors/BadRequestError");
const NotFoundError = require("../utils/errors/NotFoundError");
const ConflictError = require("../utils/errors/ConflictError");
const UnauthorizedError = require("../utils/errors/UnauthorizedError");

const createUser = (req, res, next) => {
  const { name, avatar, email, password } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hashedPassword) =>
      User.create({ name, avatar, email, password: hashedPassword })
    )
    .then((user) => {
      const userResponse = user.toObject();
      delete userResponse.password;
      res.status(201).send(userResponse);
    })
    .catch((err) => {
      if (err.code === 11000) {
        return next(
          new ConflictError("A user with this email already exists.")
        );
      }
      if (err.name === "ValidationError") {
        return next(
          new BadRequestError("Invalid data provided for user creation.")
        );
      }
      return next(err);
    });
};

const getCurrentUser = (req, res, next) => {
  const userId = req.user._id;

  User.findById(userId)
    .orFail()
    .then((user) => {
      const userResponse = user.toObject();
      delete userResponse.password;
      res.status(200).send(userResponse);
    })
    .catch((err) => {
      console.error(err);
      if (err.name === "DocumentNotFoundError") {
        return next(new NotFoundError("User not found."));
      }
      if (err.name === "CastError") {
        return next(new BadRequestError("Invalid user ID."));
      }
      return next(err);
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new BadRequestError("Email and password are required."));
  }

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
        expiresIn: "7d",
      });
      res.send({ token });
    })
    .catch((err) => {
      if (err.message === "Incorrect email or password") {
        return next(new UnauthorizedError("Incorrect email or password."));
      }
      return next(err);
    });
};

const updateCurrentUser = (req, res, next) => {
  const { name, avatar } = req.body;
  const userId = req.user._id;

  User.findByIdAndUpdate(
    userId,
    { name, avatar },
    {
      new: true,
      runValidators: true,
    }
  )
    .orFail()
    .then((user) => {
      const userResponse = user.toObject();
      delete userResponse.password;
      res.status(200).send(userResponse);
    })
    .catch((err) => {
      console.error(err);
      if (err.name === "ValidationError") {
        return next(
          new BadRequestError("Invalid data provided for profile update.")
        );
      }
      if (err.name === "DocumentNotFoundError") {
        return next(new NotFoundError("User not found."));
      }
      return next(err);
    });
};

module.exports = {
  createUser,
  getCurrentUser,
  updateCurrentUser,
  login,
};
