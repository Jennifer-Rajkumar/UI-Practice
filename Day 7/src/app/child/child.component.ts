import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  	constructor() { }

  	ngOnInit(): void {
		  
  	}

  	@Input() incomplete: string[] = [];
  	public completed: string[] = [];

	public completedTask(index: number) {
    	this.completed.push(this.incomplete[index]);
		this.incomplete.splice(index, 1);
	}

  	public incompleteTask(index: number) {
		this.completed.splice(index, 1);
	}
}
