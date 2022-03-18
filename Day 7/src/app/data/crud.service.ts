import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Todos } from '../data/todos';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  todosRef: AngularFireList<any> | undefined;
  todoRef: AngularFireObject<any> | undefined;
  constructor(private db: AngularFireDatabase) {}
  
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
  
  GetTodoList() {
    this.todosRef = this.db.list('/todo-list');
    return this.todosRef;
  }
  
  UpdateTodo(todos: Todos) {
    this.todoRef = this.GetTodo(todos.$key);
    if(this.todoRef) {
      this.todoRef.update({
        task: todos.task,
        time: todos.time,
        category: todos.category,
        status: todos.status
      });
    }
  }

  DeleteTodo(id: string) {
    this.todoRef = this.db.object('todo-list/'+id);
    this.todoRef.remove();
  }
}
