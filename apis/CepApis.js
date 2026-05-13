class CepApis {
    static async buscaEndereco(cep, setEndereco) {
        try {
            // remove caracteres não numéricos do CEP
            // replace substitui caracteres
            const cepLimpo = cep.replace("/\D/g");

            // Verifica se o CEP possui 8 números
            if (cepLimpo.length !== 8) {
                alert('CEP inválido');
                return;
            }

            // Faz requisição para API ViaCEP
            const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);

            // Converte resposta para JSON
            const data = await response.json();

            // Verifica se a API retornou erro
            if (data.erro) {
                alert('CEP não encontrado!');
                return;
            }


            // Atualiza o estado com os dados do endereço
            setEndereco(data);
            
        } catch (error) {
            console.error(error);
            alert('Erro ao buscar CEP!')
        }
    }
}
export default CepApis;