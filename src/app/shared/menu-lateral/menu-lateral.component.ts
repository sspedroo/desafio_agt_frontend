import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-lateral',
  imports: [
    DrawerModule,
    RouterLink,
    RouterModule
  ],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.scss',
})
export class MenuLateralComponent implements OnInit, OnDestroy{
  private router = inject(Router);
  private subscription!: Subscription;
  exibirMenuLateral = false;

    ngOnInit() {
    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.fecharMenuLateral();
      }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  abrirMenuLateral() {
    this.exibirMenuLateral = true;
  }

  fecharMenuLateral() {
    this.exibirMenuLateral = false;
  }
}
