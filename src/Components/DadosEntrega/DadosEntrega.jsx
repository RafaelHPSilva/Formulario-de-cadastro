import React, {useState} from 'react';
import { Button, TextField, } from '@mui/material';
 
function DadosEntrega({aoEnviar}) {

  const [endereco,setEndereco] = useState('')
  const [numero, setNumero] = useState('')
  const [cep, setCep] = useState('') 
  const [cidade,setCidade] = useState('')
  const [estado, setEstado] = useState('')
  

  return(
    <form onSubmit={(event)=>{
      event.preventDefault()
      aoEnviar({endereco, numero, cep, cidade, estado})
    }}>

     <TextField 
     value={endereco}
     onChange={(event)=>{
      setEndereco(event.target.value)
     }}
     type='text' 
     id='endereco' 
     label='Endereco' 
     margin='normal' 
     required
     fullWidth/>

     <TextField 
     value={numero}
     onChange={(event)=>{
      setNumero(event.target.value)
     }}
     type='number' 
     id='numero' 
     label='numero' 
     margin='normal' 
     required
     />

     <TextField
     value={cep}
     onChange={(event)=>{
      setCep(event.target.value)
     }} 
     type='number' 
     id='cep' 
     label='CEP' 
     margin='normal'
     required 
     />

     <TextField
     value={cidade}
     onChange={(event)=>{
      setCidade(event.target.value)
     }} 
     type='text' 
     id='cidade' 
     label='Cidade' 
     margin='normal'
     required 
     />

     <TextField
     value={estado}
     onChange={(event)=>{
      setEstado(event.target.value)
     }} 
     type='text' 
     id='estado' 
     label='Estado' 
     margin='normal' 
     required
     />

     <Button  
     variant="contained" 
     color='primary'
     type='submit'
     fullWidth 
     >Cadastrar</Button>
    </form>
  )
}

export default DadosEntrega;