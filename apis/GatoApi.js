class GatoApi {
    // Método estático assíncrono
    // static = pode ser chamado sem criar objeto
    // async = permite usar awaiat
    static async buscaGato() {
        try {
            // fetch faz uma requisição para uma API
            // Buscando uma imagem aleatória de gato
            const response = await fetch(`https://api.thecatapi.com/v1/images/search`);

            // Converte a resposta da API para JSON
            const data = await response.json();

            // A API retorna uma array, ,url pega a URL da imagem
            return data[0].url;
        }
        catch(error) {
            console.error(error);
            alert('Erro')
        }
    }
}

export default GatoApi;