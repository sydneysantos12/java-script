// laço while

let qtd = 5;
let cont = 0;
let txt = "";

while(cont < qtd){
    // alert(cont);
    txt = txt + "<br> Voltar"+cont;
    cont = cont= 1;
}
document.getElementById("while").innerHTML = txt;

// laço for
txtfor = "";

for(let i = 0;i < 10; i++){
    txtfor += "Volta:   "+i+ "<br>"
}
document.getElementById("for").innerHTML = txtfor;