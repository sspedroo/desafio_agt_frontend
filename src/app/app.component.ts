import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, DatePickerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'desafio_agt';

  isDarkTheme = true;


  trocarTema() {
    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle('my-app-dark');
      this.isDarkTheme = !this.isDarkTheme;
    }
  }
}
