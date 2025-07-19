import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PatioVeiculosComponent } from "../../../components/patio-veiculos/patio-veiculos.component";
import { Router } from '@angular/router';
import { FormularioRegistrarSaidaComponent } from "../../../components/formulario-registrar-saida/formulario-registrar-saida.component";
import { FormularioRegistrarRetornoComponent } from "../../../components/formulario-registrar-retorno/formulario-registrar-retorno.component";

@Component({
  selector: 'app-home',
  imports: [
    ButtonModule,
    DialogModule,
    PatioVeiculosComponent,
    FormularioRegistrarSaidaComponent,
    FormularioRegistrarRetornoComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private router = inject(Router);

  exibirModalRegistrarSaida = false;
  exibirModalRegistrarRetorno = false;

  abrirModalRegistrarSaida() {
    this.exibirModalRegistrarSaida = true;
  }

  abrirModalRegistrarRetorno() {
    this.exibirModalRegistrarRetorno = true;
  }

  navegarParaRegistrosDeViagens() {
    this.router.navigate(['/registros-de-viagens']);
  }
}
