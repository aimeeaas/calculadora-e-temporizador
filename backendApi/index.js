//npm init -y

//npm install express

//npm install cors

//node index.js

const express = require('express');

const app = express();

const cors = require('cors');
 
 
app.use(express.json());

app.use(cors());
 
// "Banco" em memória

let alunos = [];

let idCounter = 1;
 
// CREATE - Criar aluno

app.post('/alunos', (req, res) => {

    const { nome, telefone, email, dataNascimento, serie } = req.body;
 
    if (!nome || !email) {

        return res.status(400).json({ erro: 'Nome e email são obrigatórios' });

    }
 
    const novoAluno = {

        id: idCounter++,

        nome,

        telefone,

        email,

        dataNascimento,

        serie

    };
 
    alunos.push(novoAluno);

    res.status(201).json(novoAluno);

});
 
// READ - Listar todos

app.get('/alunos', (req, res) => {

    res.json(alunos);

});
 
// READ - Buscar por ID

app.get('/alunos/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const aluno = alunos.find(a => a.id === id);
 
    if (!aluno) {

        return res.status(404).json({ erro: 'Aluno não encontrado' });

    }
 
    res.json(aluno);

});
 
// UPDATE - Atualizar aluno

app.put('/alunos/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const aluno = alunos.find(a => a.id === id);
 
    if (!aluno) {

        return res.status(404).json({ erro: 'Aluno não encontrado' });

    }
 
    const { nome, telefone, email, dataNascimento, serie } = req.body;
 
    aluno.nome = nome ?? aluno.nome;

    aluno.telefone = telefone ?? aluno.telefone;

    aluno.email = email ?? aluno.email;

    aluno.dataNascimento = dataNascimento ?? aluno.dataNascimento;

    aluno.serie = serie ?? aluno.serie;
 
    res.json(aluno);

});
 
// DELETE - Remover aluno

app.delete('/alunos/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const index = alunos.findIndex(a => a.id === id);
 
    if (index === -1) {

        return res.status(404).json({ erro: 'Aluno não encontrado' });

    }
 
    alunos.splice(index, 1);

    res.status(204).send();

});
 
// Subir servidor

const PORT = 3000;

app.listen(PORT, () => {

    console.log(`Servidor rodando em http://localhost:${PORT}`);

});
 