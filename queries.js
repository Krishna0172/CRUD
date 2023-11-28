
const getAllUsersQuery = 'SELECT * FROM users ORDER BY id ASC';

const insertUserQuery = (user) => {
  return `INSERT INTO users(id, name, age, dep) VALUES (${user.id}, '${user.name}', '${user.age}', '${user.dep}')`;
};

const getUserByIdQuery = (id) => `SELECT * FROM users WHERE id=${id}`;

const updateUserQuery = (user) => `UPDATE users SET name='${user.name}', age ='${user.age}', dep ='${user.dep}' WHERE id=${user.id}`;

const deleteUserQuery = (id) => `DELETE FROM users WHERE id=${id}`;

module.exports = {
  getAllUsersQuery,
  insertUserQuery,
  getUserByIdQuery,
  updateUserQuery,
  deleteUserQuery,
};
