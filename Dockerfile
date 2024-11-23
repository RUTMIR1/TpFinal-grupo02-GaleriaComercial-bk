# Usa una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de configuración y dependencias de la aplicación al contenedor
COPY package*.json ./ 
RUN npm install

# Copia el código de la aplicación al contenedor
COPY . .

# Expone el puerto que utiliza la aplicación
EXPOSE 3001

# Comando para ejecutar las migraciones y luego iniciar la aplicación
CMD ["sh", "-c", "npx sequelize-cli db:migrate && npm run dev"]