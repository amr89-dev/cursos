const userRouter = require("express").Router();
const UserService = require("../services/user.service");

const service = new UserService();

userRouter.get("/", async (req, res) => {
  try {
    const users = await service.getAll();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error, message: error.message });
  }
});

userRouter.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newUser = await service.create(data);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error, message: error.message });
  }
});

userRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const user = await service.updateUser(id, body);
    res.status(201).json({
      user,
      message: "El usuario ha sido actualizado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error, message: error.message });
  }
});

userRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await service.deleteUser(id);
    res.status(201).json({
      user,
      message: "El usuario ha sido eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error, message: error.message });
  }
});

module.exports = userRouter;
