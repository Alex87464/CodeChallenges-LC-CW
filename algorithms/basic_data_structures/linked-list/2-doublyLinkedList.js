/*
* Estructura de un nodo en una lista enlazada doble
- data: Almacena el valor del nodo
- next: Una referencia al nodo siguiente
- prev: Una referencia al nodo anterior 
*/

// ? Ejemplo de una clase Node para una lista enlazada doble:
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// ? Ejemplo de la implementación de la lista enlazada doble
class doublyLinkedList {
    // Constructor donde definimos el `head` de la lista como null
    constructor(){
        this.head = null;
    }

    // Método add(data) para agregar un nodo al final de la lista
    add(data) {
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }
    }

    // Mostrar la lista en orden
    displayForward() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Mostrar la lista en orden inverso
    displayBackward() {
        // Avanzamos desde el primer nodo al último
        let current = this.head;
        while (current && current.next) {
            current = current.next;
        }

        // A estas alturas current tiene la última posición de la lista
        while (current) { // Recorremos current de forma inversa
            console.log(current.data) // Imprimimos el nodo actual (en esta primer iteracion es el último de la lista)
            current = current.prev; // Y pasamos al anterior
        }
    }

}


// Crear una instancia de la lista enlazada doble
const myList = new doublyLinkedList();

// Agregar algunos elementos a la lista
myList.add(1);
myList.add(2);
myList.add(3);

// Mostrar la lista en orden
console.log("Lista en orden:");
myList.displayForward();

// Mostrar la lista en orden inverso
console.log("Lista en orden inverso:");
myList.displayBackward();
