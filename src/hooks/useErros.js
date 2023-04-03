import  { useState } from 'react'

function useErros(validacoes) {
  const estadoInicial = CriarEstadoInicial(validacoes)
  const [erros, setErros] = useState(estadoInicial)

  function validarCampo(event) {
    const { name, value } = event.target
    const novoEstado = { ...erros }
    novoEstado[name] = validacoes[name](value)
    setErros(novoEstado)
  }

  function camposValidos() {
    for (let campos in erros)
      if (!erros[campos].valido) {
        return false
      } else {
        return true
      }
  }
  return [erros, validarCampo, camposValidos, estadoInicial]
}
function CriarEstadoInicial(validacoes) {
  const estadoInicial = {}
  for (let campos in validacoes)
    estadoInicial[campos] = { valido: true, texto: '' }

  return estadoInicial
}
export default useErros
