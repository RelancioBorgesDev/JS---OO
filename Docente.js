import User from "./User";

class Docente extends User{
    constructor(nome, email, nascimento, role = 'estudante', ativo = true){
        super(nome, email, nascimento, role = 'estudante', ativo = true);
    }

    criarAula(materia, conteudo){
        return `Matéria: ${materia}, conteudo ${conteudo}`; 
    }
}


export default Docente