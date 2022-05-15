class User{
    //Propriedades privadas
    #nome
    //Chamada do constructor
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'estudante';
        this.ativo = ativo;
    }
    //Metodo exibirInfos
    exibirInfos(){
        return `${this.#nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`; 
    }

}
//Instanciação da classe User, gerando um novo usuário
const novoUser = new User('Kendrick', 'kendrick@lamar.com', '2050', 'GOAT', true);
//Exibindo no console
console.log(novoUser.exibirInfos());

export default User;