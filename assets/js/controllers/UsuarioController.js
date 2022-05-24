import { Usuario } from "../models/usuario";
import { ListaUsuario } from "../models/ListaUsuario";

export class UsuarioController {

    _inputNome;
    _inputSobrenome;
    _inputEmail;
    _inputSenha;

    constructor() {
    this._inputNome = document.querySelector('#nome');
    this._inputSobrenome = document.querySelector('#sobrenome');
    this._inputEmail = document.querySelector('#email');
    this._inputSenha = document.querySelector('#senha');

    this._listaUsuario = new ListaUsuario();
    }

    adiciona(event) {

        event.preventDefault();

        this._listaUsuario.adiciona(this._criaUsuario());
        console.log(this._listaUsuario.usuarios)
    }

    _criaUsuario() {
        return new Usuario(
            this._inputNome.value,
            this._inputSobrenome.value,
            this._inputEmail.value,
            this._inputSenha.value
        )
    }

    _limpaLogin() {
        this._inputNome.value = "";
        this._inputSobrenome.value = "";
        this._inputEmail.value = "";
        this._inputSenha.value = "";

        this._inputNome.focus();
    }
}