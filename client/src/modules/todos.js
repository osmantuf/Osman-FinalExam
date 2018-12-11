import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Todo } from '../resources/data/todo-object'
@inject(Router,Todo) 
export class Todos {
    constructor(router,todos) {
        this.router = router;
        this.todos=todos;
        this.showTodoEditForm = false;
        this.message = "Todo";
    }
    async activate() {
        await this.getTodos();
    }

    async getTodos() {
        await this.todos.getTodos();
    }

    attached() {
        feather.replace()
    }
    newTodo() {
        this.todo = {
            todo: "",
            priotity: "",
            done:""
        }
        this.openEditForm();
    }
    editTodo(todo) {

        this.todo = todo;
        this.openEditForm();
    }
    openEditForm() {
        this.showTodoEditForm = true;
        setTimeout(() => { $("#Todo").focus(); }, 500);
    }
    async save() {
        
        if (this.todo && this.todo.todo && this.todo.priotity) {
            await this.todos.saveTodo(this.todo);
            await this.getTodos();
            this.back();
        }
    }
    back() {
        this.showTodoEditForm = false;
    }

    async delete() {
        if (this.todo) {
            await this.todos.delete(this.todo);
            await this.getTodos();
            this.back();
        }
    }

}


// import { inject } from 'aurelia-framework';
// import { Router } from 'aurelia-router';
// import { Todo } from '../resources/data/todo-object'
// @inject(Router, Todo)
// export class Todos {
//     constructor(router, todos) {
//         this.router = router;
//         this.todos = todos;
//         this.message = 'Todo';
//         this.showTodoEditForm = false;
//     }
//     // async activate() {
//     //     await this.getTodos();
//     // }
//     // async getTodos() {
//     //     await this.todos.getTodos();
//     // }
//     // attached() {
//     //     feather.replace()
//     // }
//     // newTodo() {
//     //     this.todo = {
//     //         todo: "",
//     //         priorty: "",
//     //         done: ""
//     //     }
//     //     //this.openEditForm();
//     // }
//     // editTodo(todo) {

//     //     this.todo = todo;
//     //     this.openEditForm();
//     // }
//     // openEditForm() {
//     //     this.showTodoEditForm = true;
//     //     setTimeout(() => { $("#Todo").focus(); }, 500);
//     // }
//     // async save() {
//     //     if (this.todo && this.todo.todo && this.todo.woo) {
//     //         await this.todos.saveTodo(this.todo);
//     //         await this.getTodos();
//     //         this.back();
//     //     }
//     // }
//     // back() {
//     //     this.showUserEditForm = false;
//     // }
// }