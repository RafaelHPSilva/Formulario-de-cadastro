import React, { useEffect, useState } from 'react';
import{ Step, StepLabel, Stepper, Typography } from '@mui/material'
import DadosUsuario from '../DadosUsuario/DadosUsuario';
import DadosPessoais from '../DadosPessoais/DadosPessoais';
import DadosEntrega from '../DadosEntrega/DadosEntrega';

 function Formulario({aoEnviar}) {
  let [estadoAtual, setEstadoAtual] = useState(0)
  let [dadosColetados, setDadosColetados] = useState({})
  
  useEffect(()=>{
    if (estadoAtual === formularios.length-1) {
     aoEnviar(dadosColetados)
    }
  })

  const formularios =[
    <DadosUsuario aoEnviar={ColetaDados} />,
    <DadosPessoais aoEnviar={ColetaDados} />,
    <DadosEntrega aoEnviar={ColetaDados} />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
  ]

  function ColetaDados(dados) {
    setDadosColetados({...dadosColetados, ...dados})
    proximaEtapa()
  }

  function proximaEtapa() {
    setEstadoAtual(estadoAtual+1)
  }

  return (
    <>
      <Stepper activeStep={estadoAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoais</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Conclusão</StepLabel></Step>
      </Stepper>
      {formularios[estadoAtual]}
    </>
  )
}
export default Formulario