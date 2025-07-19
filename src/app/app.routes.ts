import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home/home.component').then(m => m.HomeComponent),
        title: 'Home - Portaria AGT',
    },
    {
        path: 'registros-de-viagens',
        loadComponent: () => import('./pages/registros-de-viagens/registros-de-viagens.component').then(m => m.RegistrosDeViagensComponent),
        title: 'Registros de Viagens',
    },
    {
        path: 'colaboradores',
        loadComponent: () => import('./pages/funcionarios/funcionarios.component').then(m => m.FuncionariosComponent),
        title: 'Colaboradores'
    },
    {
        path: 'veiculos',
        loadComponent: () => import('./pages/veiculos/veiculos.component').then(m => m.VeiculosComponent),
        title: 'Veículos'
    }
];
