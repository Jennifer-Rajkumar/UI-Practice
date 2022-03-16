import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public incomplete: string[] = [];

  public newTask: string | undefined;

	public addToList() {
		if (this.newTask == '') {
		}
		else if(this.newTask) {
			this.incomplete.push(this.newTask);
			this.newTask = '';
		}
	}
}
