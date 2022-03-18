import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {     
  }

  getCount(todos: any[]) {
    let len1 = 0;
    let len2 = 0;
    for(let i=0; i<todos.length; i++){
      if(todos[i].status == false) 
        len1++;
      else 
        len2++;
    }
    return [
      {"incomplete":len1,"completed":len2,"total":len1+len2}
    ];
  }
}
