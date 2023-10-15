// Listas Enlazadas

// * Lista enlazada simple

// Paso 1: Crear la clase Node
// La clase node representa un nodo de la lista enlazada
// y en este caso por ser una lista simple solo contiene datos y un puntero al siguiente nodo
class Node {
    constructor(data) {
        this.data = data; // Valor del nodo
        this.next = null; // Puntero/Referencia al siguiente nodo
    }
}

// Cada instancia de la clase Node representa un nodo de la lista enlazada. El nodo contiene
// dos propiedades:
// 1. data: Almacena el valor que queremos guardar en el nodo
// 2. next: Almacena una referencia al siguiente nodo en la lista. Inicialmente es nulo
// porque no hay ningún nodo siguiente.


// Paso 2: Crear la LinkedList:

class LinkedList {

    constructor(){
        this.head = null; // El primer nodo de la lista inicialmente nulo
    }
    // Cada instancia de la LinkedList va a representar una lista enlazada.
    // La lista enlazada contiene una propiedad llamada `head`
    // que apunta al primer nodo de la lista. Inicialmente es nulo porque la lista está vacía.

    // Método para agregar un nodo al final de la lista
    append(data) {
        // Si la lista esta vacía (es decir si head es nulo) entonces
        // el método crea un nuevo nodo y lo asigna como `head` en la lista
        if(!this.head) { // Si la lista esta vacía
            this.head = new Node(data); // Crea un nuevo nodo y lo asigna como `head`
            return; // Termina la ejecución del método
        }

        // Si la lista ya tiene nodos, entonces es necesario recorrer la lista para
        // encontrar el último nodo
        let current = this.head; // Seteamos el nodo actual como el head para empezar a recorrer la lista
        while (current.next) { // Mientras el nodo actual tenga un nodo siguiente y no sea null
            current = current.next; // Seteamos el nodo actual como el siguiente nodo
        }
        // Una vez en el último nodo, creamos un nuevo nodo con el valor `data` y lo asignamos
        // como `next` del último nodo.
        // Esto agrega un nodo al final de la lista
        current.next = new Node(data);
    }

    // Método para mostrar los elementos de la lista
    display() {

        let current = this.head;
        while (current) { // Mientras el nodo actual no sea null
            console.log(current.data); // Imprimir el nodo actual
            current = current.next; // setear el nodo actual como el siguiente nodo y volver a iterar
        }
        // Return corta la ejecución del método
        return;
    }
}

const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);

myList.display(); // Cuando se llama al método display() se imprime en consola los valores de la lista