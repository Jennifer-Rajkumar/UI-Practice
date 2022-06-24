import { Component } from '@angular/core';
  
import { NotificationService } from './notification.service'
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  
  constructor(private notifyService : NotificationService) { }
  
  showToasterSuccess(){
      this.notifyService.showSuccess("This is success", "Success")
  }
  
  showToasterError(){
      this.notifyService.showError("This is error", "Error")
  }
  
  showToasterInfo(){
      this.notifyService.showInfo("This is info", "Info")
  }
  
  showToasterWarning(){
      this.notifyService.showWarning("This is warning", "Warning")
  }
}