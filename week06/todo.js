import { writeToLS, readFromLS, bindTouch } from "./utils.js";

//Lugar para guardar la lista en la memoria
let placeToDos = null;

//Se crea la lista de procesamiento
function renderList(list, element, toDos, hidden) {
    console.log(list);
    element.innerHTML = "";

    list.forEach(toDo => {
        const item = document.createElement("li");
        const formattedDate = new Date(toDo.id).toLocaleDateString("en-US");

        //Crear el check y el boton
        let checkBox = null;
        let buttOn = null;

        if(hidden && toDo.completed) {
            //La expresion `` permite que sea un string interpolado para añadir de forma simple un ${}
            //El strike es para demostrar cuando la tarea esta lista
            item.innerHTML = `<label><input type= "checkbox" checked><strike> ${toDo.content}</strike>`
        }
        else {
            item.innerHTML= `<label><input type="checkbox"> ${toDo.content}</label><button>X</button>`
        }

        //Funcionalidad del check, llama al label y luego al checkbox
        checkBox = item.childNodes[0].childNodes[0];

        if(checkBox) {
            checkBox.addEventListener("change", function() {
                toDos.completeToDo(toDo.id);
            });
        }

        //Funcionalidad del boton, llamandolo luego del input
        buttOn = item.childNodes[1];
        if(buttOn) {
            buttOn.addEventListener("click", function() {
                toDos.removeToDo(toDo.id);
            });
        }
        //Aqui es donde finalmente se agrega 
        element.appendChild(item);
    });
}

//Esta funcion es la que busca los keys que se han ido añadiendo al local storage
function getToDos(key) {
    if (placeToDos === null) {
        placeToDos = readFromLS(key) || [];
    }
    return placeToDos;
}

//Le agrega los valores que en si es la fecha
function addToDo(value, key) {
    const newToDo = {
        id: new Date(), content: value, completed: false
    };

    placeToDos.push(newToDo);
    //Cada cambio que se haga se ira al local storage
    writeToLS(key, placeToDos);
}

//Para eliminar y filtrar de una vez
function deleteToDo(key) {
    let newList = placeToDos.filter(item => item.id != key);
    placeToDos = newList;
    writeToLS(key, placeToDos);
}

//Clases no era requerido pero es necesario para la industria
export default class ToDos {

    constructor(listElement, key) {
        console.log(this.listElement);
        this.listElement = listElement;
        console.log(this.listElement);

        this.key = key;
        //Vuelvo a llamar la funcion declarada en index para asegurarme 
        //que el enfoque se vaya a la clase y no al boton
        bindTouch("#addToDo", this.newToDo.bind(this));
        this.listToDos();
    }
    //Cada uno va a ir enfocado en lo que hace
    //Añadirlo a la lista
    newToDo() {
        const task = document.getElementById("todoInput");
        addToDo(task.value, this.key);
        task.value = "";
        this.listToDos();
    }

    //Buscar en la lista y return
    findToDo(id) {
        let toDo = placeToDos.find(element => {
            return element.id === id;
        });
        return toDo;
    }

    //Finalizar la tarea
    completeToDo(id) {
        console.log(id + "checked");
        let toDo = this.findToDo(id);

        if(toDo) {
            toDo.completed = !toDo.completed;
            writeToLS(this.key, placeToDos);
            renderList(placeToDos, this.listElement, this, true);
        }
    }

    //Remueve la tarea
    removeToDo(id) {
        console.log(id + "removed");
        let toDo = this.findToDo(id);

        if(toDo) {
            deleteToDo(id);
            renderList(placeToDos, this.listElement, this, true);
        }
    }

    listToDos(hidden = true) {
        renderList(getToDos(this.key), this.listElement, this, hidden);
    }
}