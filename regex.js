const regex = /^(?=.*[A-Za-z])(?=.*\d.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const password = "Lautaro12."

if (regex.test(password)){
    console.log("La contraseña es válida");
} else {
  console.log("La contraseña no es válida");
}