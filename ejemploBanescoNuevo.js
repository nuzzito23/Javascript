const createUser = (username, password) => {
	return {
		username,
		password,
	};
};

const user1 = createUser("miguel", "123");
const user2 = createUser("angel", "456");
const user3 = createUser("carol", "789");

const users = [user1, user2, user3];
console.log(users);

let intentosUsuario = 3;
let usuarioIngresado = null;
let intentosPassword = 3;
let passwordIngresado = null;
let userDB = "";
const getuser = (username) => {
	const user = users.find((user) => {
		if (user.username === username) {
			return user;
		}
	});
	return user;
};

while (intentosUsuario > 0 && usuarioIngresado !== userDB?.username) {
	usuarioIngresado = prompt("Ingresa tu usuario");
	userDB = getuser(usuarioIngresado);
	intentosUsuario = intentosUsuario - 1;
}

while (
	intentosPassword > 0 &&
	passwordIngresado !== userDB?.password &&
	userDB
) {
	passwordIngresado = prompt("Ingresa tu contrasena");
	userDB = getuser(passwordIngresado);
	intentospassword = intentosPassword - 1;
}
