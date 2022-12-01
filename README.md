# Plantilla de servicios con Docker Compose
[![GitHub release](https://img.shields.io/github/release/docker/compose.svg?style=flat-square)](https://github.com/docker/compose/releases/latest)
[![PkgGoDev](https://img.shields.io/badge/go.dev-docs-007d9c?style=flat-square&logo=go&logoColor=white)](https://pkg.go.dev/github.com/docker/compose/v2)
[![Build Status](https://img.shields.io/github/workflow/status/docker/compose/ci?label=ci&logo=github&style=flat-square)](https://github.com/docker/compose/actions?query=workflow%3Aci)
[![Go Report Card](https://goreportcard.com/badge/github.com/docker/compose/v2?style=flat-square)](https://goreportcard.com/report/github.com/docker/compose/v2)
[![Codecov](https://codecov.io/gh/docker/compose/branch/master/graph/badge.svg?token=HP3K4Y4ctu)](https://codecov.io/gh/docker/compose)

<img src="https://raw.githubusercontent.com/docker/compose/v2/logo.png">

Esta plantilla es una practica de mis habilidades como desarrollador, es un servicio que gestiona una base de datos hecha en postgres con JavaScript, express y docker es un proyecto sencillo con una conexión muy sencilla ideal para juniors. 

# Adicionales para gestion visual 

Esta base de datos la puedes trabajar con cualquier herramienta para graficar, en este caso pgadmin esta integrado al contenedor, por lo tanto, te recomiendo usarla de querer observar la estructura de esta que estará corriendo por el puerto de tu computador a traves del puerto 80, lo necesario para establecer conexión esta en el archivo docker-compose.yml si quieres saber mas a cerca de este servicio te dejo la documentación  <a href="https://docs.docker.com/get-started/08_using_compose/">Docs Docker Compose</a> 

# Instrucciones para correr el proyecto

Para correr la base de datos solo necesitas 1 y mas importante tener instalado docker en un ordenador, si usas linux al descarga de docker es muy facil si usas Windows es un poco mas complicado ya que necesitas instalar un subsistema de linux antes para que tu ordenador tenga las herramientas necesarias para usar docker pero no te preocupes acá te dejo un articulo que te va a ayudar <a href="https://www.redeszone.net/2019/04/21/instalar-docker-windows-10/">Instalacion de Docker a Windows</a>. 

Necesitas tener node.js instalado en tu ordenador para poder ejecutar codigo javascript y poder usar he instalar las dependecias y extensiones necesarias al proyecto ya que vamos a necesitar la ayuda de npm (node package manager) para gestionar todos los paquetes necesarios e instalaciones de competencia si ya cuentas con todo esto estamos listo para empezar.

# Pasos para correr el servicio 

Despues de que clones o forkes el repositorio de git-hub los pasos a seguir son sencillos como ingresar al proyecto plantilla-servicios dentro de el proyecto necesitas instalar las dependencias necesarias para el proyecto, esto se realiza a traves de un comando en la consola :
```cmd
npm i 
npm install
```
ahora ya tienes las dependencias que esta usando el proyecto puedes comprobar que todo este en orden corriendo el proyecto a traves de comando:
```cmd
npm start
```
podrás observar que el servicio corre perfecto en el puerto 8080 recuerda que esto puedes cambiarlo en el momento que desees y si quieres cambiar el comando para correr el proyecto podrías hacerlo en el package.json para que sea el patrón que quieras también seria de muy buenas practicas usar el dotenv para asignar tus puertos claves y etc como variables de entorno y darle un manejo mas seguro ya que esta información es sensible, perfecto ya tenemos servicio corriendo felicidades!

Ahora te voy a pedir que eches un ojito al archivo a nivel raíz del proyecto con el nombre docker-compose en este archivo tenemos unas líneas de instrucción de ejecución de nuestra db debes tener en cuenta que como esto es una imagen docker esta corriendo en un puerto del contenedor que exponemos para conectarlo con el puerto de nuestra pc yo use el puerto por defecto "5432:5432" tu puedes cambiarlo si lo deseas en este mismo archivo al igual puedes ver las instrucciones de pgadmin que es la herramienta de visualización de bases de datos que use por preferencia en este mismo archivo estan las variables de entorno necesarias para conectarte a tu base de datos y al gestor visual del motor a la misma altura donde se encuentra este archivo puedes ejecutar el comando a través de tu consola 
```cmd
docker-compose up
```
y podrás ver como comienza este archivo a hacer pull a la imagen de postgres y todo lo necesario para armar el contenedor ideal luego comenzara con el mismo proceso para pgadmin este quedara a la escucha de todo lo que este residiendo postgres con una consola interactiva y ya ves esta consola puedes ver pg admin a través de http://localhost:80 

# Pruebas y Utilizacion del servicio

esto al igual que todo lo demás en el proyecto puedes usar tu herramienta de preferencia yo usare **Postman** que es la herramienta que normalmente uso desde hace mucho tiempo pero hay otras herramientas increíbles en el mercado como **insomnia** o incluso hay extensiones de visual estudio code para estas pruebas.

te dejo la query de la creacion de la tabla por motivos informativos 
```SQL
create table monitore_variables_electricas
( id int NOT NULL,
 variables numeric ,
 lastinsert timestamp)
```
# BODYREQUEST
**INSERTAR**
```json
{
    "option":"insertar",
    "rows": [
          {
                    "meter_date": "2022-10-24 01:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-24 02:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-24 03:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-24 04:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-24 05:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-24 06:00:00",
                    "value": 22.051237
                },
                 {
                    "meter_date": "2022-10-24 11:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-24 12:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-25 01:00:00",
                    "value": 22.051237
                },
                             {
                    "meter_date": "2022-10-25 02:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-25 03:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-25 04:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-25 05:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-25 06:00:00",
                    "value": 22.051237
                },
                 {
                    "meter_date": "2022-10-25 11:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-25 11:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-25 13:00:00",
                    "value": 22.051237
                },
                             {
                    "meter_date": "2022-10-25 14:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-25 15:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-25 01:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-25 01:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-25 01:00:00",
                    "value": 22.051237
                },
                 {
                    "meter_date": "2022-10-24 01:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-24 01:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-24 01:00:00",
                    "value": 22.051237
                },
                             {
                    "meter_date": "2022-10-24 01:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-24 01:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-24 01:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-24 01:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-24 01:00:00",
                    "value": 22.051237
                },
                 {
                    "meter_date": "2022-10-24 01:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-24 01:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-24 01:00:00",
                    "value": 22.051237
                }, {
                    "meter_date": "2022-10-24 01:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-24 01:00:00",
                    "value": 22.051237
                },
                             {
                    "meter_date": "2022-10-24 01:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-24 01:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-24 01:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-24 01:00:00",
                    "value": 22.051237
                },
                {
                    "meter_date": "2022-10-24 01:00:00",
                    "value": 22.051237
                },
                 {
                    "meter_date": "2022-10-24 01:00:00",
                    "value": 22.051237
                }
         
            ]
}
```
**PRUEBA**
```JSON
{"option":"prueba",}
```
**ELIMINAR**
```json
{
    "option":"eliminacion",
    "Id": 2
}
```
**DAILY**
```json
{
    "option":"daily",
    "fechaI":"2022-10-24"
}
```
**monthly**
```json
{
    "option":"monthly",
    "fechaI":"10"
}
```
**BUSQUEDA DETALLADA**
```json
{
    "option":"busquedatiempo",
    "fechaI":"2022-10-24",
    "FechaF":"2022-10-30"
}
```

