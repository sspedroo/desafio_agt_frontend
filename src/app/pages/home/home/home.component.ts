import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PatioVeiculosComponent } from "../../../components/patio-veiculos/patio-veiculos.component";
import { Router } from '@angular/router';
import { FormularioRegistrarSaidaComponent } from "../../../components/formulario-registrar-saida/formulario-registrar-saida.component";
import { FormularioRegistrarRetornoComponent } from "../../../components/formulario-registrar-retorno/formulario-registrar-retorno.component";
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { RegistroViagem } from '../../../interfaces/registro-viagem.model';
import { VeiculoService } from '../../../services/veiculo.service';
import { Veiculo } from '../../../interfaces/veiculo.model';

@Component({
  selector: 'app-home',
  imports: [
    ButtonModule,
    DialogModule,
    PatioVeiculosComponent,
    FormularioRegistrarSaidaComponent,
    FormularioRegistrarRetornoComponent,
    ToastModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [MessageService]
})
export class HomeComponent implements OnInit{

  private router = inject(Router);
  private messageService = inject(MessageService);
  private veiculosServico = inject(VeiculoService);

  veiculosEmViagem: Veiculo[] = [];
  veiculosNoPatio: Veiculo[] = [];

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

  saidaRegistradaComSucesso(registro: RegistroViagem) {
    this.exibirModalRegistrarSaida = false;
    this.recuperarVeiculosNoPatio();
    this.recuperarVeiculosEmViagem();
    this.messageService.add({
      severity: 'success', 
      summary: 'Sucesso',
      detail: `Saída registrada com sucesso para o veículo ${registro.veiculo.placa} com o(a) motorista ${registro.motorista.nome}!`,
    });
  }

  retornoRegistradoComSucesso(registro: RegistroViagem) {
    this.exibirModalRegistrarRetorno = false;
    this.recuperarVeiculosNoPatio();
    this.recuperarVeiculosEmViagem();
    this.messageService.add({
      severity: 'success', 
      summary: 'Sucesso',
      detail: `Retorno registrado com sucesso para o veículo ${registro.veiculo.placa} com o(a) motorista ${registro.motorista.nome}!`,
    });
  }

  ngOnInit(): void {
    this.recuperarVeiculosNoPatio();
    this.recuperarVeiculosEmViagem();
  }

  recuperarVeiculosNoPatio() {
    this.veiculosServico.recuperarTodosVeiculos('NO_PATIO').subscribe({
      next: (resposta) => {
        this.veiculosNoPatio = resposta;
      },
      error: (erro) => {
        console.error('Erro ao recuperar veículos no pátio:', erro);
      }
    });
  }

  recuperarVeiculosEmViagem() {
    this.veiculosServico.recuperarTodosVeiculos('EM_VIAGEM').subscribe({
      next: (resposta) => {
        this.veiculosEmViagem = resposta;
      },
      error: (erro) => {
        console.error('Erro ao recuperar veículos em viagem:', erro);
      }
    });
  }
}
