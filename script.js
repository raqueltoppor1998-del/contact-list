let total = 0

function adicionar() {
  let nome = document.getElementById("nome").value
  let telefone = document.getElementById("telefone").value
  let email = document.getElementById("email").value

  if (nome === "" || telefone === "") {
    alert("Preencha o nome e o telefone!")
    return
  }

  let lista = document.getElementById("lista")
  lista.innerHTML += "<li>" + nome + " - " + telefone + " - " + email + " <button onclick='this.parentElement.remove()'>x</button></li>"

  document.getElementById("nome").value = ""
  document.getElementById("telefone").value = ""
  document.getElementById("email").value = ""

  total++
  document.getElementById("contador").innerHTML = total + " contatos"
}
function limparTudo() {
  lista.innerHTML = ""
  total = 0
  document.getElementById("contador").innerHTML = "0 contatos"
}

