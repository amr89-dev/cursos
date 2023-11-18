"use strict";

function singleThread() {
  console.log("____________________________________");
  console.log("         EL PROCESO DE NODE         ");
  console.log(`Id del proceso .........${process.pid}`);
  console.log(`Titulo...............${process.title}`);
  console.log(`Directorio de Node...${process.execPath}`);
  console.log(`Directorio actual....${process.cwd()}`);
  console.log(`Version de node .....${process.version}`);
  console.log(`Version de dependencias .... ${process.versions}`);
  console.log(`Plataforma (S.O.) ..... ${process.platform}`);
  console.log(`Arquitectura (S.O.) ....${process.arch}`);
  console.log(`Tiempo activo de Node ${process.uptime()}`);
  console.log(`Argumentos del proceso .... ${process.argv}`);
  console.log(`-------------------------------------`);
}
singleThread();
