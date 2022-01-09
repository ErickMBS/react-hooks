import { TextField, Button } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({ senha: { valido: true, texto: "" } });

  const validacoes = useContext(ValidacoesCadastro);

  function validarCampos(event) {
    const {name, value} = event.target;    
    const novoEstado = {...erros}
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function podeAvancar() {
    for (const key in erros) {
      if (erros.hasOwnProperty(key)){
        if (!erros[key].valido) {
          return false
        }
      }
    }

    return true;
  }

  return (
    <form
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({email, senha});
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        name="email"
        id="email"
        label="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        name="senha"
        id="senha"
        label="senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" disabled={!podeAvancar()}>
        Proximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
