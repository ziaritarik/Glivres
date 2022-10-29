import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BookModule {
  photo:string;
  constructor(public titre:string,public author:string){

  }
 }
