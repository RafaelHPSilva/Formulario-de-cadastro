import React, { Component } from 'react'
import './App.css'
import { Container, Typography } from '@mui/material'
import Formulario from './Components/Formulario/Formulario'
import { validarCPF, validarSenha, validarNome } from './models/Validacoes'
import ValidacaoCadastro from './Context/ValidacaoCampo.jsx'

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography component="h1" variant="h3">
          Formulario de Cadastro
        </Typography>
        <ValidacaoCadastro.Provider
        value={{ 
          cpf: validarCPF, 
          senha: validarSenha, 
          nome: validarNome 
        }}>
          <Formulario aoEnviar={aoEnviarForm} />
        </ValidacaoCadastro.Provider>
      </Container>
    )
  }
}
function aoEnviarForm(dados) {
  console.log(dados)
}
export default App
