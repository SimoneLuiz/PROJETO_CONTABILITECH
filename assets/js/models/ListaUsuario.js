export class ListaUsuario {

    constructor() {
        this._usuarios = [];
    }

    adiciona(pessoa) {
        this._usuarios.push(usuario);
    }

    get pessoas() {
        return [].concat(this._usuarios)
    }
}