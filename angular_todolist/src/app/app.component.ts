import { MatCardModule } from '@angular/material/card';
import { Component, } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ListComponent } from './list/list.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, ListComponent, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent { }