import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormNormal } from './form-normal/form-normal';
import { FormReactive } from './form-reactive/form-reactive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Rutas y Formularios';
}
