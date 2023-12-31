const tenhoConta = document.querySelector('#tenhoConta')
const form = document.querySelector('#form')


tenhoConta.addEventListener('click', (e) => {
    window.location.href = './index.html'
})

let cadastros = {}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputUser = document.querySelector('#usuario')
    const inputEmail = document.querySelector('#email')
    const inputSenha = document.querySelector('#senha')
    const senha = inputSenha.value
    const email = inputEmail.value
    const user = inputUser.value
    if (senha && user && email) {
        if (!cadastros[email]) {
            criaCadastro(user, email, senha)
            window.location.href = './index.html'
        } else {
            alert('Cliente com email ja cadastrado')
        }
        inputUser.value = ''
        inputEmail.value = ''
        inputSenha.value = ''

    } else {
        alert('Preencha todos os campos')
    }
})


const criaCadastro = (user, email, senha) => {
    const novaPessoa = { user: user, email: email, senha: senha }
    cadastros[email] = novaPessoa
    salvarCadastro()
}

const salvarCadastro = () => {
    const cadastrosJSON = JSON.stringify(cadastros);
    localStorage.setItem('cadastros', cadastrosJSON)
}

const adicionarCadastrosNovamente = () => {
    const cadastrosSalvos = localStorage.getItem('cadastros');
    if (cadastrosSalvos) {
        const cadastroDoJSON = JSON.parse(cadastrosSalvos)
        cadastros = cadastroDoJSON
    }
}


adicionarCadastrosNovamente()