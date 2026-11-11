// Busca os elementos pelos IDs definidos no HTML.
const botao = document.querySelector('#botao');
const mensagem = document.querySelector('#mensagem');

// Executa esta função quando o usuário clica no botão.
botao.addEventListener('click', () => {
  mensagem.textContent = 'Tudo certo! O JavaScript está funcionando.';
});
