var carta1 = {
  nome: "Bulbasauro",
      imagem: "https://www.sickchirpse.com/wp-content/uploads/2015/04/Bulbasaur.jpg",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};

var carta2 = {
  nome: "Charmander",
  imagem: "http://1.bp.blogspot.com/-ouG5RsgkY-I/UU7ckptc-OI/AAAAAAAAJhw/Dh0RvibyZwA/s1600/Skull+Bash4.png",
  atributos: {
    ataque: 8,
    defesa: 7,
    magia: 7
  }
};

var carta3 = {
  nome: "pikachu",
  imagem: "https://culturedvultures.com/wp-content/uploads/2019/06/poke-hed.jpg",
  atributos: {
    ataque: 9,
    defesa: 6,
    magia: 8
  }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];
  
  var numeroCartaJogador = parseInt(Math.random() * 3);
  cartaJogador = cartas[numeroCartaJogador];
  
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();

  
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  var divResultado = document.getElementById("resultado")
  exibirCartaMaquina();

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu";
  } else if (valorCartaJogador < valorCartaMaquina) {
    elementoResultado.innerHTML =
      "Você Perdeu a Carta da Maquina é: " + valorCartaMaquina;
  } 
  else {
    elementoResultado.innerHTML = "Empatou";
  }
}

function exibirCartaJogador (){
  var divCartaJogador = document.getElementById("carta-jogador")
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
    var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo];
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}
function exibirCartaMaquina (){
  var divCartaMaquina = document.getElementById("carta-maquina")
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
    var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<p/>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}