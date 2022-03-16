import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // myMethod$: Observable<any>;
  //   private myMethodSubject = new Subject<any>();

  //   constructor() {
  //       this.myMethod$ = this.myMethodSubject.asObservable();
  //   }

  constructor() {     
  }

  getCount(data1: string[], data2: string[]) {
    const len1 = data1.length;
    const len2 = data2.length;
    return [
      {"incomplete":len1,"completed":len2,"total":len1+len2}
    ];
  }
}
