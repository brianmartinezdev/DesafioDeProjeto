let nome = "Monkey de Lufy";
let xpHeroi = 13000;
let nivel;

if(xpHeroi< 1000){
    nivel = "Ferro";
 } else if(xpHeroi>= 1000 && xpHeroi < 2000){
    nivel = "Bronze";
 } else if(xpHeroi>= 2000 && xpHeroi < 5000){
    nivel = "Prata";
 } else if(xpHeroi>= 5000 && xpHeroi < 7000){
    nivel = "Ouro";
 } else if(xpHeroi>= 7000 && xpHeroi < 8000){
    nivel = "Diamante";
 } else if(xpHeroi>= 8000 && xpHeroi < 9000 ){
    nivel = "Platina";
 } else if(xpHeroi>= 9000 && xpHeroi < 10000){
    nivel = "Ascendente";
 } else {
    nivel = "Imortal"
 }

 console.log(" O heroi " + nome + " está no nivel " + nivel );

