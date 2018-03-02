import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class BookModule {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public url: string
  ) {}
}
