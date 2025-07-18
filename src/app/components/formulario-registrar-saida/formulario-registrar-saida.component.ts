import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ViagensService } from '../../services/viagens.service';
import { VeiculoService } from '../../services/veiculo.service';
import { RespostaPaginadaVeiculos, Veiculo } from '../../interfaces/veiculo.model';
import { Funcionario } from '../../interfaces/funcionario.model';
import { TextareaModule } from 'primeng/textarea';
import { FuncionariosService } from '../../services/funcionarios.service';

@Component({
  selector: 'app-formulario-registrar-saida',
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    CommonModule,
    InputTextModule,
    SelectModule,
    TextareaModule
  ],
  templateUrl: './formulario-registrar-saida.component.html',
  styleUrl: './formulario-registrar-saida.component.scss'
})
export class FormularioRegistrarSaidaComponent implements OnInit{

  private viagemService = inject(ViagensService);
  private veiculoService = inject(VeiculoService);
  private funcioarioService = inject(FuncionariosService)
  private fb = inject(FormBuilder);

  veiculos: Veiculo[] = [];
  funcionarios: Funcionario[] = [];
  saidaForm!: FormGroup;
  
  ngOnInit(): void {
    this.saidaForm = this.fb.group({
      placaVeiculo: [null, Validators.required],
      funcionarioMotoristaId: [null, Validators.required],
      destino: [null, Validators.required],
      passageiros: [[]]
    })

    this.recuperarVeiculos();
    this.recuperarFuncionarios();
  }

  recuperarVeiculos() {
    this.veiculoService.recuperarTodosVeiculos().subscribe({
      next: (veiculos: RespostaPaginadaVeiculos) => {
        this.veiculos = veiculos.content;
      },
      error: (error) => {
        console.error('Erro ao recuperar veículos:', error);
      }
    });
  }

  recuperarFuncionarios() {
    this.funcioarioService.recuperarTodosFuncionarios().subscribe({
      next: (funcionarios: Funcionario[]) => {
        this.funcionarios = funcionarios;
      },
      error: (error) => {
        console.error('Erro ao recuperar funcionários:', error);
      }
    });
  }
}
