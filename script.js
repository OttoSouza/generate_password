let button = document.getElementById("button");
let password = document.getElementById("password");
let containerPass = document.getElementById("container-pass");
let passwordSize = 16;
let copyPass;

function generator() {
  let pass = "";

  do {
    pass = Math.random().toString(36).substring(1)
  } while (pass.length > passwordSize);

  containerPass.classList.remove("visible");
  password.innerHTML = pass;
  copyPass = pass;
}

function copy() {
    navigator.clipboard.writeText(copyPass);
}

