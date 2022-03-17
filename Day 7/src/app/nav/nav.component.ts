import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, DoCheck {

  constructor(private _todoService: TodoService) { 

  }
  ngDoCheck(): void {
    this.count = this._todoService.getCount(this.todos);
  }
  
  public count:any = [];

  ngOnInit(): void {
    this.count = this._todoService.getCount(this.todos);
  }

  @Input() todos: any;
}
