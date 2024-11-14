// Funcion que me crea los usuarios
const createUser = (username, password) => {
  const newUser = {
    username,
    password
  }
  return newUser;
};

// Creo 3 usuarios
const user1 = createUser('gabitodev', '123');
const user2 = createUser('alex', '345');
const user3 = createUser('carol', '789');

// Los anexo a una lista
const users = [user1, user2, user3];
let intentosUser = 3;
let intentosPassword = 3;
let userIng = '';
let passIng = '';
let user = null;

const findUser = () => {
  const userExist = users.find(user => {
    if (user.username === userIng) {
      return user;
    }
  });
  return userExist;
}

while (intentosUser > 0 && intentosPassword > 0 && passIng !== findUser()?.password) {
  if (userIng === findUser()?.username) {
    passIng = prompt('Dime tu contraseña');
    intentosPassword = intentosPassword - 1
  } else {
    userIng = prompt('Dime tu usuario');
    intentosUser = intentosUser - 1
  }
}