import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosEntrega() {
  return (
    <form action="">
      <TextField
        name="cep"
        id="cep"
        label="cep"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        name="endereco"
        id="endereco"
        label="endereco"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        name="numero"
        id="numero"
        label="numero"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <TextField
        name="estado"
        id="estado"
        label="estado"
        type="text"
        limit="2"
        variant="outlined"
        margin="normal"
      />

      <TextField
        name="cidade"
        id="cidade"
        label="cidade"
        type="text"
        variant="outlined"
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
