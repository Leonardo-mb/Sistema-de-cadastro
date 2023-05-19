function setText(valor) {
    for (let i = 0; i <= valor; i++) {
      let p = document.createElement('p');
      p.innerText = "Valor: " + i;
      document.body.appendChild(p);
    }    
};

setText(10);