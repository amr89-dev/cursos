# Apuntes del curso de docker

![Docker](https://d1.awsstatic.com/acs/characters/Logos/Docker-Logo_Horizontel_279x131.b8a5c41e56b77706656d61080f6a0217a3ba356d.png)

Docker viene a solucionar el problema de la portabilidad de las aplicaciones, ya que permite crear un contenedor con todo lo necesario para que la aplicación funcione, y este contenedor se puede ejecutar en cualquier sistema operativo.

## Comandos básicos

### Listar imágenes

```bash
docker images
```

### Listar contenedores

```bash
docker ps -a
```

> El flag **-a** es para listar todos los contenedores, si no se pone solo se listan los que están en ejecución.

### Crear contenedor

```bash
docker run -it --name <nombre> <imagen>

Ejemplo: docker run -it --name ubuntu ubuntu
```

> El flag **-it** es para que el contenedor se ejecute en modo interactivo, es decir, que se pueda interactuar con el. El flag **--name** es para asignarle un nombre al contenedor, si no se le asigna un nombre, docker le asigna un nombre aleatorio.

### Renombrar un contendores

```bash
docker rename <nombre_actual> <nuevo_nombre>

Ejemplo: docker rename ubuntu ubuntu2
```

### Eliminar un contenedor

```bash
docker rm -f <nombre>

Ejemplo: docker rm -f ubuntu
```

> El flag **-f** es para forzar la eliminación del contenedor, si no se pone, el contenedor debe estar detenido para poder eliminarlo.

Para borra todos los contenedores que no están en ejecución se puede ejecutar el siguiente comando:

```bash
docker rm -f $(docker ps -aq)
```

Tambien podemos usar el siguiente comando para borrar todos los contenedores que no están en ejecución:

```bash
docker container prune
```

### Eliminar una imagen

```bash
docker rmi <nombre>

Ejemplo: docker rmi ubuntu
```

> Si la imagen está en uso, no se puede eliminar.

Para borrar todas las imagenes que no están en uso se puede ejecutar el siguiente comando:

```bash
docker rmi $(docker images -q)
```

Tambien podemos usar el siguiente comando para borrar todas las imagenes que no están en uso:

```bash
docker image prune
```

### Eliminar todos los archivos de docker

```bash
docker system prune
```

## Corriendo un contenedor

Para que un contenenedor se pueda ejecutar, debe tener un proceso en ejecución, si no tiene un proceso en ejecución, el contenedor se detiene. Por tal razon podemos ejecutar el siguiente comando para que el contenedor se mantenga en ejecución:

```bash
docker --name <nombre> -d <imagen> tail -f //dev/null

Ejemplo: docker --name ubuntu -d ubuntu tail -f //dev/null
```

> La bandera **-d** es para que el contenedor se ejecute en modo background, es decir no vincula el stdin y el stdout pues esta detached. El comando **tail -f /dev/null** es para que el contenedor se mantenga en ejecución. En Windows se debe usar doble slash //.

### Ejecutar un comando en un contenedor

```bash
docker exec -it <nombre> <comando>

Ejemplo: docker exec -it ubuntu bash
```

> El comando **bash** es para ejecutar el shell de linux en el contenedor. El **exec** se usa para ejecutar un comando en un contenedor que ya está en ejecución.

### Detener un contenedor

```bash
docker stop <nombre>

Ejemplo: docker stop ubuntu
```

## Ver logs de un contenedor

```bash
docker logs <nombre>

Ejemplo: docker logs ubuntu
```

Tambien podemos usar los flags **-f** y **--tail** para ver los logs de un contenedor:

```bash
docker logs -f --tail <numero_de_lineas> <nombre>

Ejemplo: docker logs -f --tail 10 ubuntu
```

## Exponiendo puertos

Para exponer un puerto de un contenedor, se debe usar el flag **-p** al momento de crear el contenedor, de la siguiente manera:

```bash
docker run -d --name <nombre> -p <puerto_host>:<puerto_contenedor> <imagen>

Ejemplo: docker run -d --name proxy -p 8080:80 nginx
```

> El flag **-p** es para exponer un puerto del contenedor, el primer puerto es el puerto del host y el segundo es el puerto del contenedor.

## Accediendo a datos en contenedores Bind Mounts

Primero ejecutamos el contenedor con el siguiente comando:

```bash
docker run -d --name db -v <ruta_host>:<ruta_contenedor> mongo

Ejemplo: docker run -d --name dbMongo -v "C:\Users\sorrus\DEV\cursos\docker\docker-data-mongo":/data/db mongo
```

> Es importante destacar que si estas desde windows, la ruta del host debe estar entre comillas dobles, y con backslash \ en vez de slash.

Luego ejecutamos el siguiente comando para acceder al contenedor:

```bash
docker exec -it db bash
```

Luego ejecutamos el siguiente comando para acceder a la base de datos:

```bash
mongosh
```

Luego ejecutamos el siguiente comando para crear una base de datos:

```bash
use <nombre_de_la_base_de_datos>

Ejemplo: use base_de_datos_usuarios
```

Luego ejecutamos el siguiente comando para crear una colección:

```bash
db.users.insert({name: "Juan", age: 25})
```

Luego ejecutamos el siguiente comando para ver los datos de la colección:

```bash
db.users.find()
```

Luego ejecutamos el siguiente comando para salir de la base de datos:

```bash
exit
```

Luego ejecutamos el siguiente comando para salir del contenedor:

```bash
exit
```

Luego ejecutamos el siguiente comando para ver los datos del contenedor:

```bash
docker inspect db
```

Luego ejecutamos el siguiente comando para ver los datos del contenedor en formato json:

```bash
docker inspect db -f '{{json .Mounts}}'
```

## Volumenes

Con los volumenes docker reserva un espacio en el disco duro del host para guardar los datos de los contenedores.

Son una forma de persistir datos en docker, y se pueden usar de dos formas: **named volumes** y **anonymous volumes**.

- Los **named volumes** son los que se crean con el comando **docker volume create**, y los **anonymous volumes** son los que se crean con el flag **-v** al momento de crear el contenedor.
- Los **named volumes** se pueden usar en multiples contenedores, pero los **anonymous volumes** solo se pueden usar en un contenedor.
- Los **named volumes** se pueden usar en multiples contenedores, pero los **anonymous volumes** solo se pueden usar en un contenedor.

### Listar volumenes

```bash
docker volume ls
```

### Crear volumen

```bash
docker volume create <nombre>

Ejemplo: docker volume create dbdata
```

### Crear contenedor y montar volumen

```bash
docker run -d --name <nombre> --mount src=<nombre_del_volumen>,dst=<ruta_contenedor> <imagen>

Ejemplo: docker run -d --name db2 --mount src=dbdata,dst=//data/db mongo
```

> El flag **--mount** es para montar un volumen en un contenedor, el flag **src** es para indicar el nombre del volumen, y el flag **dst** es para indicar la ruta del contenedor donde se va a montar el volumen.
> Si el volumen no existe, docker lo crea. Si tiene problema con la ruta hay que usar doble slash //.

### Inspeccionar volumen

```bash
docker volume inspect <nombre>

Ejemplo: docker volume inspect dbdata
```

## Insertar y extraer archivos de un contenedor

Para insertar un archivo en un contenedor se usa el siguiente comando:

```bash
docker cp <ruta_archivo> <nombre_contenedor>:<ruta_contenedor>

Ejemplo: docker cp prueba.txt copyFiles:/archivosCopiados/archivoCopiado.txt
```

> Si la ruta del contenedor no existe, docker la crea. En este caso la ruta del contenedor es /archivosCopiados y el archivo se llama archivoCopiado.txt. Y el contenedor se llama copyFiles. Y el archivo prueba.txt se encuentra en la ruta actual

Para extraer un archivo de un contenedor se usa el siguiente comando:

```bash
docker cp <nombre_contenedor>:<ruta_contenedor> <ruta_archivo>

Ejemplo: docker cp copyFiles:/archivosCopiados/archivoCopiado.txt prueba2.txt
```

Un dato importante es que si el archivo que se va a copiar tiene el mismo nombre que el archivo que se va a reemplazar, se debe usar el flag **-f** para forzar la copia del archivo. Ejemplo:

```bash
docker cp -f prueba.txt copyFiles:/archivosCopiados/archivoCopiado.txt
```

Tambien podemos corre el siguiente comando para copiar un archivo de un contenedor a otro:

```bash
docker cp <nombre_contenedor1>:<ruta_contenedor1> <nombre_contenedor2>:<ruta_contenedor2>

Ejemplo: docker cp copyFiles:/archivosCopiados/archivoCopiado.txt copyFiles2:/archivosCopiados/archivoCopiado2.txt
```

Y los contenedores no deben estar en ejecución.

## Imagenes

Son plantillas para crear contenedores, y se pueden crear de dos formas: **commit** y **dockerfile**.

Otra forma de listar imagenes es con el siguiente comando:

```bash
docker image ls
```

Para descargar una imagen se usa el siguiente comando:

```bash
docker pull <nombre_imagen>

Ejemplo: docker pull ubuntu
```

Por defecto docker descarga la última versión de la imagen, pero si se quiere descargar una versión especifica se puede usar el siguiente comando:

```bash
docker pull <nombre_imagen>:<version>

Ejemplo: docker pull ubuntu:18.04
```

Tambien podemos cambiar el repositorio de las imagenes, por defecto docker usa docker hub, pero podemos cambiarlo a otro repositorio, por ejemplo a azure, para eso debemos ejecutar el siguiente comando:

```bash
docker pull mcr.microsoft.com/azuredocs/aci-helloworld
```

### Dockerfile

Es un archivo de texto que contiene los comandos para crear una imagen, y se debe llamar **Dockerfile**.

Para crear una imagen lo primero que debemos hacer es crear el archivo **Dockerfile** con el siguiente contenido:

```dockerfile
FROM <nombre_imagen>

RUN <comando>

CMD <comando>

Ejemplo:

FROM ubuntu:latest

RUN touch /usr/src/hola.txt

CMD echo "Hola mundo"
```

> el comando **FROM** es para indicar la imagen base, el comando **RUN** es para ejecutar un comando en la imagen, y el comando **CMD** es para ejecutar un comando cuando se cree un contenedor con la imagen. No es necesario usar el comando CMD, pero si es necesario usar el comando RUN. El comando RUN solo se ejecuta cuando se crea la imagen, y el comando CMD se ejecuta cuando se crea un contenedor con la imagen.

Luego ejecutamos el siguiente comando para crear la imagen:

```bash
docker build -t <nombre_imagen> <ruta_dockerfile>

Ejemplo: docker build -t ubuntu:curso .
```

> El flag **-t** es para indicar el nombre de la imagen, y el punto . es para indicar que el archivo Dockerfile está en la ruta actual.

Luego corre el siguiente comando para crear un contenedor con la imagen:

```bash
docker run -it --name <nombre_contenedor> <nombre_imagen>

Ejemplo: docker run -it --name ubuntu2 ubuntu:curso
```

### Publicar imagen en docker hub

Debemos iniciar sesión en docker hub con el siguiente comando:

```bash
docker login
```

Luego debemos crear un tag de la imagen con el siguiente comando:

```bash
docker tag <nombre_imagen> <nombre_usuario_docker_hub>/<nombre_imagen>

Ejemplo: docker tag ubuntu:curso amr89dev/ubuntu:curso
```

> El tag es para indicar el nombre de la imagen en docker hub.

Luego debemos subir la imagen a docker hub con el siguiente comando:

```bash
docker push <nombre_usuario_docker_hub>/<nombre_imagen>

Ejemplo: docker push amr89dev/ubuntu:curso
```

### Sistema de capas

Cuando se crea una imagen, docker crea una capa por cada comando que se ejecute en el Dockerfile, y cuando se crea un contenedor con la imagen, docker crea una capa para el contenedor, y esta capa es la que se usa para guardar los datos del contenedor.

Podemos usar el comando **history** para ver las capas de una imagen:

```bash
docker history <nombre_imagen>

Ejemplo: docker history ubuntu:curso
```

Hay una herramienta llamada dive que nos permite ver las capas de una imagen de una forma mas amigable, para instalarla debemos ejecutar el siguiente comando:

```bash
sudo apt-get install dive
```

Luego ejecutamos el siguiente comando para ver las capas de una imagen:

```bash
dive <nombre_imagen>

Ejemplo: dive ubuntu:curso
```

Cuando corremos un contenedor docker nos da una capa que si es mutable, a diferencia de las capas de la imagen. Y esta capa mutable es la que se usa para guardar los datos del contenedor.

## Desarrollando con docker y node

Primero creamos el archivo **Dockerfile** con el siguiente contenido:

```dockerfile
FROM node:latest

COPY ["package.json", "package-lock.json*", "/usr/src/app"]

WORKDIR /usr/src/app

RUN npm install

COPY [".", "/usr/src/app"]

EXPOSE 3000

CMD ["npx", "nodemon", "index.js"]

```

Luego ejecutamos el build con el siguiente comando:

```bash
docker build -t <nombre_imagen> .

docker build -t node-app .
```

Corremos el contenedor con el siguiente comando:

```bash
docker run --rm -p 3000:3000 node-app
```

> El flag **--rm** es para eliminar el contenedor cuando se detenga.

Si queremos evitar hacer muchos build podemos usar el siguiente comando:

```bash
docker run --rm -p 3000:3000 -v "C:\Users\sorrus\DEV\cursos\docker\docker\index.js":/usr/src/index.js node-app
```

## Docker networking: colaboración entre contenedores

Primero creamos el archivo **Dockerfile** con el siguiente contenido:

```dockerfile
FROM node:latest

COPY ["package.json", "package-lock.json*", "/usr/src/app"]

WORKDIR /usr/src/app

RUN npm install

COPY [".", "/usr/src/app"]

EXPOSE 3000

CMD ["npx", "nodemon", "index.js"]
```

Luego ejecutamos el build con el siguiente comando:

```bash
docker build -t <nombre_imagen> .

docker build -t node-app .
```

Luego ejecutamos el siguiente comando para crear una red:

```bash
docker network create --attachable <nombre_red>

Ejemplo: docker network create  --attachable node-app-net
```

Luego ejecutamos el siguiente comando para crear un contenedor con la imagen:

```bash
docker run -d --name <nombre_contenedor> <nombre_imagen>

Ejemplo: docker run -d --name dbMongo mongo
```

Luego conectamos

```bash
docker network connect <nombre_red> <nombre_contenedor>

Ejemplo: docker network connect node-app-net dbMongo
```

o

```bash
docker run -d --name <nombre_contenedor> --network <nombre_red> -p <puerto_host>:<puerto_contenedor> <nombre_imagen>

Ejemplo: docker run --rm -d --name node-app --network node-app-net -p 3000:3000 node-app
```

> El flag **--network** es para indicar la red que va a usar el contenedor.

Luego ejecutamos el siguiente comando para crear otro contenedor con la imagen:

```bash
docker run -d --name <nombre_contenedor> -p  <puerto_host>:<puerto_contenedor> --env <variable de entorno> <nombre_imagen>

Ejemplo: docker run -d --name node-app -p 3000:3000 --env MONGO_URL=mongodb://dbMongo:27017/test node-app
```

```bash
docker run --rm -d --name <nombre_contenedor> --network <nombre_red> -p <puerto_host>:<puerto_contenedor> <nombre_imagen>

Ejemplo: docker run --rm -d --name mongo-db --network node-app-net -p 27017:27017 mongo
```

Luego ejecutamos el siguiente comando para ver los contenedores que están en la red:

```bash
docker network inspect <nombre_red>

Ejemplo: docker network inspect node-app-net
```

## Docker compose

Es una herramienta que nos permite crear y ejecutar aplicaciones con multiples contenedores. Para usar docker compose debemos crear un archivo llamado **docker-compose.yml** con el siguiente contenido:

```yml
version: "3.8"

services:
  node-app:
    image: node-app
    build: .
    ports:
      - "3000:3000"
    environment:
      MONGO_URL: mongodb://mongo-db:27017/test
    depends_on:
      - mongo-db
  mongo-db:
    image: mongo
    ports:
      - "27017:27017"
```

> El comando **version** es para indicar la versión de docker compose, el comando **services** es para indicar los servicios que se van a ejecutar, el comando **image** es para indicar la imagen que se va a usar, el comando **build** es para indicar la ruta del Dockerfile, el comando **ports** es para indicar los puertos que se van a exponer, el comando **environment** es para indicar las variables de entorno, el comando **depends_on** es para indicar los contenedores que se deben ejecutar primero. En este caso se ejecuta primero el contenedor de mongo-db y luego el contenedor de node-app.

Para correr los contenedores con docker compose debemos ejecutar el siguiente comando:

```bash
docker-compose up -d
```

Para detener los contenedores con docker compose debemos ejecutar el siguiente comando:

```bash
docker-compose down
```

Con docker compose tambien podemos usar los comandos exec, logs, ps, etc. Ejemplo:

```bash
docker-compose exec node-app bash
```

## Docker compose como herramienta de desarrollo

Para desarrollar remplazamos la instruccion image por build, y agregamos el comando volumes. Ejemplo:

```yml
version: "3.8"
services:
  node-app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/usr/src/
      - /usr/src/node_modules
    environment:
      MONGO_URL: mongodb://mongo-db:27017/test
    depends_on:
      - mongo-db
  mongo-db:
    image: mongo
    ports:
      - "27017:27017"
```

> En build le pasamos la ruta en este caso un punto que hace referencia a la ruta actual. y en volumes pasamos la ruta que va a moficcar cada vez que hagamos un cambio y como segundo parametro la ruta que va a ignorar

### docker-compose.override.yml

Es un archivo que nos permite sobreescribir el archivo docker-compose.yml, y se debe llamar **docker-compose.override.yml**. Se usa para configurar el entorno de desarrollo y asi no tener que modificar el archivo docker-compose.yml. Ejemplo:

```yml
version: "3.8"
services:
  node-app:
    environment:
      MONGO_URL: mongodb://localhost:27017/test
```

Con docker compose podemos escalar los contenedores, es decir, podemos crear multiples contenedores de un servicio. Ejemplo:

```bash
docker-compose up -d --scale node-app=3
```

Esto crea 3 contenedores del servicio node-app. Pero debemos configurar el archivo docker-compose.yml para que los contenedores se puedan comunicar entre si. Modificamos los puertos y le pasamos un rango dependiendo de cuantos contenedores queremos crear Ejemplo:

```yml
version: "3.8"

ports:
  - "3000-3003:3000"
```

## Docker stats

Para ver el consumo de recursos de los contenedores podemos usar el siguiente comando:

```bash
docker stats
```

para asignar una cantidad de memoria a un contenedor podemos usar el siguiente comando:

```bash
docker run -d --name <nombre_contenedor> -m <cantidad_memoria> <nombre_imagen>

Ejemplo: docker run -d --name node-app -m 512m node-app
```

## Deteniendo contenedores

Docker tiene dos formas de detener un contenedor: **SIGTERM** y **SIGKILL**.

- **SIGTERM** es la forma correcta de detener un contenedor, y es la que se usa por defecto.
- **SIGKILL** es la forma incorrecta de detener un contenedor, y es la que se usa cuando se usa el flag **-f**.

Para detener un contenedor con **SIGTERM** debemos ejecutar el siguiente comando:

```bash
docker stop <nombre_contenedor>

Ejemplo: docker stop node-app
```

Para detener un contenedor con **SIGKILL** debemos ejecutar el siguiente comando:

```bash
docker stop -f <nombre_contenedor>
 o
docker kill <nombre_contenedor>

Ejemplo: docker stop -f node-app
```

## execform vs shellform

El comando **CMD** se puede usar de dos formas: **execform** y **shellform**.

- **execform** es la forma correcta de usar el comando **CMD**.
- **shellform** es la forma incorrecta de usar el comando **CMD**.

Para usar **execform** debemos ejecutar el siguiente comando:

```dockerfile
CMD ["npx", "nodemon", "index.js"]
```

Para usar **shellform** debemos ejecutar el siguiente comando:

```dockerfile
CMD npx nodemon index.js
```

## Dockerfile: CMD vs ENTRYPOINT

Entrypoint nos permite ejecutar un comando cuando se crea un contenedor con la imagen, y se debe usar de la siguiente manera:

```dockerfile
FROM
ENTRYPOINT ["<comando>"]
CMD ["<comando>"]

Ejemplo:
FROM ubuntu:latest
ENTRYPOINT ["echo"]
CMD ["mensaje"]
```

Para ejecuatr el comando se debe ejecutar el siguiente comando:

```bash
docker run <nombre_imagen> <comando>

Ejemplo: docker run ubuntu:latest Hola mundo
```

Es importante destacar que el comando **CMD** se puede sobreescribir al momento de crear el contenedor, pero el comando **ENTRYPOINT** no se puede sobreescribir al momento de crear el contenedor.

## dockerignore

Es un archivo que nos permite ignorar archivos y carpetas al momento de crear la imagen, y se debe llamar **.dockerignore**. Ejemplo:

```dockerfile
node_modules
.git
```

## multi-stage builds

Es una forma de optimizar el tamaño de las imagenes, y se debe usar de la siguiente manera:

Creamos dos archivos **Dockerfile** uno llamado **Dockerfile.dev** y otro llamado **Dockerfile.prod** con el siguiente contenido:

El dev es igual al que ya venimos trabajando, el que cambia es el de prodque tiene dos fases

```dockerfile
FROM node:12 as builder

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install --only=production

COPY [".", "/usr/src/"]

RUN npm install --only=development

RUN npm run test


# Productive image
FROM node:12

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install --only=production

COPY --from=builder ["/usr/src/index.js", "/usr/src/"]

EXPOSE 3000

CMD ["node", "index.js"]

```

Si quiero usar un dockerfile en especifico debo usar el flag -f

```bash
docker build -f <nombre_dockerfile> -t <nombre_imagen> .

Ejemplo: docker build -f Dockerfile.prod -t node-app .
```
