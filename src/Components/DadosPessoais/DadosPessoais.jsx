import React, {useContext, useState} from 'react';
import { Button, TextField, FormControlLabel, Switch } from '@mui/material';
import validacaoCadastro from '../../Context/ValidacaoCampo';
import useErros from '../../hooks/useErros';

function DadosPessoais({aoEnviar}) {
  const [nome,setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [cpf, setCpf] = useState('')

  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(false)

  const validacoes = useContext(validacaoCadastro)

  const [erros, validarCampo, camposValidos ] = useErros(validacoes)


  return(
    <form 
    onSubmit={(event)=>{
      event.preventDefault()
      if (camposValidos()) {
        aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
      }
    }}>

     <TextField 
     value = {nome}
     onChange={(event)=>{
       let tempNome = event.target.value
       if (tempNome.length<=12) {
        tempNome = tempNome.substring(0,9)
       }
       setNome(tempNome)
     }}

     type='text' 
     id='nome' 
     label='Nome' 
     margin='normal' 
     required
     fullWidth/>

     <TextField 
     value = {sobrenome}
     onChange={(event)=>{
       let tempSobrenome = event.target.value
       if (tempSobrenome.length<=12) {
       tempSobrenome = tempSobrenome.substring(0,9)
       }
       setSobrenome(tempSobrenome)
     }}

     type='text' 
     id='sobrenome' 
     label='Sobrenome' 
     margin='normal' 
     fullWidth/>

     <TextField 
     value = {cpf}  
     onChange={(event)=>{
       setCpf(event.target.value)
     }}

     error = {!erros.cpf.valido}
     helperText = {erros.cpf.texto}
     name= 'cpf'
     onBlur={validarCampo}

     type='number' 
     id='cpf' 
     label='CPF' 
     margin='normal'
     required 
     fullWidth/>

     <FormControlLabel 
     control={
       <Switch 
       checked={promocoes}
       onChange={(event)=>{
         setPromocoes(event.target.checked)
       }} 
       name="promocoes" />
     }
     label='Promocoes'
     />

     <FormControlLabel 
     control={
       <Switch 
       checked={novidades}
       onChange={(event)=>{
         setNovidades(event.target.checked)
       }}
       name="novidades" />
     }
     label='Novidades'
     />

     <Button  
     variant="contained" 
     color='primary' 
     type='submit'
     >Cadastrar</Button>
    </form>
   )
}
export default DadosPessoais;

