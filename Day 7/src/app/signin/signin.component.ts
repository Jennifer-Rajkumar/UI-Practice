import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../data/crud.service';
import { User } from '../data/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public crudApi: CrudService, private router: Router) { }

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
  
  public user: any;
  users:User[]=[];
  public email: string = '';
  public pwd: string = '';
  public path: string = '';

  public validate() {
    this.user = this.users.find(e => (e.email === this.email && e.pwd === this.pwd));
    if(this.user) {
      this.router.navigateByUrl('/todo', {state: { data: this.user}});
    }
	}
}
