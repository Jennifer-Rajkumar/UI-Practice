import { Injectable } from '@angular/core';
import { CrudService } from '../data/crud.service';
import { User } from '../data/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: any;
  users:User[]=[];
  public isUser: any;

  constructor(public crudApi: CrudService) {
    this.user={} as User;
    let s = this.crudApi.GetUsers(); 
    s.snapshotChanges().subscribe(data => {
      this.users = [];
      data.forEach(item => {
        let a:any = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.users.push(a as User);
      })
    })
  }
  
  public checkError(requiredForm: any) {
    Object.keys(requiredForm.controls).forEach(key => {
      const controlErrors: any = requiredForm.get(key)?.errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          return true;
        });
      }
    });
    return false;
  }

  public checkUser(email: string) {
    this.isUser = this.users.find(e => e.email === email);
    if(this.isUser) return true;
    return false; 
  }
}
