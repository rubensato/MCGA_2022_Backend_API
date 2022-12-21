const User = require('../models/user');

// Create A New User
exports.addNewUser = async (req, res) => {
  try {
    const body = req.body;
    const user = new User(body);

    if (!user)
      return res.status(400).json('Error creando el registro del usuario.');

    await user.save();
    return res.status(200).json(user);
  } catch (error) {
    console.error(error); //error
    return res.status(500).json({ message: error.message });
  }
};

// GET All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0)
      return res.status(400).json('No hay registros de usuarios.');
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// GET A User By ID
exports.getUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user)
      return res
        .status(400)
        .json('No existe registro de un usuario con ese Id.');

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// UPDATE Or MODIFY A User By ID
exports.updateUser = async (req, res) => {
  try {
    const body = req.body;
    const userId = req.params.userId;
    if (!userId)
      return res
        .status(400)
        .json('No existe el Id especificado del usuario.');

    const user = await User.findByIdAndUpdate(userId, body, {
      new: true,
    });

    if (!user)
      return res.status(400).json('Error actualizando datos del usuario.');

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// DELETE A User By ID
exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findByIdAndDelete(userId);

    if (!user)
      return res
        .status(400)
        .json('Error eliminando el registro del usuario.');

    return res
      .status(200)
      .json('Registro de usuario eliminado correctamente.');
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};