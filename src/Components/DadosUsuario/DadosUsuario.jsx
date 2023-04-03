import React, {useState, useContext} from 'react';
import { Button, TextField} from '@mui/material';
import validacaoCadastro from '../../Context/ValidacaoCampo';
import useErros from '../../hooks/useErros';
 
function DadosUsuario({aoEnviar}) {
  const [email,setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const validacoes = useContext(validacaoCadastro)

  const [erros, validarCampo, camposValidos] = useErros(validacoes)


  return(
    <form onSubmit={(event)=>{
      event.preventDefault()
      if(camposValidos()){
      aoEnviar({email,senha})
      } 
    }}>

    <TextField
    value={email}
    onChange={(event)=>{
      setEmail(event.target.value)
    }}
    name='email'
    type='email' 
    id='email' 
    label='Email' 
    margin='normal'
    required
    fullWidth/>

    <TextField
    value={senha}
    onChange={(event)=>{
      setSenha(event.target.value)
    }}

    name='senha'
    error={!erros.senha.valido} 
    helperText={erros.senha.texto}
    onBlur={validarCampo}

    type='password' 
    id='senha' 
    label='Senha' 
    margin='normal'
    required
    fullWidth/>

    <Button  
     variant="contained" 
     color='primary' 
     type='submit'>Cadastrar</Button>
    </form>
  )
}

export default DadosUsuario;