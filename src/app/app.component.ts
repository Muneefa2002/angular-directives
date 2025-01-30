import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//**-component directive */
export class AppComponent {
  title = 'test';

  ngOnInit(): void {
    console.log("hi");

  }


  //**-structural directive */
  // if
  isAllowed:boolean =true;
  // for loop
  userList:any[]=[
    {name:'sara', age:21},
    {name:'sana', age:26},
    {name:'raj', age:31},
  ];
  // switch
  selectedValue:string="";
  // **-atttribute directive */
  // ngstyle 
  paracolor:string ='green'
  //ngclass
  isActive:boolean=false;
  toggle(){
    this.isActive =!this.isActive;
  }


}
