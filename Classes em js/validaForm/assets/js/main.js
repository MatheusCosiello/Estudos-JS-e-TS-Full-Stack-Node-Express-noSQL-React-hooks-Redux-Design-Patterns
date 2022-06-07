class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }
  // metodos que captura eventos
  eventos() {
    this.formulario.addEventListener('submit',e =>{
      this.handleSubmit(e);
    });
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('formulario  não enviado');
  }
}

const valida = new ValidaFormulario();