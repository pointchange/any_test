import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardActions, MatCardFooter } from '@angular/material/card';
import { Component, computed, inject  } from '@angular/core';
import { Todolist } from '../todolist.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [MatCardFooter,MatCheckboxModule,MatButtonModule,MatIconModule,MatCardActions],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  todolist=inject(Todolist);
  total=computed(()=>this.todolist.list().length);
  done=computed(()=>this.todolist.list().reduce((pre,cur)=>pre+(cur.done?1:0),0));
  checkedAllHandle(done:boolean){
    this.todolist.checkedAll(done);
  }
}
