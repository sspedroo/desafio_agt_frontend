import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, output } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ViagensService } from '../../services/viagens.service';
import { VeiculoService } from '../../services/veiculo.service';
import { RespostaPaginadaVeiculos, Veiculo, VeiculoStatus } from '../../interfaces/veiculo.model';
import { Funcionario } from '../../interfaces/funcionario.model';
import { TextareaModule } from 'primeng/textarea';
import { FuncionariosService } from '../../services/funcionarios.service';
import { CriarRegistroViagem, RegistroViagem } from '../../interfaces/registro-viagem.model';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-formulario-registrar-saida',
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    CommonModule,
    InputTextModule,
    SelectModule,
    TextareaModule,
    ToastModule
  ],
  templateUrl: './formulario-registrar-saida.component.html',
  styleUrl: './formulario-registrar-saida.component.scss',
  providers: [MessageService]
})
export class FormularioRegistrarSaidaComponent implements OnInit{
  saidaRegistrada = output<RegistroViagem>();
  private viagemService = inject(ViagensService);
  private veiculoService = inject(VeiculoService);
  private funcioarioService = inject(FuncionariosService)
  private fb = inject(FormBuilder);
  private messageService = inject(MessageService);

  veiculos: {nome: string, id: string}[] = [];
  funcionarios: Funcionario[] = [];
  saidaForm!: FormGroup;
  
  ngOnInit(): void {
    this.saidaForm = this.fb.group({
      placaVeiculo: [null, Validators.required],
      funcionarioMotoristaId: [null, Validators.required],
      destino: [null, Validators.required],
      passageiros: [null]
    })

    this.recuperarVeiculos();
    this.recuperarFuncionarios();
  }

  recuperarVeiculos() {
    this.veiculoService.recuperarTodosVeiculos(VeiculoStatus.NO_PATIO).subscribe({
      next: (veiculos: Veiculo[]) => {
        this.veiculos = veiculos.map(veiculo => {
          return {
            nome: `Placa: ${veiculo.placa} - Modelo: ${veiculo.modelo}`,
            id: veiculo.placa
          };
        })
      },
      error: (error) => {
        console.error('Erro ao recuperar veículos:', error);
      }
    });
  }

  recuperarFuncionarios() {
    this.funcioarioService.recuperarTodosFuncionarios().subscribe({
      next: (funcionarios: Funcionario[]) => {
        this.funcionarios = funcionarios.filter(funcionario => !funcionario.emViagem);
      },
      error: (error) => {
        console.error('Erro ao recuperar funcionários:', error);
      }
    });
  }

  registrarSaida() {
    if (this.saidaForm.invalid) {
      this.saidaForm.markAllAsTouched();
      return;
    }

    const registro: CriarRegistroViagem = {
      placaVeiculo: this.saidaForm.value.placaVeiculo,
      funcionarioMotoristaId: this.saidaForm.value.funcionarioMotoristaId,
      destino: this.saidaForm.value.destino,
      passageiros: this.saidaForm.value.passageiros
    };

    this.viagemService.registrarSaida(registro).subscribe({
      next: (response) => {
        this.saidaRegistrada.emit(response);
        this.saidaForm.reset();
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro ao registrar saída',
          detail: error.error.detail
        });
      }
    });
  }
}
