 import { UsuarioController } from "./controllers/UsuarioController";

 let usuarioController = new UsuarioController();

 let formulario = document.querySelector('form');

 formulario.addEventListener('submit', (event) => {

    usuarioController.adiciona(event);

    usuarioController._limpaLogin();
 })