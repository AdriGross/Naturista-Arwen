let isRegistered, registerUserName, registerPassword;
registerUserName = "";

const wishesToRegister = confirm(
  "Bienvenidos al sitio. Haz click en OK para registrarte"
);

do {
  if (wishesToRegister) {
    if (!registerUserName) {
      registerUserName = prompt("Ingresa tu nombre de usuario");
    }
    if (registerUserName.length >= 3) {
      registerUserName = registerUserName.toLocaleLowerCase();

      registerPassword = prompt("Ingresa tu password");

      if (registerPassword.length >= 6) {
        alert("El registro se completo exitosamente");
        isRegistered = true;
      } else {
        alert("El password debe contener por lo menos 6 caracteres");
        registerPassword = null;
      }
    } else {
      alert("El nombre de usuario tiene que tener por lo menos 3 caracteres");
    }
  } else {
    alert("Ok, te esperamos cuando gustes!");
  }
} while (wishesToRegister && (!registerPassword || !registerUserName));

let loginPassword, loginUsername;

if (isRegistered) {
  let wishesToLogin = confirm("Haz clik en OK para iniciar sesion");

  do {
    if (wishesToLogin) {
      loginUsername = prompt("Ingresa tu usuario");

      if (loginUsername !== null) {
        loginUsername = loginUsername.toLocaleLowerCase();
        loginPassword = prompt("Ingresa tu password");
        if (loginPassword === null) {
          wishesToLogin = false;
        } else if (
          loginUsername === registerUserName &&
          loginPassword === registerPassword
        ) {
          alert("Login exitoso!");
        } else {
          alert("Alguno de los datos ingresados es incorrecto");
          loginPassword = null;
          loginUsername = null;
        }
      } else {
        wishesToLogin = false;
      }
    } else {
      alert("Vuelve cuando gustes");
    }
  } while (wishesToLogin && (!loginUsername || !loginPassword));
}
