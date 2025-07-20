import { Component, inject, OnInit } from '@angular/core';
import { DescricaoDePaginaComponent } from "../../shared/descricao-de-pagina/descricao-de-pagina.component";
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { VeiculoService } from '../../services/veiculo.service';
import { MessageService } from 'primeng/api';
import { RespostaPaginadaVeiculos, Veiculo } from '../../interfaces/veiculo.model';
import { DialogModule } from 'primeng/dialog';
import { FormularioCadastrarVeiculoComponent } from "../../components/formulario-cadastrar-veiculo/formulario-cadastrar-veiculo.component";
import { VeiculoStatusPipe } from '../../shared/pipes/veiculo-status.pipe';

@Component({
  selector: 'app-veiculos',
  imports: [
    DescricaoDePaginaComponent,
    TableModule,
    ButtonModule,
    ToastModule,
    DialogModule,
    FormularioCadastrarVeiculoComponent,
    VeiculoStatusPipe
],
  templateUrl: './veiculos.component.html',
  styleUrl: './veiculos.component.scss',
  providers: [MessageService]
})
export class VeiculosComponent implements OnInit{

  private veiculoService = inject(VeiculoService);
  private messageService = inject(MessageService);

  veiculos: Veiculo[] = []
  exibirModalCriarVeiculo = false;

  ngOnInit(): void {
    this.recuperarTodosVeiculos();
  }


  recuperarTodosVeiculos(){
    this.veiculoService.recuperarTodosVeiculos().subscribe({
      next: (response) => {
        this.veiculos = response;
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          detail: error.error.detail
        })
      }
    })
  }

  veiculoCriadoComSucesso(veiculo: Veiculo) {
    this.exibirModalCriarVeiculo = false;
    this.recuperarTodosVeiculos();
    this.messageService.add({
      severity: 'success',
      detail: `Veiculo ${veiculo.modelo} com a placa ${veiculo.placa} foi criado com sucesso!`
    })
  }
}
