class DBService{
    static getAllTodos(){
        const url = 'https://64b512c3f3dbab5a95c6a4a0.mockapi.io/todos';

        return fetch(url)
        .then(resp => resp.json())
        .then(result => this.convertToTodoArray(result))
        .catch(error => console.log(error.message));
    }


    static deleteTodo(id){
        console.log('delete', id);
        const deleteUrl = 'https://64b512c3f3dbab5a95c6a4a0.mockapi.io/todos/' + id;
        console.log(deleteUrl);
       return fetch(deleteUrl, {method: 'delete'}).then(resp => resp.json());

    }

    static convertToTodoArray(genericArray){
        const tempArray = [];

        for (const obj of genericArray) {

            const newTodo = new Todo(obj.title, obj.isCompleted, new Date(obj.creationDate), obj.id)
            tempArray.push(newTodo);

            
        }

        return tempArray;
    }



}