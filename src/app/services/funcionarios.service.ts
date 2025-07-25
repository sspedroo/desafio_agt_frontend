import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CriarFuncionario, Funcionario } from '../interfaces/funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl + '/funcionarios';

  recuperarTodosFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.apiUrl);
  }

  registrarFuncionario(funcionario: CriarFuncionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.apiUrl, funcionario);
  }
}
