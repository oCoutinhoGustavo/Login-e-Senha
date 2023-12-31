const div = document.querySelector('#cadastro');
const btn = document.querySelector('#excluirCliente');

const adicionarNomes = () => {
    const nomesGuardadosJSON = localStorage.getItem('guardarChave');
    if (nomesGuardadosJSON) {
        const nomesGuardados = JSON.parse(nomesGuardadosJSON)
        nomes = nomesGuardados
    }
}
adicionarNomes()
const adicionarCadastrosNovamente = () => {
    const cadastrosSalvos = localStorage.getItem('cadastros');
    if (cadastrosSalvos) {
        const cadastroDoJSON = JSON.parse(cadastrosSalvos)
        cadastros = cadastroDoJSON
    }
}
const salvarCadastro = () => {
    const cadastrosJSON = JSON.stringify(cadastros);
    localStorage.setItem('cadastros', cadastrosJSON)
}


adicionarCadastrosNovamente()


div.innerHTML = `<b>Email:</b> ${nomes[0]}<br><b>Usuário:</b>${nomes[1]}<br><b>Senha:</b> *******`

btn.addEventListener('click', (e) => {
    const email = nomes[0]
    delete cadastros[email]
    localStorage.removeItem('guardarChave');
    salvarCadastro()
    window.location.href = './index.html'
})



