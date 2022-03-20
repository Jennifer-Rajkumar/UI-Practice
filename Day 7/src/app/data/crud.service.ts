import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Todos } from './todos';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  todosRef: AngularFireList<any> | undefined;
  todoRef: AngularFireObject<any> | undefined;
  constructor(private db: AngularFireDatabase) {}
  
  AddUser(todos: User) {
    if(this.todosRef) {
      this.todosRef.push({
        email: todos.email,
        pwd: todos.pwd,
        todo: todos.todo
      });
     }
  }

  AddTodo(todos: Todos) {
    if(this.todosRef) {
      this.todosRef.push({
        task: todos.task,
        time: todos.time,
        category: todos.category,
        status: todos.status
      });
     }
  }
  
  GetTodo(id: string) {
    this.todoRef = this.db.object('todo-list/'+id);
    return this.todoRef;
  }
  
  GetTodoList(user: User) {
    this.todosRef = this.db.list('/todo-list/'+user.$key+'/todo');
    return this.todosRef;
  }
  
  GetUsers() {
    this.todosRef = this.db.list('/todo-list');
    return this.todosRef;
  }

  UpdateTodo(todos: Todos, user: User) {
    this.todoRef = this.GetTodo(user.$key+'/todo/'+todos.$key);
    if(this.todoRef) {
      this.todoRef.update({
        task: todos.task,
        time: todos.time,
        category: todos.category,
        status: todos.status
      });
    }
  }

  DeleteTodo(id1: string, id2: string) {
    this.todoRef = this.db.object('todo-list/'+id1+'/todo/'+id2);
    this.todoRef.remove();
  }
}
