import { Component, OnInit } from '@angular/core';
import { CrudService } from '../data/crud.service';
import { User } from '../data/user';
import { Todos } from '../data/todos';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  requiredForm!: FormGroup;
  constructor(public crudApi: CrudService, private router: Router, private formBuilder:FormBuilder) { 
    this.myForm();
  }

  myForm() {
    this.requiredForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ],
      pwd: ['', [Validators.required, Validators.pattern("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@$!%*#?&]).{8,}$")]],
      confirm_pwd: ['',[Validators.required]]
    }, { validators: this.checkPasswords });
  }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('pwd')?.value;
    let confirmPass = group.get('confirm_pwd')?.value;
    console.log(pass);
    return pass === confirmPass ? null : { notSame: true };
  }

  public user: any;
  users:User[]=[];
  public email: string = '';
  public pwd: string = '';
  public confirm_pwd: string = '';
  public error = 0;
  public errormsg: string = '';
  public isUser: any;

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
    this.error = 0;
    Object.keys(this.requiredForm.controls).forEach(key => {
      const controlErrors: any = this.requiredForm.get(key)?.errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          this.error++;
        });
      }
    });
    this.isUser = this.users.find(e => e.email === this.email);
    if(this.isUser) {
      this.errormsg = "Account already exists!";
      return;
    }
    if(this.error==0 && !this.requiredForm.hasError('notSame')) {
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

}
