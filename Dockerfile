# Define a imagem base
FROM node:18-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /home/app

# Copia os arquivos do diretório do projeto para o diretório de trabalho no contêiner
COPY package*.json ./

# Executa o comando npm install para instalar as dependências do projeto
RUN npm install

# Expõe a porta em que a aplicação está sendo executada
EXPOSE 3000
