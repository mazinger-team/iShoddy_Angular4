# Instalar localmente

Descargar y ejecutar 

~~~~
 $ npm install
 $ npm start
~~~~

Deberá configurarse `src/environments/environment.ts` para que acceda a las apis de servicio en local.


# Instalar angular 4 con instalaciones previas

Teclear las siguientes instrucciones

- Desinstalar angular-cli

~~~
 $ npm uninstall -g angular-cli
 $ npm uninstall -g @angular/cli
~~~

- Limpiar la cache de npm

~~~
$ npm cache clean
~~~

- Instalar la última version de angular-cli

~~~
npm install -g @angular/cli@latest
~~~

Ya se puede utilizar angular-cli para modificar el proyecto
