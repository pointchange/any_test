import { MatCardContent } from '@angular/material/card';
import { Component, inject } from '@angular/core';
import { ItemComponent } from "./item/item.component";
import { NgFor } from '@angular/common';
import { Todolist } from '../todolist.service';
import {  MatSelectionList } from '@angular/material/list';
@Component({
  selector: 'app-list',
  imports: [ItemComponent,NgFor,MatCardContent,MatSelectionList],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  // @Input() list!: List
  todolist=inject(Todolist)
}
