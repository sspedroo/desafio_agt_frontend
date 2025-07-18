import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PatioVeiculosComponent } from "../../../components/patio-veiculos/patio-veiculos.component";
import { Router } from '@angular/router';
import { FormularioRegistrarSaidaComponent } from "../../../components/formulario-registrar-saida/formulario-registrar-saida.component";

@Component({
  selector: 'app-home',
  imports: [
    ButtonModule,
    DialogModule,
    PatioVeiculosComponent,
    FormularioRegistrarSaidaComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private router = inject(Router);

  exibirModalRegistrarSaida = false;

  abrirModalRegistrarSaida() {
    this.exibirModalRegistrarSaida = true;
  }

  navegarParaRegistrosDeViagens() {
    this.router.navigate(['/registros-de-viagens']);
  }
}
