import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../service/auth';

 
@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected auth = inject(Auth);
  private router = inject(Router);
 
  salir(): void {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
