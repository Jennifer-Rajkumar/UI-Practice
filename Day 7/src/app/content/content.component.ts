import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

export interface Todos{
  task: string,
  time: string,
  status: Boolean;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.todoItem={} as Todos;
  }

  public edit: string | undefined;
  public action = 'Add Task';
  public pos = -1;
  
  public todoItem: any;
  todos:Todos[]=[];

  public newTask: string | undefined;

	public addToList() {
    this.todoItem = {} as Todos;
    if(this.pos==-1) {
      if(this.newTask) {
        this.todoItem.task = this.newTask;
        this.todoItem.time = DateTime.now().toLocaleString(DateTime.DATE_FULL);
        this.todoItem.status = false;
        this.todos.push(this.todoItem);
        this.newTask = '';
      }
    }
    else {
      if(this.newTask) {
        this.todoItem.task = this.newTask;
        this.todoItem.time = DateTime.now().toLocaleString(DateTime.DATE_FULL);
        this.todoItem.status = false;
        this.todos[this.pos] = this.todoItem;
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
    this.todos[index].status = true;
  }

  public incompleteTask(index: number) {
    this.todos.splice(index, 1);
  }

  public editTask(index: number) {
    this.edit = this.todos[index].task;
    this.action = 'Edit Task';
    this.pos = index;
  }
}
