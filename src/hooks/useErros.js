import React from 'react';


function useErros() {
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });
  
  function validarCampos(event) {
    const {name, value} = event.target;    
    const novoEstado = {...erros}
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }
}
