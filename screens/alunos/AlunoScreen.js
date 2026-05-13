import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

import AlunoApi from "../../apis/AlunoApi";
import TextInputBox from "../../components/textInputBox/TextInputBox";
import CustomButtom from "../../components/customButtom/CustomButtom";

// Função principal da tela
function AlunoScreen() {
    // Estado que guarda TODOS os alunos vindos da API
    const [alunos, setAluno] = useState([]);

    // Estados dos inputs
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [serie, setSerie] = useState("");

    // Guarda o ID do aluno que está sendo editado
    // null = não está editando ninguém
    const [editando, setEditando] = useState(null);

    // FUNÇÃO RESPONSÁVEL POR BUSCAR TODOS OS ALUNOS DA API
    async function carregar() {
        try {

            const data = await AlunoApi.getAluno();     // await espera a API responder
            setAluno(data);      // Atualiza a lista de alunos
        } catch (error) {
            console.error("Erro ao carregar:", error);
        }
    }

    // FUNÇÃO RESPONSÁVEL POR SALVAR
    async function salvar() {
        // Cria objeto aluno com os valores digitados
        const aluno = { nome, telefone, email, dataNascimento, serie };

        try {
            // Se existir alguém sendo editado
            if (editando) {
                await AlunoApi.putAluno(editando, aluno);   // Atualiza aluno existente
                setEditando(null);    // Sai do modo edição
            } else {
                // Se NÃO estiver editando
                // cadastra novo aluno
                await AlunoApi.postAluno(aluno);
            }

            // Limpa os campos após salvar
            setNome("");
            setTelefone("");
            setDataNascimento("");
            setEmail("");
            setSerie("");

            // Recarrega lista da API
            carregar();
        } catch (error) {
            alert("Erro ao salvar os dados.");
        }
    }

    // FUNÇÃO RESPONSÁVEL POR EXCLUIR
    async function excluir(id) {
        try {
            await AlunoApi.deleteAluno(id);
            carregar();     // Chama API DELETE
        } catch (error) {
            console.error("Erro ao excluir:", error);   // Atualiza lista
        }
    }

    // FUNÇÃO RESPONSÁVEL POR COLOCAR DADOS NO FORMULÁRIO
    // quando clicar em editar
    function editar(a) {
        // Preenche inputs com os dados do aluno
        setNome(a.nome);
        setTelefone(a.telefone);
        setEmail(a.email);
        setDataNascimento(a.dataNascimento);
        setSerie(a.serie);

        // Guarda ID do aluno editado
        setEditando(a.id);
    }

    // useEffect executa automaticamente
    // [] = executa apenas UMA vez quando a tela abre
    useEffect(() => {
        carregar();     // Carrega os alunos da API
    }, []);

    // JSX = estrutura visual da tela
    return (
        <ScrollView>
            {/* View = container/div */}
            <View style={{ padding: 20 }}>
                {/* Inputs personalizados */}
                <TextInputBox placeholder="Nome" value={nome} onChangeText={setNome} />

                <TextInputBox placeholder="Telefone" value={telefone} onChangeText={setTelefone} />

                <TextInputBox placeholder="Email" value={email} onChangeText={setEmail} />

                <TextInputBox placeholder="Data Nascimento" value={dataNascimento} onChangeText={setDataNascimento} />

                <TextInputBox placeholder="Serie" value={serie} onChangeText={setSerie} />

                {/* Botão principal */}
                <CustomButtom
                    // Operador ternário
                    // Se estiver editando → Atualizar
                    // Senão → Cadastrar
                    title={editando ? "Atualizar" : "Cadastrar"}
                    onPress={salvar} style={styles.cadastrar}
                />

                {/* map percorre todos os alunos */}
                {alunos.map((a) => {
                    return (
                        // key é obrigatória em listas
                        <View key={a.id} style={styles.card}>
                            {/* Exibe nome */}
                            <Text>{a.nome}</Text>

                            {/* Container dos botões */}
                            <View style={styles.buttonContainer}>
                                <CustomButtom
                                    style={styles.button}
                                    title="Editar"
                                    // Arrow function evita executar automaticamente
                                    onPress={() => editar(a)}
                                />
                                <CustomButtom
                                    style={styles.button}
                                    title="Excluir"
                                    // Passa ID do aluno
                                    onPress={() => excluir(a.id)}
                                />
                            </View>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 70,
        backgroundColor: "#69328d"
    },
    cadastrar: {
        backgroundColor: "#69328d",
    },
    card: {
        marginTop: 10,
        padding: 10,
        borderBottomWidth: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
        justifyContent: 'center',
    }
})

export default AlunoScreen;