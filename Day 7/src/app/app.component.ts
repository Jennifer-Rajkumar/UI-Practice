import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

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
}