import { Component, inject, OnInit, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { VeiculoService } from '../../services/veiculo.service';
import { Veiculo } from '../../interfaces/veiculo.model';

@Component({
  selector: 'app-formulario-cadastrar-veiculo',
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    ToastModule
  ],
  templateUrl: './formulario-cadastrar-veiculo.component.html',
  styleUrl: './formulario-cadastrar-veiculo.component.scss',
  providers: [MessageService]
})
export class FormularioCadastrarVeiculoComponent implements OnInit{
  veiculoCriado = output<Veiculo>();
  private veiculoService = inject(VeiculoService);
  private messageService = inject(MessageService);
  private fb = inject(FormBuilder);

  novoVeiculoForm!: FormGroup;

  ngOnInit(): void {
    this.novoVeiculoForm = this.fb.group({
      placa: [null, Validators.required],
      modelo: [null, Validators.required]
    })
  }

  registrarVeiculo() {
    if (this.novoVeiculoForm.invalid) {
      this.novoVeiculoForm.markAllAsTouched();
      return
    }

    this.veiculoService.registrarVeiculo(this.novoVeiculoForm.value).subscribe({
      next: (response: Veiculo) => {
        this.veiculoCriado.emit(response);
        this.novoVeiculoForm.reset();
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Não foi possível registrar o veículo',
          detail: error.error.detail
        })
      }
    })
  }
}
