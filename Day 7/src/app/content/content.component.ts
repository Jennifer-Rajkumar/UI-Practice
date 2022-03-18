import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { Todos } from '../data/todos';
import { CrudService } from '../data/crud.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(public crudApi: CrudService) { }

  ngOnInit(): void {
    this.todoItem={} as Todos;
    let s = this.crudApi.GetTodoList(); 
    s.snapshotChanges().subscribe(data => {
      this.todos = [];
      data.forEach(item => {
        let a:any = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.todos.push(a as Todos);
      })
    })
  }

  public edit: string | undefined;
  public action = 'Add Task';
  public pos = -1;
  
  public todoItem: any;
  todos:Todos[]=[];

  public category: string | undefined;
  public newTask: string | undefined;

	public addToList() {
    this.todoItem = {} as Todos;
    if(this.pos==-1) {
      if(this.newTask) {
        this.todoItem.task = this.newTask;
        this.todoItem.time = DateTime.now().toLocaleString(DateTime.DATE_FULL);
        this.todoItem.category = this.category;
        this.todoItem.status = false;
        this.crudApi.AddTodo(this.todoItem);
       
        this.newTask = '';
      }
    }
    else {
      if(this.newTask) {
        this.todoItem = this.todos[this.pos];
        this.todoItem.task = this.newTask;
        this.todoItem.time = DateTime.now().toLocaleString(DateTime.DATE_FULL);
        this.todoItem.category = this.category;
        this.todoItem.status = false;
        this.crudApi.UpdateTodo(this.todoItem);

        this.action = 'Add Task'; 
        this.pos = -1;
        this.newTask = '';
      }
    }
	}

  public refreshList() {
    this.action = 'Add Task';
    this.pos = -1;
    this.edit = '';
	}

  public completedTask(index: number) {
    this.todoItem = this.todos[index];
    this.todoItem.status = true;
    this.crudApi.UpdateTodo(this.todoItem);
  }

  public incompleteTask(index: number) {
    this.todoItem = this.todos[index];
    this.crudApi.DeleteTodo(this.todoItem.$key);
  }

  public editTask(index: number) {
    this.edit = this.todos[index].task;
    this.newTask = this.todos[index].task;
    this.action = 'Edit Task';
    this.pos = index;
  }

  categoryChangedHandler(category: string) {
    this.category = category;
  }
}

