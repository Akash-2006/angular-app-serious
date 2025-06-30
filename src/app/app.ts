import { Component } from '@angular/core';
import { RickrollComponent } from './rickroll/rickroll.component';

@Component({
  selector: 'app-root',
  imports: [RickrollComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'rickroll-app';
}
