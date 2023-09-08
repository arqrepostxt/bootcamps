@file:Suppress("SpellCheckingInspection")

class DIO private constructor(){
    companion object {
        private val instance: DIO = DIO() // The single instance of DIO

        fun getInstance(): DIO {
            return instance
        }
    }

    private val formacoes: MutableList<Formacao> = mutableListOf()
    private val usuarios: MutableList<Usuario> = mutableListOf()


    fun adicionarFormacao(vararg formacoes: Formacao) {
        try {
            this.formacoes.addAll(formacoes)
            if (formacoes.size == 1) {
                println("Formação adicionada com sucesso:")
            } else {
                println("As Formaçoes foram cadastradas com sucesso")

            }
        } catch (e: Exception) {
            println("Ocorreu um erro ao adicionar Formacoes: ${e.message}")
        }
    }

    fun adicionarUsuario(usuario: Usuario) {
        usuario.id = usuarios.size + 1
        this.usuarios.add(usuario)
    }

    fun getUsuarios(): List<Usuario> {
        return this.usuarios
    }

    fun getFormacoes(): List<Formacao> {
        return this.formacoes
    }

}
enum class Nivel { BASICO, INTERMEDIARIO, AVANCADO }

class Usuario {
    var id: Int
    var nome: String

    constructor( nome: String) {
        this.id = 0
        this.nome = nome

        fun getId(): Int {
            return this.id
        }
    }
    override fun toString() : String {
        return "Usuario (id=$id, nome='$nome')"
    }
}

data class ConteudoEducacional(
    private var nome: String,
    private var duracao: Int
)

data class Formacao(
    private var nome: String,
    private var conteudos: MutableList<ConteudoEducacional>,
    private var inscritos: MutableList<Usuario>,
    private var nivel: Nivel
) {
    fun getNome(): String {
        return this.nome
    }
    fun getConteudos(): MutableList<ConteudoEducacional> {
        return this.conteudos
    }
    fun getNivel(): Nivel {
        return this.nivel
    }
    fun getAlunosMatriculados(): MutableList<Usuario> {
        return this.inscritos
    }
    fun matricular(vararg usuarios: Usuario) {
//         TODO("Utilize o parâmetro $usuario para simular uma matrícula (usar a lista de $inscritos).")
        usuarios.forEach { usuario ->
            DIO.getInstance().adicionarUsuario(usuario)
            var ultimoRegistrado = DIO.getInstance().getUsuarios().lastOrNull()
            if(ultimoRegistrado != null) {
                inscritos.add(ultimoRegistrado)
                println("Usuário ${usuario.nome} matriculado com sucesso")
            } else {
                println("Falha ao matricular usuario")
            }
        }
        println("")
    }
}

fun main() {
//     TODO("Analise as classes modeladas para este domínio de aplicação e pense em formas de evoluí-las.")
//     TODO("Simule alguns cenários de teste. Para isso, crie alguns objetos usando as classes em questão.")
    val formacao1 = Formacao(
        nome = "Guia Scrum",
        conteudos = mutableListOf(
            ConteudoEducacional("O que é Scrum", 20),
            ConteudoEducacional("Como implementar Scrum", 40)
        ),
        inscritos = mutableListOf(),
        nivel = Nivel.BASICO
    )
//    Adicionar uma formação
    DIO.getInstance().adicionarFormacao(formacao1)
    println(" A lista formacoes apresenta ${DIO.getInstance().getFormacoes().size} elementos ")

    val aluno1 = Usuario( "Samuel Registro 1")

//    Matricular um aluno por vez
    formacao1.matricular(aluno1)

    val aluno2 = Usuario("Samuel Registro 2")
    val aluno3 = Usuario( "Samuel Registro 3")
    val aluno4 = Usuario( "Samuel Registro 4")
    val aluno5 = Usuario( "Samuel Registro 5")

//    Matricular vários alunos
    formacao1.matricular(aluno1, aluno2, aluno3, aluno4, aluno5)
    println(formacao1.getAlunosMatriculados())

    val formacao2 = Formacao(
        nome = "Git do Zero",
        conteudos = mutableListOf(
            ConteudoEducacional("A importancia do Git", 5),
            ConteudoEducacional("Preparativos para usar o Git", 5),
            ConteudoEducacional("Dominando o Git - Parte 1", 5),
            ConteudoEducacional("Dominando o Git - Parte 2", 5),
            ConteudoEducacional("Dominando o Git - Parte 3", 5),
            ConteudoEducacional("Como implementar Scrum", 40)
        ),
        inscritos = mutableListOf(),
        nivel = Nivel.INTERMEDIARIO
    )

    val formacao3 = Formacao(
        nome = "MQL5 do Zero",
        conteudos = mutableListOf(
            ConteudoEducacional("A importancia do MQL5", 3),
            ConteudoEducacional("Dominando MQL5", 50),
        ),
        inscritos = mutableListOf(),
        nivel = Nivel.AVANCADO
    )
    // Adicionar várias formações
    DIO.getInstance().adicionarFormacao(formacao2, formacao3)

    val aluno6 = Usuario( "Samuel Registro 6")
    val aluno7 = Usuario( "Samuel Registro 7")
    formacao2.matricular(aluno6, aluno7)

    val aluno8 = Usuario( "Samuel Registro 8")
    val aluno9 = Usuario( "Samuel Registro 9")
    val aluno10 = Usuario( "Samuel Registro 10 ")
    formacao3.matricular(aluno8, aluno9, aluno10)




    // Chamar formações
    DIO.getInstance().getFormacoes().forEach {
        formacao -> println("Nome ${formacao.getNome()} \n Nivel ${formacao.getNivel()} \n Total de Alunos: ${formacao.getAlunosMatriculados().size} \n ")
        println("Conteudos ${formacao.getConteudos().forEach { conteudo -> println(conteudo) }}")

    }

}
