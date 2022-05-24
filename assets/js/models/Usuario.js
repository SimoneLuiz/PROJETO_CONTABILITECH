export class Usuario {

    _nome;
    _sobrenome;
    _email;
    _senha;

    constructor(nome, sobrenome, email, senha) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._senha = senha;
    }

}