const elementorespostas = document.querySelector("#respostas")
const botaoPerguntar = document.querySelector('#botaoPerguntar')
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

//clicar em fazer pergunta
function fazerPergunta(){

if(inputPergunta.value == "") {
  alert("Digite sua pergunta")
  return
}

botaoPerguntar.setAttribute("disabled", true)

const pergunta = "<div>" + inputPergunta.value + "</div>"

  //gerar número aleatorio
const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
console.log(respostas[numeroAleatorio])
elementorespostas.innerHTML = pergunta + respostas[numeroAleatorio]

elementorespostas.style.opacity = 1;
setTimeout(function() {
  elementorespostas.style.opacity = 0;
  botaoPerguntar.removeAttribute("disabled")
}, 3000)

}

