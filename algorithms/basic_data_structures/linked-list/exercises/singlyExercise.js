/*
Descripción del ejercicio:
Crea una clase llamada LinkedList que representa una lista enlazada simple. 
La clase debe  tener un método add(data) que agrega un nuevo nodo con el valor data 
al final de la lista.
Luego, crea un método display() que muestra los elementos de la lista enlazada en la consola.

Pasos para el ejercicio:
Define una clase Node con un constructor que tenga dos propiedades: data (valor del nodo) y next (referencia al siguiente nodo).
Define una clase LinkedList con un constructor que inicialice el atributo head como null, lo que indica que la lista está vacía.
Agrega un método add(data) a la clase LinkedList que agrega un nuevo nodo con el valor data al final de la lista enlazada. Puedes seguir el mismo patrón que hemos visto anteriormente.
Agrega un método display() a la clase LinkedList que muestra los elementos de la lista enlazada en la consola, recorriendo la lista y mostrando el valor de cada nodo.
Crea una instancia de la clase LinkedList, agrega varios elementos a la lista usando el método add(data), y luego muestra los elementos de la lista enlazada en la consola usando el método display().
*/

// Paso 1: Crear la clase Node
class Node {
    constructor(data){
        this.data = data; // Dato que recibirá por parametro
        this.next = null; // Referencia al siguiente nodo
    }
}

// Paso 2: Crear la clase LinkedList
class LinkedList {
    constructor(){
        this.head = null; // Primer nodo de la lista enlazada inicialmente nulo
    }

    // Método add para agregar un nuevo nodo con el valor data al final de la lista
    add(data){
        // Si no hay head (es decir la LinkedList esta vacía)
        if(!this.head) {
            this.head = new Node(data); // Inicializamos un nuevo Node en el head de la lista
            return;
        }

        // Creamos una variable tomar el valor del primer nodo
        // y luego recorrer la lista
        let current = this.head;
        while(current.next) { // Mientras el siguiente nodo tenga un valor distinto de null
            current = current.next; // le asignamos el valor del siguiente nodo al actual
            // Esto va a suceder sucesivamente hasta llegar al último nodo donde el valor de
            // current.next va ser `null`
        }
        
        // Una vez posicionados en el ultimo nodo, creamos un nuevo nodo en la siguiente
        // posición (ahora el nuevo último nodo) con el valor del (data) recibido por parámetro
        current.next = new Node(data);
    }

    // Método display
    display() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
        return;
    }

}

const myList = new LinkedList();

myList.add(1);
myList.add(5);
myList.add(10);
myList.add(15);

myList.display();

