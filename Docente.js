class Docente extends User{
    constructor(nome, email, nascimento, role = 'estudante', ativo = true){
        super(nome, email, nascimento, role = 'estudante', ativo = true);
    }
}