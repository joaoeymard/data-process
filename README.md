## Data Processor

**Descrição:**
DataProcessor é um projeto Node.js projetado para buscar, processar e relatar dados de várias fontes. Este projeto integra-se com o SQL Server para recuperar dados, processa cada item usando requisições de API externas e gera relatórios abrangentes em formato JSON.

**Características:**

- **Integração com Banco de Dados**: Busca dados do SQL Server.
- **Requisições de API Externas**: Processa cada item de dados com chamadas de API externas usando Axios.
- **Tratamento de Erros**: Registra mensagens de sucesso e erro para cada item processado.
- **Geração de Relatórios**: Gera um relatório detalhado em JSON de todos os itens processados, incluindo o status do processamento e mensagens de log.

**Uso:**

1. Clone o repositório:

```bash
git clone https://github.com/joaoeymard/data-processor.git
```

2. Navegue até o diretório do projeto:

```bash
cd DataProcessor
```

3. Configure sua conexão com o SQL Server no `.env`.
4. Execute o script principal:

```bash
docker-compose up --build
```

**Dependências:**

- Node.js
- Knex.js
- Axios
- SQL Server
- Docker

**Configuração:**

- Certifique-se de ter o Node.js instalado.
- Instale os pacotes necessários usando `npm install`.
- Configure `.env` com suas credenciais do SQL Server.

**Exemplo de Configuração:**

```js
// .env
BASEURL=

HOST=
PORT=
USER=
PASSWORD=
DATABASE=
```

**Contribuição:**
Sinta-se à vontade para enviar issues ou pull requests. Agradecemos contribuições para melhorar a funcionalidade e o desempenho deste projeto.

**Licença:**
Este projeto está licenciado sob a Licença MIT.
