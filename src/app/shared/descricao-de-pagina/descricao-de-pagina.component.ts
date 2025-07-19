import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-descricao-de-pagina',
  imports: [
    ButtonModule,
    TooltipModule
  ],
  templateUrl: './descricao-de-pagina.component.html',
  styleUrl: './descricao-de-pagina.component.scss'
})
export class DescricaoDePaginaComponent {
  @Input({required: true}) descricao!: string;
  private router = inject(Router);


  navegarParaHome() {
    this.router.navigate(['/']);
  }
}
