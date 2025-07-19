import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CriarVeiculo, RespostaPaginadaVeiculos, Veiculo } from '../interfaces/veiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl + '/veiculos';

  recuperarTodosVeiculos(status?: 'NO_PATIO' | 'EM_VIAGEM', placa?: string, modelo?: string): Observable<RespostaPaginadaVeiculos> {
  
    let params = new HttpParams();
    if (status) {
      params = params.set('status', status);
    }
    if (placa) {
      params = params.set('placa', placa);
    }
    if (modelo) {
      params = params.set('modelo', modelo);
    }

    return this.http.get<RespostaPaginadaVeiculos>(this.apiUrl, { params });
  }

  registrarVeiculo(veiculo: CriarVeiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(this.apiUrl, veiculo);
  }
}
