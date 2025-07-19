import { Component, inject, OnInit, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FuncionariosService } from '../../services/funcionarios.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-formulario-cadastrar-funcionario',
  imports: [
    ReactiveFormsModule,
    ButtonModule, 
    InputTextModule,
    ToastModule
  ],
  templateUrl: './formulario-cadastrar-funcionario.component.html',
  styleUrl: './formulario-cadastrar-funcionario.component.scss',
})
export class FormularioCadastrarFuncionarioComponent implements OnInit{
  funcionarioCriado = output<string>();
  private funcionarioService = inject(FuncionariosService);
  private messageService= inject(MessageService);
  private fb = inject(FormBuilder);

  novoFuncionarioForm!: FormGroup;

  ngOnInit(): void {
    this.novoFuncionarioForm = this.fb.group({
      nome: [null, Validators.required],
      cnh: [null, Validators.required]
    })
  }

  registrarFuncionario() {
    if(this.novoFuncionarioForm.invalid) {
      return
    }

    this.funcionarioService.registrarFuncionario(this.novoFuncionarioForm.value).subscribe({
      next: (response) => {
        this.funcionarioCriado.emit(response.nome);
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: "Não foi possível salvar o funcionário",
          detail: error.error.detail
        })
      }
    })
  }
}
