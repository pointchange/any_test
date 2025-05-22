import { MatCardHeader } from "@angular/material/card";
import { MatInputModule } from '@angular/material/input';
import { Component, inject, signal } from "@angular/core";
import { Todolist } from "../todolist.service";
import { FormsModule } from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@Component({
    selector:'app-header',
    // standalone:true,
    templateUrl:'./header.component.html',
    styleUrl:'./header.component.css',
    imports:[MatCardHeader,MatInputModule,FormsModule,MatButtonModule,MatIconModule]
})

export class HeaderComponent{
    todolist=inject(Todolist);
    value=signal('');
    keyupHandle(e:KeyboardEvent){
        if(e.key!=="Enter")return;
        const {value}=e.target as HTMLInputElement;
        if(value.trim()==='')return;
        this.todolist.addTodo(value)
    }
}