import { ChangeDetectorRef, Component, ElementRef, inject, input, signal, viewChild, } from '@angular/core';
import { MatListItem } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Todolist } from '../../todolist.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-item',
  imports: [NgIf, MatListItem, MatCheckboxModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  // @Input() item!:todolistObj
  isEditing = signal(false);
  item = input.required<todolistObj>()
  todolist = inject(Todolist);

  constructor(private cdr: ChangeDetectorRef) { }

  inputRef = viewChild<ElementRef<HTMLInputElement>>('inputRef');

  checkedHandle(id: string, e: Event) {
    this.todolist.checkedTodo(id, (e.target as HTMLInputElement).checked)
  }
  keyupHandle(id: string, e: KeyboardEvent) {
    if (e.key !== "Enter") return;
    this.todolist.editTodo(id, (e.target as HTMLInputElement).value);
    this.isEditing.set(false);
  }
  editClick() {
    this.isEditing.set(true);
    this.cdr.detectChanges();
    if (this.inputRef()) {
      this.inputRef()?.nativeElement.focus()
    }
  }
  blurHanlde() {
    this.isEditing.set(false);
  }
}
