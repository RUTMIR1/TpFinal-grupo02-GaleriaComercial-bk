# Usa una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de la aplicación al contenedor
COPY package*.json ./
RUN npm install

COPY . .

# Expone el puerto que utiliza la aplicación
EXPOSE 3001

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]
