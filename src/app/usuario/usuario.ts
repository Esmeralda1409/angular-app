import { Component, inject } from '@angular/core';
import { Auth } from '../service/auth';
 
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  protected auth = inject(Auth);
}
