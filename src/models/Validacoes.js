function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: 'Verifique se há 11 digitos' }
  } else {
    return { valido: true, texto: '' }
  }
}

function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 12) {
    return { valido: false, texto: 'A senha deve ter entre 3 há 8 digitos' }
    
  } else {
    return  { valido: true, texto: '' } 
  }
}

function validarNome(nome) {
  if (nome.length < 3 || nome.length > 12) {
    return{ valido: false, texto: 'O nome deve ter entre 4 há 12 digitos' }
    
  } else {
    return  { valido: true, texto: '' } 
  }
}

export { validarCPF, validarSenha, validarNome }
