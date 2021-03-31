document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "573225700808";

  let cliente = document.querySelector("#cliente").value;
  let cuenta = document.querySelector("#cuenta").value;
  let nombre = document.querySelector("#nombre").value;
  let documento = document.querySelector("#documento").value;
  let pesos = document.querySelector("#pesos").value;
  let bolivares = document.querySelector("#bolivares").value;
  let bancos = document.querySelector("#bancos").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=573225700808&text=
		*_${cliente}_*%0A${cuenta}%0A${nombre}%0A${documento}%0A$${pesos}%0A*Bss ${bolivares}*%0A${bancos}%0A*PagoMovil*`;

  if (cliente === "" || cuenta === "" || documento === "" || pesos === "" ) {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Datos enviado correctamente, ${cliente}`;

  window.open(url);
});
