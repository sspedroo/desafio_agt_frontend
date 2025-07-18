import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CriarRegistroViagem, FinalizarRegistroViagem, RegistroViagem } from '../interfaces/registro-viagem.model';

@Injectable({
  providedIn: 'root'
})
export class ViagensService {

  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl + '/viagens';

  recuperarViagens(): Observable<RegistroViagem[]> {
    return this.http.get<RegistroViagem[]>(this.apiUrl + '/registros');
  }

  registrarSaida(saida: CriarRegistroViagem): Observable<RegistroViagem> {
    return this.http.post<RegistroViagem>(this.apiUrl + '/saida', saida);
  }

  registrarRetorno(retorno:FinalizarRegistroViagem): Observable<RegistroViagem> {
    return this.http.post<RegistroViagem>(this.apiUrl + '/retorno', retorno);
  }
}
