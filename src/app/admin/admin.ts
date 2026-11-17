import { Component, inject } from '@angular/core';
import { Auth } from '../service/auth';
 
@Component({
  selector: 'app-admin',
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  protected auth = inject(Auth);
}

