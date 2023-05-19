console.log("Rondando sistema de gerenciamento de jogos.");
function setText(valor) {
    for (let i = 0; i <= valor; i++) {
      let p = document.createElement('p');
      p.innerText = "Valor: " + i;
      document.body.appendChild(p);
    }    
};

setText(10);

console.log("Teste para rollback de commit");