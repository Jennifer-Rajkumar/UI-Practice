import { Component, OnInit } from '@angular/core';
import { CrudService } from '../data/crud.service';
import { User } from '../data/user';
import { Todos } from '../data/todos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public crudApi: CrudService, private router: Router) { }
  
  public user: any;
  users:User[]=[];
  public email: string = '';
  public pwd: string = '';
  public confirm_pwd: string = '';

  ngOnInit(): void {
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

  public addToList() {
    this.user = {} as User;
    if(this.email == '' || this.pwd == '') {}
    else {
      this.user.email = this.email;
      this.user.pwd = this.pwd;
      this.user.todo = {};
      this.crudApi.AddUser(this.user);
      this.router.navigateByUrl('/');
    }
	}
}
