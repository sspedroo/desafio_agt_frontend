import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FuncionariosService } from '../../services/funcionarios.service';
import { Funcionario } from '../../interfaces/funcionario.model';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DescricaoDePaginaComponent } from "../../shared/descricao-de-pagina/descricao-de-pagina.component";
import { DialogModule } from 'primeng/dialog';
import { FormularioCadastrarFuncionarioComponent } from "../../components/formulario-cadastrar-funcionario/formulario-cadastrar-funcionario.component";

@Component({
  selector: 'app-funcionarios',
  imports: [
    TableModule,
    ButtonModule,
    ToastModule,
    DescricaoDePaginaComponent,
    DialogModule,
    FormularioCadastrarFuncionarioComponent
],
  templateUrl: './funcionarios.component.html',
  styleUrl: './funcionarios.component.scss',
  providers: [MessageService]
})
export class FuncionariosComponent implements OnInit{
  private funcionarioService = inject(FuncionariosService);
  private messageService = inject(MessageService);

  funcionarios: Funcionario[] = [];
  exibirModalCriarFuncionario = false;

  ngOnInit(): void {
    this.recuperarTodosFuncionarios();
  }

  recuperarTodosFuncionarios() {
    this.funcionarioService.recuperarTodosFuncionarios().subscribe({
      next: (response) => {
        this.funcionarios = response;
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error', 
          detail: error.error.detail
        })
      }
    })
  }

  funcionarioCriadoComSucesso(nome: string) {
    this.exibirModalCriarFuncionario = false;
    this.messageService.add({
      severity: 'success', 
      summary: 'Sucesso',
      detail: `Funcionário ${nome} criado com sucesso!`,
    })
  }
}
