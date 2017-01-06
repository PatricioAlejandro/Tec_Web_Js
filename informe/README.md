## Comandos Importantes

### Install sailsjs

> npm install -g sails

### Crear Proyecto SailsJs

> sails new nombreProyecto

### Levantar Servidor

> sails lift

> node app.js

Sails pide opciones no definidas, estas son:

- 1: SAFE MODE no se alterara la BD.
- 2: ALTER MODE se va a alterar la BD si nosotros hicimos cambios en los modelos por ejemplo.
- 3: DELETE MODE borra todos los datos de la BD y vuelve a crear los modelos.

## Servidor WEB de Sails

Se encuentra localizado en la carpeta **assets**

##

no se necesita reiniciar el servidor cuando estamos editando las vistas

## generar controladores SailsJs

> sails generate controller Nombre


## generar un api
> sails generate api Nombre

es la funsion de un controlador y un modelo

## generar un modelo
> sails generate model Nombre

waterline orm que maneja las tablas




# APi REST

URL:
http://localhost:1337/

Metodo HTTP:
POST  
Datos:
javascript{
    nombre:'Pato',
    apellido:'asdas',
    correo:'asdads@sdfgd.com'
}
(json)

Metodo HTTP:
POST 

