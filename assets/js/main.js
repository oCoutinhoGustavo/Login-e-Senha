let cadastros = {}


const adicionarCadastrosNovamente = () => {
  const cadastrosSalvos = localStorage.getItem('cadastros');
  if (cadastrosSalvos) {
    const cadastroDoJSON = JSON.parse(cadastrosSalvos)
    cadastros = cadastroDoJSON
  }
}
adicionarCadastrosNovamente()

const crieConta = document.querySelector('#crieConta')

crieConta.addEventListener('click', (e) => {
  window.location.href = './CrieConta.html'
})

const form = document.querySelector('#formulario')


form.addEventListener('submit', (e) => {
  e.preventDefault()

  const InputEmail = form.querySelector('#email');
  const InputSenha = form.querySelector('#senha');
  const senha = InputSenha.value
  const email = InputEmail.value

  if (email, senha) {

    if (cadastros[email]) {

      if (senha == cadastros[email].senha) {
        const username = cadastros[email].user
        guardar(email, username, senha);
        window.location.href = './EntrouNaConta.html';
      } else {
        alert('senha errado')
      }

    } else {
      alert('Esse cadastro não existe')
    }
  } else {
    alert('Preencha todos os campos')
  }
})

const guardar = (email, username, senha) => {
  localStorage.removeItem('guardarChave');
  nomes = [email, username, senha]
  const guardarNomesJSON = JSON.stringify(nomes)
  localStorage.setItem('guardarChave', guardarNomesJSON)
}


