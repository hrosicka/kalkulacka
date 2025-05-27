import { Component } from '@angular/core';
import { KalkulatorComponent } from './kalkulator/kalkulator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [KalkulatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kalkulacka';
}