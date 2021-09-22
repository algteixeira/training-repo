const customExpress = require("./config/customExpress");
const connectDb = require("./infraestrutura/connectDb");
connectDb.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        const app = customExpress();
        app.listen(3000, () => console.log('servidor rodando na porta 3000'));
    }
})





/*
// CAMEL CASE PADRÃO = primeira letra em primeiro nome composto pra variável é minúsculo, nas demais palavras é maiúsculo
console.log("meu primeiro programa");
const idade = 26;
console.log(parseInt("2") + idade + " sommy");
let nome = "André"; 
let sobrenome = "Teixeira";
console.log(nome + " " + sobrenome);
// OU
console.log(nome, sobrenome);
//OU (melhor versão)
console.log(`Meu nome é ${nome} ${sobrenome}`)


// se nome for constante   nome=nome+sobrenome não funciona, então tem que ser let
nome=nome + " " + sobrenome;
console.log(`Agora meu nome é ${nome}!!!`);
// ou melhor do que isso
const nomeCompleto = nome + " " + sobrenome;
console.log(`Nome completo: ${nomeCompleto}!!!!!`); */



// LISTAS
//const cidades = ['Salvador', 'São Paulo', 'Rio de Janeiro']; OU
/*const cidades = new Array (
    'Salvador', 'São Paulo', 'Rio de Janeiro'
);
cidades.push('Melpi Rúh');
cidades.push('Fernão de Noronha');
console.log(`${cidades}`);
cidades.splice(1,1);
console.log(`${cidades[1].replace('Janeiro','Pentão de Trinta do LaFlamme')}`);      */




/*const idadeComprador = 21;
const temPassagemComprada=false;
console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
} else {
    console.log("Você não pode embarcar");
} */




// REPLACE

/*const cpf = '12345679810';

const cpfFormatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");

console.log(cpfFormatado); // O retorno seria 256.846.770-37 */




// DATAS
/*
const horas = new Date('2014/12/25');
console.log( horas );

const hoje = new Date();
console.log(hoje.getHours() );     */



























