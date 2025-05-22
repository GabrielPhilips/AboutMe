  const nomeUsuario = prompt("Qual é o seu nome?");
  const divBoasVindas = document.getElementById('boas-vindas');

  if (nomeUsuario) {
    divBoasVindas.innerText = "Seja bem-vindo, " + nomeUsuario + "!";
  } else {
    divBoasVindas.innerText = "Seja bem-vindo ao meu site!";
  }

  const form = document.querySelector('form');
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const mensagem = document.getElementById('mensagem');

  const erroNome = document.getElementById('erro-nome');
  const erroEmail = document.getElementById('erro-email');
  const erroMensagem = document.getElementById('erro-mensagem');


  function emailValido(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }


  nome.addEventListener('input', () => {
    erroNome.textContent = nome.value.trim() === '' ? 'Nome é obrigatório.' : '';
  });

  email.addEventListener('input', () => {
    if (email.value.trim() === '') {
      erroEmail.textContent = 'E-mail é obrigatório.';
    } else if (!emailValido(email.value)) {
      erroEmail.textContent = 'E-mail inválido.';
    } else {
      erroEmail.textContent = '';
    }
  });

  mensagem.addEventListener('input', () => {
    erroMensagem.textContent = mensagem.value.trim() === '' ? 'Mensagem é obrigatória.' : '';
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    let valido = true;

    if (nome.value.trim() === '') {
      erroNome.textContent = 'Nome é obrigatório.';
      valido = false;
    }

    if (email.value.trim() === '') {
      erroEmail.textContent = 'E-mail é obrigatório.';
      valido = false;
    } else if (!emailValido(email.value)) {
      erroEmail.textContent = 'E-mail inválido.';
      valido = false;
    }

    if (mensagem.value.trim() === '') {
      erroMensagem.textContent = 'Mensagem é obrigatória.';
      valido = false;
    }

    if (valido) {
      alert(`Formulário enviado!\n\nNome: ${nome.value}\nE-mail: ${email.value}\nMensagem: ${mensagem.value}`);
      form.reset();
      erroNome.textContent = '';
      erroEmail.textContent = '';
      erroMensagem.textContent = '';
    }
  });

  const btnTema = document.getElementById('toggle-tema');
  const body = document.body;


  btnTema.addEventListener('click', () => {
    body.classList.toggle('escuro');
    body.classList.toggle('claro');
  });