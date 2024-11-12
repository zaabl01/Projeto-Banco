let user = prompt("Senha:")
let money = 0
if(user != 1234){
 alert("Senha invalida")
} 
do{
    let inicialMoney = prompt("Quantidade inicial de dinheiro disponivel?");
   
    money =+ inicialMoney

    let moneyMenu = prompt(`
     --------------------------------
     - Adicionar Dinheiro
     - Remover Dinheiro
     - Sair
     ---------------------------------
     `);

    switch(moneyMenu){
     case"Adicionar Dinheiro":
     let moneyMaisNumero = Number(prompt("Quanto você quer adicionar?"))
     let soma = money + moneyMaisNumero
     alert(`Seu saldo é:${soma}`)
     break
     case"Remover Dinheiro":
     let moneyMenosNumero = Number(prompt("Quanto você quer diminuir?"))
     let diminuição = money - moneyMenosNumero
     alert(`Seu saldo é:${diminuição}`)
     break
     case"Sair":
     alert("Saindo da conta")
    }
} while(moneyMenu = !"Sair")
