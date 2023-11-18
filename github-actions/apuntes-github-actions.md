# GitHub Actions

## Introducción

GitHub Actions es un servicio de integración continua (CI) que permite automatizar tareas dentro de un repositorio de GitHub. Se puede utilizar para crear flujos de trabajo personalizados, por ejemplo, para compilar, probar y publicar un proyecto de software.

### Qué son GitHub Actions y qué es CI/CD

Github Actions es una plataforma de integración y despliegue continuo CI/CD (Continuous Integration / Continuous Deployment) que permite automatizar procesos de compilación, pruebas y despliegue.

El flujo CI/CD consta en 8 secciones que se repetirán cíclicamente, 4 para CI y 4 para CD:

CI:

- Plan: Toda la etapa previa donde planificamos los features que integraremos al proyecto.
- Code: El código que hemos desarrollado.
- Build: Compilar o Interpretar el código para dejarlo listo para ser usado por algún host o fuente.
- Test: Correr todas las pruebas desarrolladas para asegurar que el código funcione correctamente.

CD:

- Release: Enviar nuestra build a la locación remota donde se aloja el proyecto.
- Deploy: Reconfigurar y relanzar los servicios del proyecto con los nuevos features.
- Operate: Mantener el proyecto a flote.
- Measure: Medir con métricas la calidad del servicio.

La ventaja competitiva de Github Actions es que permite integrar el resto de servicios de Github de manera nativa, por lo que podremos gestionar nuestros repos enteros sin la necesidad de usar alguna plataforma externa como intermediaria.

También ofrece plantillas personalizadas desarrolladas por el propio equipo de Github o la comunidad que se acoplarán a nuestras necesidades.

El scope de la configuración del flujo se dará por repositorio, por lo que cada repo tendrá su máximo nivel de personalización y respetará la atomicidad.

Github mantiene la plataforma (Actions) y es de uso gratuito, por lo que podremos hacer uso de ella siempre y cuando manejemos proyectos no privativos.

## Conceptos básicos del flujo de trabajo con GitHub Actions

Github Actions funcionará por una serie de Workflows, podemos entenderlos como el molde que contendrán todas las cosas necesarias para que un trabajo quede totalmente finalizado.

## Primeros pasos con GitHub Actions

Creamos una carpeta llamada .github/workflows y dentro de ella un archivo llamado main.yml

### Jerarquía de los Workflow

El workflow será el nivel mayor en la jerarquía, donde por dentro habrán trabajos, estos trabajos constarán de una serie de pasos y cada paso quedará atomizado en forma de acciones. El flujo tiene esta estructura:

- Workflow

  - Job

    - Step

      - Action

      Ejemplo:

      ```yaml
      name: CI
      on:
        push:
          branches: [master]
        pull_request:
          branches: [master]
      ```

```
> El único que no contendrá nada encima será el Workflow y el único que no contendrá nada debajo será el Action.
```

Cada uno de los elementos de la jerarquía se define mediante una palabra clave seguida de un identificador único y un mapa de propiedades. Los elementos de la jerarquía se definen de forma anidada, por lo que los elementos de nivel superior contienen elementos de nivel inferior.

### Eventos y Runners

Los eventos son los que dispararán el flujo de trabajo, por ejemplo, un push a la rama master o un pull request. Los eventos pueden ser de dos tipos: eventos externos o eventos internos.

Los eventos externos son los que se disparan desde fuera del repositorio, por ejemplo, un push a la rama master o un pull request. Los eventos internos son los que se disparan desde dentro del repositorio, por ejemplo, un issue o un comentario.

Los runners son las máquinas que ejecutarán el flujo de trabajo. Los runners pueden ser de dos tipos: runners alojados por GitHub o runners alojados por el usuario.

Los runners alojados por GitHub son los que proporciona GitHub de forma gratuita. Los runners alojados por el usuario son los que proporciona el usuario de forma gratuita o de pago.

### Entendiendo la anatomía de los Workflows

Los Workflows son formalmente definidos como el proceso automatizado que ejecutará uno o más jobs. Se definen mediante un archivo YAML en el directorio .github/workflows del repositorio del proyecto. Podemos tener cuantos Workflows queramos en el repositorio siempre y cuando su evento activador sea diferente.

Generalmente crearemos un Workflow para cada etapa del ciclo CI/CD, por lo que su llamado se dará en cadena pero respetarán sus propios scopes respetando la atomicidad de los procesos. Estos se crean en archivos de formato YAML que respetan el mismo concepto de llave/valor de los JSON. Aquí un ejemplo de un archivo Workflow con su nombre y el evento que lo activará.

```yaml
name: hola-mundo #Nombre del workflow
on: [push] #evento que lo activará
```

### Jobs

Los jobs serán la estructura que encapsularán todos los steps necesarios para llevar a cabo el trabajo, todos estos se ejecutarán en el mismo Runner, por lo que compartirán recursos. Cada step se ejecutará en orden lineal, por lo que el segundo solo empezará en el instante que termine el primero, de la misma forma, si este falla, el trabajo terminará y se romperá el pipeline.

Un detalle a recalcar es que todos los steps dentro del mismo job comparten variables, por lo que podemos usar las variables creadas por un job anterior para aprovecharlas en el siguiente.

Los jobs se definen mediante la palabra clave jobs seguida de un identificador único y un mapa de propiedades. Los jobs se ejecutan de forma paralela en runners diferentes.

```yaml
jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
```

### Runners

Los Runners serán servidores dedicados que ejecutarán los workflows, estos SOLO podrán ejecutar un job a la vez. Github provee Runners de Ubuntu, Windows y MacOS, donde podemos elegir el sistema operativo del Workflow. En un caso generalista usaremos Ubuntu para manejar los sistemas Linux (donde incluso podremos dockerizar para usar el resto del repertorio Open Source), sin embargo, si los requisitos de nuestra aplicación lo necesitan, podemos configurar nuestros propios servidores como Runners.

Teniendo en cuenta los jobs y runners podemos crear un archivo más completo.

```yaml
name: hola-mundo #Nombre del workflow
on: [push] #evento que lo activará
jobs: #Definición de los jobs
	hola-mundo: #Nombre del job
		runs-on: ubuntu-latest #Maquina en la que correrá
```

### Steps y Actions

Los steps serán los pasos que se ejecutarán en el job, estos se ejecutarán en orden lineal, por lo que el segundo solo empezará en el instante que termine el primero, de la misma forma, si este falla, el trabajo terminará y se romperá el pipeline.

Un Step puede ser un script de shell que se correrá o un Action que se ejecutará. Los actions son scripts prefabricados por la comunidad que se pueden encontrar en el Github Marketplace.

Tenemos un job llamado “check bats version” (una librería de node) que constará de 4 pasos: Hacer un checkout del repositorio (esto usará un action), instalar Node.js (otro action), instalar bats (comando de shell) y correr bats (también comando de shell).

```yaml
name: hola-mundo #Nombre del workflow
on: [push] #evento que lo activará
jobs: #Definición de los jobs
  hola-mundo: #Nombre del job
    runs-on: ubuntu-latest #Maquina en la que correrá
    steps: #Definición de los steps
      - name: checkout #Nombre del step
        uses: actions/checkout@v2 #Action que se ejecutará
      - name: Setup Node.js #Nombre del step
        uses: actions/setup-node@v1 #Action que se ejecutará
        with: #Argumentos del action
          node-version: "12.x"
      - name: Install bats #Nombre del step
        run: sudo apt-get install bats #Comando de shell
      - name: Run bats #Nombre del step
        run: bats -v #Comando de shell
```

Los actions son entonces una aplicación personalizada que realiza una tarea compleja repetitiva, ayudarán a reducir código que normalmente se tendría que escribir una y otra vez y se pueden usar desde el Github Marketplace.

### Ejemplo de un Workflow

```yaml
name: CI
on:
  push:
    branches: [master]
  pull_request:
    branches: [master]
jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          node-version: "12.x"
      - name: Install bats
        run: sudo apt-get install bats
      - name: Run bats
        run: bats -v
```

> Nota que si queremos usar un action debemos usar la keyword “uses” mientras que si queremos correr un comando lo haremos con “run”

## Triggers y eventos

Los triggers mas comunes son los siguientes:

- push: Se activa cuando se hace un push a la rama especificada.
  Ejemplos con todos los atributos posibles:

```yaml
on:
  push:
    branches:
      - master # corre cuando se hace un push a la rama master
      - develop # corre cuando se hace un push a la rama develop
      - feature/** # corre cuando se hace un push a cualquier rama que empiece con feature/
    tags:
      - v1 # corre cuando se hace un push a un tag que empiece con v1
      - v2 # corre cuando se hace un push a un tag que empiece con v2
    paths:
      - "path/**" # corre cuando se hace un push a un archivo que empiece con path/
      - "!path/to/file.txt" # corre cuando se hace un push a un archivo que no sea path/to/file.txt
      - "**.js" # corre cuando se hace un push a un archivo que termine en .js
```

- pull_request: Se activa cuando se hace un pull request a la rama especificada.
  Ejemplos con todos los atributos posibles:

```yaml
on:
  pull_request:
    branches:
      - master
      - develop
      - feature/**
    types:
      - opened # corre cuando se abre el pull request
      - closed # corre cuando se cierra el pull request
      - labeled # corre cuando se agrega una etiqueta
      - synchronize # corre cuando se hace un push a la rama del pull request
    tags:
      - v1
      - v2
    paths:
      - "path/**"
      - "!path/to/file.txt"
```

- release: Se activa cuando se hace un release.
  Ejemplos con todos los atributos posibles:

```yaml
on:
  release:
    types:
      - published
      - unpublished
    tags:
      - v1
      - v2
    paths:
      - "path/**"
      - "!path/to/file.txt"
```

- repository_dispatch: Se activa cuando se hace un dispatch manualmente.
  Ejemplos con todos los atributos posibles:

```yaml
on:
  repository_dispatch:
    types:
      - my-event-type
    tags:
      - v1
      - v2
    paths:
      - "path/**"
      - "!path/to/file.txt"
```

- workflow_dispatch: Se activa cuando se hace un dispatch manualmente.
  Ejemplos con todos los atributos posibles:

```yaml
on:
  workflow_dispatch:
    inputs:
      my_input:
        description: "My Input"
        required: true
        default: "default value"
        type: choice # or string, boolean, number
        options: # required for type: choice
          - option1
          - option2
    tags:
      - v1
      - v2
    paths:
      - "path/**"
      - "!path/to/file.txt"
```

- schedule: Se activa cuando se cumple el cron especificado.
  Ejemplos con todos los atributos posibles:

```yaml
on:
  schedule:
    - cron: "0 0 * * *" # la sinta de cron se puede generar en https://crontab.guru/
    - cron: "0 6 * * *"
    - cron: "0 12 * * *"
    - cron: "0 18 * * *"
    - cron: "0 0 * * 0"
    - cron: "0 0 1 * *"
    - cron: "0 0 1 1 *"
    - cron: "0 0 1 1 0"
    - cron: "0 0 1 1 1"
    - cron: "0 0 1 1 2"
    - cron: "0 0 1 1 3"
    - cron: "0 0 1 1 4"
```

> Nota: Los cron se ejecutan en UTC por lo que hay que tener en cuenta la diferencia horaria. Cada valor significa lo siguiente: minuto (0-59) , hora (0-23), día del mes (1-31), mes(1-12 ó JAN-DEC), día de la semana (0-6 ó SUN-SAT).

- issues: Se activa cuando se crea un issue.
  Ejemplos con todos los atributos posibles:

```yaml
on:
  issues:
    types:
      - opened
      - edited
      - deleted
      - transferred
      - pinned
      - unpinned
      - closed
      - reopened
      - assigned
      - unassigned
      - labeled
      - unlabeled
      - milestoned
      - demilestoned
    tags:
      - v1
      - v2
    paths:
      - "path/**"
      - "!path/to/file.txt"
```

- issue_comment: Se activa cuando se hace un comentario en un issue.
  Ejemplos con todos los atributos posibles:

```yaml
on:
  issue_comment:
  jobs:
  pr_comment:
   name: PR Comment
   if: ${{github.event.issue.pull_request}}
    types:
      - created
      - edited
      - deleted
    tags:
      - v1
      - v2
    paths:
      - "path/**"
      - "!path/to/file.txt"
```

## Expressions

Las expresiones son una forma de acceder a los datos de los eventos que se disparan. Se pueden usar en cualquier lugar donde se use una cadena o un número, como en los valores predeterminados de entrada, los valores de entrada requeridos, los valores de entrada de selección y los valores de entrada de matriz.

Ejemplo de expresión:

```yaml
${{ github.event.issue.title }}
```

### Literales

Los literales son valores que se pueden usar en expresiones. Los literales se pueden usar en cualquier lugar donde se use una cadena o un número, como en los valores predeterminados de entrada, los valores de entrada requeridos, los valores de entrada de selección y los valores de entrada de matriz.

Ejemplo de literales:

```yaml
numeroEntero: ${{ 12 }}
numeroFloat: ${{ 12.5 }}
numeroNegativo: ${{ -12 }}
numeroExponencial: ${{ 12e5 }}
numeroHexadecimal: ${{ 0xFF }} #Usada para ip o mac address
string: Hello World #No es necesario usar comillas
stringComillas: ${{ 'Hello World' }}
booleano: ${{ true }}
nulo: ${{ null }}
```

### Operadores

Los operadores se pueden usar en cualquier lugar donde se use una cadena o un número, como en los valores predeterminados de entrada, los valores de entrada requeridos, los valores de entrada de selección y los valores de entrada de matriz.

Ejemplo de operadores:

```yaml
Agrupacion: () #Ejemplo: ${{ (1 + 2) * 3 }}
Indice: [] #Ejemplo: ${{ steps[] }}
Referencia de propiedad: . #Ejemplo: ${{ github.event.issue.title }}
Negacion: ! #Ejemplo: ${{ !true }}


Menor que: < #Ejemplo: ${{ 1 < 2 }}
Menor o igual que: <= #Ejemplo: ${{ 1 <= 2 }}
Mayor que: > #Ejemplo: ${{ 1 > 2 }}
Mayor o igual que: > #Ejemplo: ${{ 1 >= 2 }}
Igual que: == #Ejemplo: ${{ 1 == 2 }}
No igual que: != #Ejemplo: ${{ 1 != 2 }}


Y: && #Ejemplo: ${{ true && false }}


O: | #Ejemplo: ${{ true || false }}
```

### Funciones

Las funciones se pueden usar en cualquier lugar donde se use una cadena o un número, como en los valores predeterminados de entrada, los valores de entrada requeridos, los valores de entrada de selección y los valores de entrada de matriz.

Ejemplo de funciones:

```yaml
if: ${{ github.event.issue.title == 'Hello World' }}
toJSON: ${{ toJSON(github.event.issue) }}
fromJSON: ${{ fromJSON(toJSON(github.event.issue)) }}
format: ${{ format('Hello {0}', 'World') }}
contains: ${{ contains(github.event.issue.labels.*.name, 'bug') }} #Busca en todos los labels de un issue si existe alguno que se llame bug
endsWith: ${{ endsWith('Hello World', 'World') }}
format: ${{ format('Hello {0}', 'World') }}
join: ${{ join(' ', 'Hello', 'World') }}
length: ${{ length('Hello World') }}
startsWith: ${{ startsWith('Hello World', 'Hello') }}
toLower: ${{ toLower('Hello World') }}
toUpper: ${{ toUpper('Hello World') }}
trim: ${{ trim(' Hello World ') }}
```

Ejemplo:

```yaml
name: Expression
on :
  workflow_dispatch:
    inputs:
      edad :
        description: 'Edad'
        required: true
        type: integer
      nombre:
        description: 'Tu nombre'
        required: true
        default: 'Juan'
        type: string
jobs:
  mayor:
    if: ${{ inputs.edad >= 18 }}
    runs-on: ubuntu-latest
    steps:
      - name: Correr script
      run: echo ${{ inputs.nombre }} es mayor de edad
  menor:
    if: ${{ inputs.edad < 18 }}
    runs-on: ubuntu-latest
    steps:
      - name: Correr script
      run: echo ${{ inputs.nombre }} es menor de edad
```

## Contextos

Es una manera de acceder a información acerca de las ejecuciones de workflows, variables, entornos de runners, jobs y steps. Cada contextoes un objeto que contiene propiedades. Los principales contextos son:

- **github**: Contiene información sobre el repositorio y el evento que lo disparó. Ejemplo: github.event.issue.title
- **job**: Contiene información sobre el job que se está ejecutando. Se accede a traves del nombre del job. Ejemplo: job.build
- **steps**: Contiene información sobre los steps que se están ejecutando. Se accede a traves del nombre del step. Ejemplo: steps.checkout
- **runner**: Contiene información sobre el runner que se está ejecutando. Ejemplo: runner.os
- **secrets**: Contiene información sobre los secrets que se han configurado en el repositorio. Una vez guardado un secret en el repositorio no se puede ver su valor, solo se puede eliminar o modificar. Ejemplo: secrets.MY_SECRET
- **inputs**: Contiene información sobre los inputs que se han configurado en el workflow. Ejemplo: inputs.my_input
- **env**: Contiene información sobre el entorno del runner. Los env se pueden cofigurar en cualquier parte del archivo yml. Ejemplo: env.USER
- **vars**: Contiene información sobre las variables del workflow, son una manera de almacenar y reutilizar informacion de configuracion no confidencial. Podemos establecer nuestras propias variables o usar las variables de entorno predeterminadas de GitHub. Ejemplo: vars.var1

```yaml
name: Saludo usando variables
on:
  workflow_dispatch:
env:
  DIA_SEMANA: Lunes
jobs:
  saludo-variables:
  runs-on: ubuntu-latest
  env:
    SALUDO: Hola
  steps:
    - name: Saludo
      run: echo ${{ env.SALUDO }} ${{env.NOMBRE}} hoy es ${{ env.DIA_SEMANA }}
      env:
        NOMBRE: Juan
```

## Integracion continua CI: Test

Los test son una parte fundamental de la integración continua, ya que nos permiten asegurar que nuestro código funciona correctamente. Los test se pueden ejecutar en cualquier parte del flujo de trabajo, pero lo más común es ejecutarlos en el job build. Los test se pueden ejecutar de diferentes maneras:

- Ejecutar los test en el mismo runner que se ejecuta el job build.

```yaml
name: CI
on:
  push:
    branches: [master]
  pull_request:
    branches: [master]
jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          node-version: "12.x"
      - name: Install bats
        run: sudo apt-get install bats
      - name: Run bats
        run: bats -v
      - name: Run tests
        run: npm test
```

## Buenas practicas

- Usar un archivo por workflow.
- Usar nombres descriptivos
- Workflow para cada etapa del ciclo CI/CD
- Workflows cortos y simples
- Usar variables para reutilizar código
- Usar timeouts para evitar que los workflows se queden colgados y consuman recursos innecesariamente. Ejemplo:

```yaml
name: CI
on:
  push:
    branches: [master]
  pull_request:
    branches: [master]
jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - name: Checkout
        uses: actions/checkout@v2
```

- Tener cuidado con el uso de actions de terceros, ya que pueden contener código malicioso

- Especiificar la version de los actions que se usan, ya que si no se especifica se usará la ultima version disponible. Si es posible con SHA. Ejemplo:

```yaml
name: CI
on:
  push:
    branches: [master]
  pull_request:
    branches: [master]
jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@a123456789 #SHA del commit del action
      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          node-version: "12.x"
```

- Limitar los permisos de los secrets y tokens que se usan en los workflows. Ejemplo:

```yaml
name: CI
on:
  push:
    branches: [master]
  pull_request:
    branches: [master]
jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          node-version: "12.x"
      - name: Install bats
        run: sudo apt-get install bats
      - name: Run bats
        run: bats -v
      - name: Run tests
        run: npm test
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          publish_dir: ./public
        permissions:
          contents: read
          packages: write
          metadata: read
```
