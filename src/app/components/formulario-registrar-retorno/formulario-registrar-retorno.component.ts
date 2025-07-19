import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ViagensService } from '../../services/viagens.service';
import { FinalizarRegistroViagem } from '../../interfaces/registro-viagem.model';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-formulario-registrar-retorno',
  imports: [
    ButtonModule,
    FormsModule,
    InputTextModule,
    ToastModule
  ],
  templateUrl: './formulario-registrar-retorno.component.html',
  styleUrl: './formulario-registrar-retorno.component.scss',
  providers: [MessageService]
})
export class FormularioRegistrarRetornoComponent {
  private viagemService = inject(ViagensService);
  private messageService = inject(MessageService);

  placaVeiculo: string = '';


  registrarRetorno() {
    if (!this.placaVeiculo) {
      console.error('Placa do veículo é obrigatória.');
      return;
    }

    const retornoViagemData: FinalizarRegistroViagem = {
      placaVeiculo: this.placaVeiculo
    }

    this.viagemService.registrarRetorno(retornoViagemData).subscribe({
      next: () => {
        console.log('Retorno registrado com sucesso.');
        this.placaVeiculo = ''; // Limpa o campo após o registro
      },
      error: (error) => {
        console.error('Erro ao registrar retorno:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erro ao registrar retorno',
          detail: error.error.detail
        })
      }
    });
  }
}
