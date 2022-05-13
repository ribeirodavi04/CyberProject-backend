function login() {
  event.preventDefault();
  let url = "http://localhost:3000/login/funcionario";

  let nomeUsuario = document.getElementsByName("nomeUsuario")[0].value;
  let senha = document.getElementsByName("senha")[0].value;

  console.log(nomeUsuario, senha);

  body = {
    nomeUsuario: nomeUsuario,
    senha: senha,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "Falha na autenticação!") {
        console.log(data.message);
      } else {
        window.location.href = "TelaDeRelatorios.html";
      }
    })
    .catch((err) => console.log(err));

  document.getElementsByName("nomeUsuario")[0].value = "";
  document.getElementsByName("senha")[0].value = "";
}
