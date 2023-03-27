// Botão Adicionar - Recuperar o valor contido no campo de texto.
const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {

    e.preventDefault();

    const name = document.querySelector("#name");

    const value = name.value;

    console.log(value);
});

// Botão Adicionar - Exibir Alerta

function AbrirAlerta(){
    alert("Informe um valor válido")
}

// Botão Adicionar - Verificar se o valor informado já existe dentro do Array.

let objeto = ["Cadeira", "Impressora", "Garfo"];

console.log(objeto.includes("Cadeira"));

if(objeto.includes("Cadeira")) {
    console.log("Objeto já foi adicionado")
};

if(objeto.includes("Impressora")){
    console.log("Objeto já foi adicionado")
};

if(objeto.includes("Garfo")){
    console.log("Objeto já foi adicionado")
};

// Botão Ordenar - Ordenar de Forma Alfabética os valores.

var objetos = [
    {
        nome: "Cadeira",
    },
    {
        nome: "Impressora"
    },
    {
        nome: "Garfo"
    },
];

objetos.sort(function(a, z) {
    if(a.nome < z.nome) {
        return -1;
    } else {
        return true;
    }
});

console.log(objetos);