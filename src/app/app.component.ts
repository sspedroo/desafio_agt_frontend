import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { MenuLateralComponent } from "./shared/menu-lateral/menu-lateral.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, DatePickerModule, MenuLateralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'desafio_agt';
  @ViewChild('menuLateral') menuLateral!: MenuLateralComponent;

  isDarkTheme = true;


  trocarTema() {
    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle('my-app-dark');
      this.isDarkTheme = !this.isDarkTheme;
    }
  }

  abrirMenuLateral() {
    this.menuLateral.abrirMenuLateral();
  }
}
