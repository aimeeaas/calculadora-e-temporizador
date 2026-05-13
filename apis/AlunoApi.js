class AlunoApi {
    // Método GET - Busca todos os alunos
    static async getAluno() {

        // fetch faz requisição para API
        const response = await fetch("http://localhost:3000/alunos");

         // Converte resposta para JSON
        const data = await response.json();

         // Retorna os dados
        return data;
    }

    // Método POST
    // Cadastra um novo aluno
    static async postAluno(aluno) {

        // fetch com configurações
        const response = await fetch("http://localhost:3000/alunos", {
            method: "POST",      // Método HTTP
            headers: {
                "Content-Type": "application/json"
            },   // Cabeçalhos da requisição
            body: JSON.stringify(aluno) // Converte objeto JS para JSON
        });

         // Converte resposta em JSON
        const data = await response.json();

        // Retorna os dados
        return data;
    }

    // Método PUT
    // Atualiza um aluno existente
    static async putAluno(cod, aluno) {

        // URL dinâmica usando template string
        const response = await fetch(`http://localhost:3000/alunos/${cod}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },

            // Dados atualizados
            body: JSON.stringify(aluno)
        });

       const data = await response.json();

        return data;
    }

    // Método DELETE
    // Remove aluno pelo ID
    static async deleteAluno(cod) {
        await fetch(`http://localhost:3000/alunos/${cod}`, {
            method: "DELETE"
        });
    }
}

export default AlunoApi;