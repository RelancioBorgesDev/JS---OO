import User from './User.js'

class Admin extends User {
    constructor(nome, email, nascimento, role = 'estudante', ativo = true){
        super(nome, email, nascimento, role = 'estudante', ativo = true);
    }

    criarCurso(nomeDoCurso, email){
        return `Curso de {nomeDoCurso}, criado com ${vagas} vagas!`
    }
}