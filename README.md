# Plantilla de servicios con Docker Compose
[![GitHub release](https://img.shields.io/github/release/docker/compose.svg?style=flat-square)](https://github.com/docker/compose/releases/latest)
[![PkgGoDev](https://img.shields.io/badge/go.dev-docs-007d9c?style=flat-square&logo=go&logoColor=white)](https://pkg.go.dev/github.com/docker/compose/v2)
[![Build Status](https://img.shields.io/github/workflow/status/docker/compose/ci?label=ci&logo=github&style=flat-square)](https://github.com/docker/compose/actions?query=workflow%3Aci)
[![Go Report Card](https://goreportcard.com/badge/github.com/docker/compose/v2?style=flat-square)](https://goreportcard.com/report/github.com/docker/compose/v2)
[![Codecov](https://codecov.io/gh/docker/compose/branch/master/graph/badge.svg?token=HP3K4Y4ctu)](https://codecov.io/gh/docker/compose)

<img src="https://raw.githubusercontent.com/docker/compose/v2/logo.png">

En esta plantilla que es una practica de mis habilidades como desarrollador es un servicio que gestiona una base de datos hecha en postgres con JavaScript, express y docker es un proyecto sencillo con una conexión muy sencilla ideal para novatos 

# Adicionales para gestion visual 

Esta base de datos la puedes trabajar con cualquier herramienta para graficar las bases de datos en este caso pgadmin esta integrado al contenedor por lo tanto te recomiendo usarla de querer observar la estructura de esta que estará corriendo por el puerto de tu computador atreves del puerto 80 lo necesario para establecer conexión esta en el archivo docker-compose.yml si quieres saber mas acerca de este servicio te dejo la documentación  <a href="https://docs.docker.com/get-started/08_using_compose/">Docs Docker Compose</a> 

# Instrucciones para correr el proyecto

para correr la base de datos solo necesitas 1 y mas importante tener instalado docker en un ordenador, si usas linux al descarga de docker es muy facil si usas Windows es un poco mas complicado ya que necesitas instalar un subsistema de linux antes para que tu ordenador tenga las herramientas necesarias para usar docker pero no te preocupes acá te dejo un articulo que te va a ayudar <a href="https://www.redeszone.net/2019/04/21/instalar-docker-windows-10/">Instalacion de Docker a Windows</a>. 

necesitas tener node.js instalado en tu ordenador para poder ejecutar codigo javascript y poder usar he instalar las dependecias y extenciones necesarias al proyecto ya que vamos a necesitar la ayuda de npm (node package manager) para gestionar todos los paquetes necesarios he intalaciones de competencia si ya cuentas con todo esto estamos listo para empezar.

# Pasos para correr el servicio 

despues de que clones o forkes el repositorio de git-hub los pasos a seguir son sencillos como ingresar al proyecto plantilla-servicios
dentro de el proyecto necesitas instalar las dependencias necesarias para el proyecto esto se realiza atraves de un comando en la consola :
```cmd
npm i 
npm install
```
ahora ya tienes las dependencias que estra usando el proyecto puedes comprobar que todo este en orden corriendo el proyecto a traves de comando:
```cmd
npm start
```
podrás observar que el servicio corre perfecto en el puerto 8080 recuerda que esto puedes cambiarlo en el momento que desees y si quieres cambiar el comando para correr el proyecto podrías hacerlo en el package.json para que sea el patrón que quieras también seria de muy buenas practicas usar el dotenv para asignar tus puertos claves y etc como variables de entorno y darle un manejo mas seguro ya que esta información es sensible, perfecto ya tenemos servicio corriendo felicidades!

hora te voy a pedir que eches un ojito al archivo a nivel raíz del proyecto con el nombre docker-compose en este archivo tenemos unas líneas de instrucción de ejecución de nuestra db debes tener en cuenta que como esto es una imagen docker esta corriendo en un puerto del contenedor que exponemos para conectarlo con el puerto de nuestra pc yo use el puerto por defecto "5432:5432" tu puedes cambiarlo si lo deseas en este mismo archivo al igual puedes ver las instrucciones de pgadmin que es la herramienta de visualización de bases de datos que use por preferencia en este mismo archivo estan las variables de entorno necesarias para conectarte a tu base de datos y al gestor visual del motor a la misma altura donde se encuentra este archivo puedes ejecutar el comando a través de tu consola 
```cmd
docker-compose up
```
y podrás ver como comienza este archivo a hacer pull a la imagen de postgres y todo lo necesario para armar el contenedor ideal luego comenzara con el mismo proceso para pgadmin este quedara a la escucha de todo lo que este residiendo postgres con una consola interactiva y ya ves esta consola puedes ver pg admin a través de http://localhost:80 

# Pruebas y Utilizacion del servicio

esto al igual que todo lo demás en el proyecto puedes usar tu herramienta de preferencia yo usare **Postman** que es la herramienta que normalmente uso desde hace mucho tiempo pero hay otras herramientas increíbles en el mercado como **insomnia** o incluso hay extensiones de visual estudio code para estas pruebas.