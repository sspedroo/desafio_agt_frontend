import { Component, inject, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { VeiculoService } from '../../services/veiculo.service';
import { Veiculo } from '../../interfaces/veiculo.model';
import { CardVeiculoComponent } from "../card-veiculo/card-veiculo.component";

@Component({
  selector: 'app-patio-veiculos',
  imports: [
    DividerModule,
    CardVeiculoComponent
],
  templateUrl: './patio-veiculos.component.html',
  styleUrl: './patio-veiculos.component.scss'
})
export class PatioVeiculosComponent implements OnInit{

  private veiculosServico = inject(VeiculoService);

  veiculosNoPatio: Veiculo[] = [];
  veiculosEmViagem: Veiculo[] = [];

  ngOnInit(): void {
    this.recuperarVeiculosNoPatio();
    this.recuperarVeiculosEmViagem();
  }

  recuperarVeiculosNoPatio() {
    this.veiculosServico.recuperarTodosVeiculos('NO_PATIO').subscribe({
      next: (resposta) => {
        this.veiculosNoPatio = resposta.content;
      },
      error: (erro) => {
        console.error('Erro ao recuperar veículos no pátio:', erro);
      }
    });
  }

  recuperarVeiculosEmViagem() {
    this.veiculosServico.recuperarTodosVeiculos('EM_VIAGEM').subscribe({
      next: (resposta) => {
        this.veiculosEmViagem = resposta.content;
      },
      error: (erro) => {
        console.error('Erro ao recuperar veículos em viagem:', erro);
      }
    });
  }
  
}
