import { Component, inject, OnInit } from '@angular/core';
import { ViagensService } from '../../services/viagens.service';
import { RegistroViagem } from '../../interfaces/registro-viagem.model';
import { CardRegistroViagemComponent } from "../../components/card-registro-viagem/card-registro-viagem.component";
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registros-de-viagens',
  imports: [CardRegistroViagemComponent, ButtonModule, TooltipModule],
  templateUrl: './registros-de-viagens.component.html',
  styleUrl: './registros-de-viagens.component.scss'
})
export class RegistrosDeViagensComponent implements OnInit {

  private viagensService = inject(ViagensService);
  private router = inject(Router);
  viagens: RegistroViagem[] = [];

  ngOnInit(): void {
    this.recuperarViagens();
  }

  recuperarViagens() {
    this.viagensService.recuperarViagens().subscribe({
      next: (viagens) => {
        this.viagens = viagens;
      },
      error: (error) => {
        console.error('Erro ao recuperar viagens:', error);
      }
    });
  }

  navegarParaHome() {
    this.router.navigate(['/']);
  }

}
