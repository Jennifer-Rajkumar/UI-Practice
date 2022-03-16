import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public edit: string | undefined;
  
  public incomplete: string[] = [];
  public completed: string[] = [];

  public newTask: string | undefined;

	public addToList() {
		if (this.newTask == '') {
		}
		else if(this.newTask) {
			this.incomplete.push(this.newTask);
			this.newTask = '';
		}
	}

  public completedTask(index: number) {
    this.completed.push(this.incomplete[index]);
    this.incomplete.splice(index, 1);
  }

  public incompleteTask(index: number) {
    this.completed.splice(index, 1);
  }

  public editTask(index: number) {
    this.edit = this.incomplete[index];
    this.incomplete.splice(index, 1);
  }
}
