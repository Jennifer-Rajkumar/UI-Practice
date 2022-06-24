import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, DoCheck {

  constructor(private _todoService: TodoService) { 

  }
  ngDoCheck(): void {
    this.category.emit(this.chosen);
    this.count = this._todoService.getCount(this.todos);
  }
  
  public count:any = [];

  ngOnInit(): void {
    this.category.emit(this.chosen);
    this.count = this._todoService.getCount(this.todos);
  }

  public chosen: string | undefined;
  @Input() todos: any;
  @Output() category: EventEmitter<string> =   new EventEmitter();

}
