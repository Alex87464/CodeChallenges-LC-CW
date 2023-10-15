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

    // Método size para retornar la cantidad total de nodos en la lista enlazada
    size() {
        let counter = 0;
        let current = this.head;
        while (current) {
            counter++;
            current = current.next;
        }
        console.log(`La cantidad de nodos es ${counter}`)
        return counter;
    }

    find(data) {
        let current = this.head;
        while(current) {
            if (current.data === data) {
                console.log(`Se encontró el nodo con el valor ${data}`)
                return current;
            }
            current = current.next;
        }
        console.log(`No se encontró un nodo con el valor ${data} en la lista`);
        return null;
    }

    delete(data) {
        // Si la lista está vacía no hay nada que eliminar
        if(!this.head) {
            return `Lista vacía, no hay nada que eliminar`;
        }

        // Si el valor que buscamos eliminar está en el head
        if(this.head === data) {
            this.head = this.head.next; // Le asignamos al head el valor del 'siguiente' nodo 
            // lo que hace que el primer nodo pierda su valor o sea null si es que no hay mas nodos
            return;
        }

        let current = this.head;
        let previous = null;

        while (current && current.data !== data) {
            previous = current;
            current = current.next;
        }

        if(current) {
            previous.next = current.next;
        }


    }

}

const myList = new LinkedList();
myList.append(1);
myList.append(5);
myList.append(10);
myList.append(20);


// myList.find(5);
myList.display(); // Cuando se llama al método display() se imprime en consola los valores de la lista
console.log('-----------')
myList.delete(5);
myList.display();
// myList.size();
