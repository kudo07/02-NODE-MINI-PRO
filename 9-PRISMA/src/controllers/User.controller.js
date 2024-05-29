import prisma from '../DB/db.config.js';
// post the create the user
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (findUser) {
    return res.json({
      status: 400,
      message: 'Email is already taken. Please use another email',
    });
  }
  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
  return res.json({ status: 200, data: newUser, message: 'User Created' });
};

// update user put
export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;
  await prisma.user.update({
    where: {
      id: Number(userId),
    },
    data: { name: name, email: email, password: password },
  });
  return res.json({ status: 200, message: 'User Updated succesfully' });
};

// get all the users

export const fetchUsers = async (req, res) => {
  const users = await prisma.user.findMany({});
  return res.json({ status: 200, data: users });
};

// show the users
export const showUser = async (req, res) => {
  const userId = req.params.id;
  const user = await prisma.user.findFirst({
    where: {
      id: Number(userId),
    },
  });
  return res.json({ status: 200, data: user });
};
// delte the delete user
export const deleteUser = async (req, res) => {
  const userId = req.params.id;
  const user = await prisma.user.delete({
    where: {
      id: Number(userId),
    },
  });
  return res.json({ status: 200, message: 'User delted Succesfully' });
};
