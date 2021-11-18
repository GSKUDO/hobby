const elementText = document.getElementById("cabecalho");
elementText.innerHTML = "<strong>Meu Hobby. <br/> é. <br/> Beach Tennis.</strong>";

document.getElementById("minhafoto").src = "jogadora.png";

const elementSobremim = document.getElementById("sobremim");
elementSobremim.innerHTML = "<strong>Sobre mim</strong>";

const elementNome = document.getElementById("nome");
elementNome.innerHTML = "Meu nome é Gislene Sayuri Kudo de Camargo Rodrigues";

const elementIdade = document.getElementById("idade");
elementIdade.innerHTML = "Tenho 40 anos";

const elementEstado = document.getElementById("estado");
elementEstado.innerHTML = "Sou de São Paulo/Capital";

const elementPratico = document.getElementById("pratico");
elementPratico.innerHTML = "Jogo Beach Tennis desde 2016";

document.getElementById("fotobt").src = "raquete.jpg";

const elementTitulo = document.getElementById("titulo");
elementTitulo.innerHTML = "<strong>Beach Tennis</strong>";

const elementDescricao = document.getElementById("descricao");
elementDescricao.innerHTML = " O beach tennis foi criado em meados de 1987 na província de Ravennana, na Itália. Em 1996 o esporte começou a se profissionalizar. Atualmente, este esporte tem uma mistura do tênis tradicional, vôlei de praia e badminton e suas regras e práticas vêm se modificando ao longo dos anos."

let text = "Confederação Brasileira de Beach Tennis"
let endereco = text.link ("https://www.cbbtennis.com/");
document.getElementById("links").innerHTML = endereco;

let text2 = "Wikipedia Beach Tennis"
let endereco2 = text2.link ("https://pt.wikipedia.org/wiki/T%C3%AAnis_de_praia");
document.getElementById("links2").innerHTML = endereco2;

document.getElementById("rodape").src = "rodape.jpg";