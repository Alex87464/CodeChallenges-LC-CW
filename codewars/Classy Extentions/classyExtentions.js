// Classy Extensions
// https://www.codewars.com/kata/55a14aa4817efe41c20000bc

// Relacion de problema: Clases

// Objetivo: Crear una extension de la clase animals y modificar el metodo 'speak()' 
// para que retorne: 'Mr Whiskers meows.'


/*
Extensiones con clase, este kata está dirigido principalmente a la nueva actualización de JS ES6
que introduce la palabra clave "extends". Se cargará previamente la clase Animal, por lo que 
solo deberías editar la clase Cat.

Classy Extensions, this kata is mainly aimed at the new JS ES6 Update 
introducing 'extends' keyword. You will be preloaded with the Animal class, so you 
should only edit the Cat class.
*/


class Cat extends Animal {
  
    constructor(name){
      super(name);
    }
    
    speak(){
      return `${this.name} meows.`;
    }
  }