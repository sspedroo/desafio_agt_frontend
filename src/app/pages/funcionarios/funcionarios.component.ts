import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FuncionariosService } from '../../services/funcionarios.service';
import { Funcionario } from '../../interfaces/funcionario.model';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DescricaoDePaginaComponent } from "../../shared/descricao-de-pagina/descricao-de-pagina.component";

@Component({
  selector: 'app-funcionarios',
  imports: [
    TableModule,
    ButtonModule,
    ToastModule,
    DescricaoDePaginaComponent
],
  templateUrl: './funcionarios.component.html',
  styleUrl: './funcionarios.component.scss',
  providers: [MessageService]
})
export class FuncionariosComponent implements OnInit{
  private funcionarioService = inject(FuncionariosService);
  private messageService = inject(MessageService);

  funcionarios: Funcionario[] = [];

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
          severity: error, 
          detail: error.error.detail
        })
      }
    })
  }
}
