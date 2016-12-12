# NPM

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="https://github.com/PatricioAlejandro/Tec_Web_Js/blob/nodejs%230/informe/img/npminit.png" width="500" height="300">
</p>

### Tema : `Introducción a la Web` 
### Fecha : `2016-12-08`
### Estudiante : `Chavez Melo Patricio Alejandro`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `6`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#node">NodeJs</a>
  * <a href="#npm">npm</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `NPM`

<a name="objetivos"></a>
## Objetivos

- Desarrollar conocimiento a cerca del lenguaje javascript.
- Utilizar el lenguaje javascript para implementar un servidor web.

<a name="marco-teorico"></a>
## Marco Teorico
<a name="node"></a>
### Node.Js

-------------------------------------------------------------------------
Node es similar en diseño a, e influenciado por, sistemas como la máquina de eventos de Ruby o Python's Twisted. Node toma el modelo de evento un poco más, presenta un bucle de eventos como una construcción de ejecución en lugar de como una biblioteca. En otros sistemas siempre hay una llamada de bloqueo para iniciar el ciclo de eventos. Normalmente, el comportamiento se define mediante devoluciones de llamada al principio de un script y al final se inicia un servidor a través de una llamada de bloqueo como EventMachine :: run (). En el nodo no hay ninguna llamada de bucle de inicio de evento. El nodo simplemente ingresa en el bucle de eventos después de ejecutar el script de entrada. El nodo sale del bucle de eventos cuando no hay más devoluciones de llamada a realizar. Este comportamiento es como JavaScript de navegador: el bucle de eventos está oculto del usuario.

(Fuente: [NodeJs](https://nodejs.org/en/about/))
<br>
<a href="#cabecera">A la cabecera</a>

<br><br>
<p align="center">
<img src="https://github.com/PatricioAlejandro/Tec_Web_Js/blob/nodejs%230/informe/img/nodejs.png">
</p>
<br><br>
<br>
<a name="npm"></a>
### NPM

-------------------------------------------------------------------------
Si ha estado trabajando con Javascript por un tiempo, es posible que haya oído hablar de npm: npm hace que sea fácil para los desarrolladores de Javascript compartir el código que han creado para resolver problemas particulares y para que otros desarrolladores reutilicen ese código en su Propias aplicaciones.

Una vez que dependas de este código de otros desarrolladores, npm hace que sea muy fácil comprobar si han realizado actualizaciones y descargar esas actualizaciones cuando se realizan.

(Fuente: <a href="https://docs.npmjs.com/getting-started/what-is-npm">NPM</a>)
<br>
<a href="#cabecera">A la cabecera</a>


<br><br>
<p align="center">
<img src="https://github.com/PatricioAlejandro/Tec_Web_Js/blob/nodejs%230/informe/img/npm.jpg">
</p>
<br><br>
<br>
<a name="desarrollo"></a>
## Desarrollo del informe
#### 1 
Primero que nada se debe instalar la nueva version de <a href="">NodeJs</a> dependiendo del SO que se tenga.
<p align="center">
<img src="https://github.com/PatricioAlejandro/Tec_Web_Js/blob/nodejs%230/informe/img/nodeinstall.png" width="500" height="300">
</p>
#### 2
Una vez instalado el paquete de nodejs abrimos la Terminal/CMD y ejecutamos el comando `node`. Se abrira un editor de sentencias javascript asi:
<p align="center">
<img src="https://github.com/PatricioAlejandro/Tec_Web_Js/blob/nodejs%230/informe/img/node1.png">
</p>
#### 3
Para ejecutar un programa echo en javascript se debe ejecutar el comando: `node ejemplo.js` donde ejemplo.js es el programa que se utilizara.
<p align="center">
<img src="https://github.com/PatricioAlejandro/Tec_Web_Js/blob/nodejs%230/informe/img/node2.png">
</p>
<br>
<p align="center">
<img src="https://github.com/PatricioAlejandro/Tec_Web_Js/blob/nodejs%230/informe/img/node3.png">
</p>
#### 4
Una vez que nos ubiquemos en la terminal en el directorio requerido se debe ejecutar el comando `npm init` para inicializar el paquete json. 
<p align="center">
<img src="https://github.com/PatricioAlejandro/Tec_Web_Js/blob/nodejs%230/informe/img/node4.png">
</p>
#### 5
Para subir un paquete a la web se debe tener una cuenta en npm <a href="">aqui</a> y luego de ingresar con el comando  `npm login` podemos subir un paquete con el comando `npm publish + name@version` donde name es el nombre del paquete y version del mismo.

#### 6
Finalmente para descargar un paquete se utiliza el comando `npm -i g name` asi:


<br>
<a href="#cabecera">A la cabecera</a>



<a name="conrec"></a>
## Conclusiones y Recomendaciones

- Se comprendio el uso del script *.json.
- Se logro entender para que sirve la publicacion de paquetes mediante el gestor de paquetes npm, y asi poder reutilizar nuestro codigo.

<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Patricio Chavez](https://github.com/PatricioAlejandro)